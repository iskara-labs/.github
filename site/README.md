# Iskara Labs corporate site

Source for **https://iskaralabs.co**.

## Purpose

This directory is the public corporate website for the Iskara Labs development brand and portfolio. It intentionally lives inside the organization-level `.github` repository so the public organization identity and the corporate website share one governed source of truth.

The technical **Universal AI Platform** remains in its own repository and is not used as the corporate website.

## Legal truth boundary

The website is pre-incorporation aware:

- Current development brand: **Iskara Labs**
- Founder: **Sedat İşkara**
- Planned company: **ISKARA LABS OÜ**
- Planned jurisdiction: **Estonia**
- Status: **incorporation in progress**

Until incorporation is complete and verified, the site must not publish a registry code, VAT number, registered address, registered-operator claim, parent-company relationship or IP assignment.

Update legal facts through `lib/company.ts` only after independent verification.

## Portfolio boundary

Customer-facing products and brands are listed in `lib/portfolio.ts`. Infrastructure, archived donor repositories and release-only repositories are not represented as separate products.

ReguShield AI remains independent from the Iskara Labs portfolio.

## Local development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run check
```

CI gate: `.github/workflows/iskara-labs-site.yml` runs the same typecheck + production build on every site pull request. The CI workflow itself is versioned on the default branch so pull requests are evaluated by a trusted base workflow.

## Vercel

Target setup:

- Team: **Iskara Labs**
- Git repository: **iskara-labs/.github**
- Root Directory: **site**
- Framework: **Next.js**
- Production domain: **iskaralabs.co**
- Production branch: **main**

Public indexing is environment-aware:

- Vercel **Production** is indexable after the custom-domain cutover.
- Preview and Development stay `noindex` / disallow.
- Emergency override: set `NEXT_PUBLIC_PUBLIC_SITE_READY=false` to close indexing again without changing code.

The production indexing switch was activated only after `iskaralabs.co` and `www.iskaralabs.co` showed Valid Configuration in Vercel and the apex domain was verified on Vercel DNS.
