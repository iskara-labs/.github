import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const read = (path) => readFileSync(join(process.cwd(), path), "utf8");

const experience = read("components/ExperienceLayer.tsx");
assert.match(experience, /usePathname/);
assert.match(experience, /\[pathname\]/);
assert.match(experience, /MutationObserver/);
assert.match(experience, /1200/);

const company = read("lib/company.ts");
assert.match(company, /https:\/\/iskaralabs\.co\/founder/);
assert.doesNotMatch(company, /nowly\.com\.tr\/founder/);

const sitemap = read("app/sitemap.ts");
assert.match(sitemap, /"\/founder"/);

const founder = read("app/founder/page.tsx");
assert.match(founder, /Founder-led product systems/);
assert.doesNotMatch(founder, /nowly\.com\.tr\/founder/);

const home = read("app/page.tsx");
const companyPage = read("app/company/page.tsx");
const footer = read("components/SiteFooter.tsx");
const contact = read("app/contact/page.tsx");
for (const source of [home, companyPage, footer, contact]) {
  assert.doesNotMatch(source, /nowly\.com\.tr\/founder/);
}

const signal = read("components/SignalStrip.tsx");
assert.match(signal, /signal-group/);
assert.match(signal, /aria-hidden/);

const css = read("app/globals.css");
assert.match(css, /overflow-x:\s*clip/);
assert.match(css, /\.signal-group/);
assert.match(css, /@media \(max-width: 400px\)/);

const profile = read("../profile/README.md");
assert.doesNotMatch(profile, /Portfolio priorities/);
assert.doesNotMatch(profile, /Nowly founder profile/);
assert.match(profile, /Private product repositories/);

console.log("Iskara Labs site contracts: PASS");


const layout = read("app/layout.tsx");
assert.match(layout, /Skip to content/);
assert.match(layout, /id="main-content"/);
assert.match(layout, /DM_Sans/);
assert.match(layout, /Manrope/);

const header = read("components/SiteHeader.tsx");
assert.match(header, /usePathname/);
assert.match(header, /aria-current/);

const polishedCss = read("app/globals.css");
assert.doesNotMatch(polishedCss, /fonts\.googleapis\.com/);
assert.match(polishedCss, /\.skip-link/);
