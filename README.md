# Finora

Finora is a React/Vite financial information website focused on credit cards, loans and practical personal finance education.

## Included in this build

- Existing Finora visual design and homepage CTA.
- Existing Credit Cards page and its card images preserved.
- 20 educational articles with expanded original editorial content.
- About page.
- Editorial Policy.
- Advertiser Disclosure.
- Contact page.
- Privacy Policy covering analytics, cookies and advertising.
- Terms of Use.
- Dynamic page titles, descriptions and canonical URLs.
- `robots.txt`.
- Existing Google Tag Manager container `GTM-PMCNCVFD` preserved.
- Existing GA4 setup through GTM is preserved.

## Before publishing

1. Replace `contact@finorabizz.com` in `src/App.jsx` with the real public contact address if you will use a different email.
2. After AdSense approves the site and gives you a publisher ID, add the official AdSense code through Google Tag Manager or the method recommended by Google.
3. Do not add an `ads.txt` file until you have the exact publisher information supplied by AdSense.
4. Search Console and sitemap are intentionally not included in this version, per the current project plan.

## Build

```bash
npm install
npm run build
```

The Credit Cards page uses the files in `public/images/cards/`. Do not delete or rename that folder when uploading the project to GitHub.
