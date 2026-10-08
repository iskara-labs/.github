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
// The rail renders every product exactly once: no duplicated marquee copy.
assert.doesNotMatch(signal, /group\((true|false)\)/);
assert.doesNotMatch(signal, /signal-track/);

const premiumCss = read("app/premium.css");
assert.match(premiumCss, /prefers-reduced-motion: reduce/);
assert.match(premiumCss, /\.orrery-node\.is-edge/);
assert.match(read("app/layout.tsx"), /import "\.\/premium\.css"/);

const orrery = read("components/PortfolioOrrery.tsx");
assert.match(orrery, /prefers-reduced-motion/);
assert.match(orrery, /aria-pressed/);
// Deliberate default: the orrery opens on the studio overview, not an arbitrary product.
assert.match(orrery, /const SEQUENCE[^;]*\[\s*null,/);
assert.match(orrery, /useState\(0\)/);
assert.match(orrery, /Studio overview/);

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


const portfolioSource = read("lib/portfolio.ts");
// Public corporate surface must use only current product identities; legacy
// working names remain private/history where they belong.
for (const legacy of ["FounderOS", "QuantPilot", "VeriFactory"]) {
  assert.doesNotMatch(portfolioSource, new RegExp(legacy), "legacy working names must not leak into the public portfolio");
}


const founderPage = read("app/founder/page.tsx");
const companySource = read("lib/company.ts");
const rootLayout = read("app/layout.tsx");
for (const source of [founderPage, companySource, rootLayout]) {
  assert.doesNotMatch(source, /github\.com\/sedatiskara/, "personal GitHub should not be exposed by the corporate site");
}
assert.match(founderPage, /COMPANY\.github/);
assert.match(founderPage, /Iskara Labs GitHub/);
