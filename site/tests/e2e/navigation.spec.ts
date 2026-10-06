import { expect, test } from "@playwright/test";

const routes = [
  ["/", /Build the signal|living systems/i],
  ["/portfolio", /Different markets/i],
  ["/company", /Estonia-ready/i],
  ["/contact", /Start with context/i],
  ["/legal", /Pre-incorporation/i],
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

test("client navigation never blanks the route body", async ({ page }) => {
  await page.goto("/");
  await expectHealthyPage(page);

  for (const [label, path, heading] of [
    ["Portfolio", "/portfolio", /Different markets/i],
    ["Company", "/company", /Estonia-ready/i],
    ["Contact", "/contact", /Start with context/i],
  ] as const) {
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

test("portfolio marquee is clipped and cannot widen the page", async ({ page }) => {
  await page.goto("/");
  const strip = page.locator(".signal-strip");
  await expect(strip).toBeVisible();

  const metrics = await page.evaluate(() => {
    const strip = document.querySelector<HTMLElement>(".signal-strip");
    const track = document.querySelector<HTMLElement>(".signal-track");
    if (!strip || !track) return null;
    const rect = strip.getBoundingClientRect();
    return {
      stripLeft: rect.left,
      stripRight: rect.right,
      viewport: window.innerWidth,
      trackWidth: track.scrollWidth,
      docWidth: document.documentElement.scrollWidth,
    };
  });

  expect(metrics).not.toBeNull();
  expect(metrics!.stripLeft).toBeGreaterThanOrEqual(-1);
  expect(metrics!.stripRight).toBeLessThanOrEqual(metrics!.viewport + 1);
  expect(metrics!.trackWidth).toBeGreaterThan(metrics!.viewport);
  expect(metrics!.docWidth).toBeLessThanOrEqual(metrics!.viewport + 1);
});

test("mobile navigation remains tappable and inside the viewport", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile-only assertion");
  await page.goto("/");

  const navLinks = page.getByRole("navigation").getByRole("link");
  const count = await navLinks.count();
  expect(count).toBe(3);

  for (let i = 0; i < count; i += 1) {
    const box = await navLinks.nth(i).boundingBox();
    expect(box).not.toBeNull();
    expect(box!.x).toBeGreaterThanOrEqual(0);
    expect(box!.x + box!.width).toBeLessThanOrEqual((page.viewportSize()?.width ?? 0) + 1);
    expect(box!.height).toBeGreaterThanOrEqual(40);
  }

  await expectHealthyPage(page);
});
