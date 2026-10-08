import { expect, test } from "@playwright/test";

const routes = [
  ["/", /Build the signal|living systems/i],
  ["/portfolio", /Different markets/i],
  ["/company", /Estonia-ready/i],
  ["/contact", /Start with context/i],
  ["/legal", /Precise now/i],
  ["/founder", /Sedat İşkara/i],
] as const;

async function expectHealthyPage(page: import("@playwright/test").Page) {
  await expect(page.locator("main")).toBeVisible();
  await expect.poll(async () => {
    return page.locator("main").evaluate((el) => (el.textContent ?? "").trim().length);
  }).toBeGreaterThan(80);

  await expect.poll(async () => {
    return page.evaluate(() => {
      const reveal = document.querySelector<HTMLElement>("[data-reveal]");
      if (!reveal) return 1;
      return Number.parseFloat(getComputedStyle(reveal).opacity || "1");
    });
  }).toBeGreaterThan(0.95);

  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
  expect(overflow).toBeLessThanOrEqual(1);
}

async function openMenuIfCollapsed(page: import("@playwright/test").Page) {
  const menu = page.getByRole("button", { name: /^(Menu|Close)$/ });
  if (await menu.isVisible()) {
    if ((await menu.getAttribute("aria-expanded")) !== "true") await menu.click();
    await expect(menu).toHaveAttribute("aria-expanded", "true");
  }
}

test("client navigation never blanks the route body", async ({ page }) => {
  await page.goto("/");
  await expectHealthyPage(page);

  for (const [label, path, heading] of [
    ["Portfolio", "/portfolio", /Different markets/i],
    ["Company", "/company", /Estonia-ready/i],
    ["Contact", "/contact", /Start with context/i],
  ] as const) {
    await openMenuIfCollapsed(page);
    await page.getByRole("navigation").getByRole("link", { name: label }).click();
    await expect(page).toHaveURL(new RegExp(path.replace("/", "\\/") + "$"));
    await expect(page.getByRole("heading", { level: 1 })).toContainText(heading);
    await expectHealthyPage(page);
  }
});

test("all first-party routes render visible content without horizontal overflow", async ({ page }) => {
  for (const [path, heading] of routes) {
    await page.goto(path);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(heading);
    await expectHealthyPage(page);
  }
});

test("founder profile stays inside Iskara Labs", async ({ page }) => {
  await page.goto("/");
  const founder = page.getByRole("link", { name: /Founder profile/i }).first();
  await founder.scrollIntoViewIfNeeded();
  await founder.click();

  await expect(page).toHaveURL(/\/founder$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Sedat İşkara");
  await expect(page.locator("body")).not.toContainText("nowly.com.tr/founder");
  await expectHealthyPage(page);
});

test("portfolio rail lists each product once and cannot widen the page", async ({ page }) => {
  await page.goto("/");
  const rail = page.getByRole("region", { name: "Portfolio product sites" });
  await expect(rail).toBeVisible();

  const names = await rail.locator(".signal-cell strong").allTextContents();
  expect(names.length).toBe(6);
  expect(new Set(names).size).toBe(names.length);

  const metrics = await page.evaluate(() => {
    const viewport = window.innerWidth;
    const cells = [...document.querySelectorAll<HTMLElement>(".signal-cell a")].map((el) => {
      const r = el.getBoundingClientRect();
      return { left: r.left, right: r.right, height: r.height };
    });
    return { viewport, cells, docWidth: document.documentElement.scrollWidth };
  });

  for (const cell of metrics.cells) {
    expect(cell.left).toBeGreaterThanOrEqual(-1);
    expect(cell.right).toBeLessThanOrEqual(metrics.viewport + 1);
    expect(cell.height).toBeGreaterThanOrEqual(44);
  }
  expect(metrics.docWidth).toBeLessThanOrEqual(metrics.viewport + 1);
});

test("orrery labels stay inside the viewport", async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  const overflow = await page.evaluate(() => {
    const viewport = document.documentElement.clientWidth;
    return [...document.querySelectorAll<HTMLElement>(".orrery-node button")]
      .map((el) => el.getBoundingClientRect())
      .filter((r) => r.left < -1 || r.right > viewport + 1).length;
  });
  expect(overflow).toBe(0);
});

test("mobile navigation remains tappable and inside the viewport", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile-only assertion");
  await page.goto("/");
  await openMenuIfCollapsed(page);

  const navLinks = page.getByRole("navigation").getByRole("link");
  const count = await navLinks.count();
  expect(count).toBe(4);

  for (let i = 0; i < count; i += 1) {
    const box = await navLinks.nth(i).boundingBox();
    expect(box).not.toBeNull();
    expect(box!.x).toBeGreaterThanOrEqual(0);
    expect(box!.x + box!.width).toBeLessThanOrEqual((page.viewportSize()?.width ?? 0) + 1);
    expect(box!.height).toBeGreaterThanOrEqual(40);
  }

  await expectHealthyPage(page);
});
