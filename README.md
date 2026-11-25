# Patna Hydra Crane Rental

A lightweight, multi-page static website for Patna Hydra Crane Rental. It uses HTML, CSS, vanilla JavaScript and local image assets; there is no build step, backend, API key or paid service.

## Preview locally

Open `index.html` in a browser, or start a local static file server from this folder:

```powershell
py -m http.server 8000
```

Then visit `http://localhost:8000`. Stop the server with `Ctrl+C`.

## Deploy on GitHub Pages

1. Push the contents of this folder to the GitHub repository's default branch.
2. In the repository, open **Settings → Pages**, choose **Deploy from a branch**, select the default branch and `/ (root)`, then save.
3. Open the published site URL reported in the Pages settings. All page and asset references are relative, so the site also works under a repository subpath. The sitemap and robots directive are configured for `https://a242465418-commits.github.io/patna-hydra-crane-rental/`.
4. If you change the repository URL or configure a custom domain, update the absolute page URLs in `sitemap.xml` and its sitemap URL in `robots.txt`. Page canonical links resolve to the current page URL, including the repository subpath.

No dependency installation or build command is required. The contact form opens a prefilled WhatsApp message for the visitor to review and send. Phone links use `tel:` and WhatsApp links open in a new tab.

## Pages

- `index.html` — Home
- `hydra-crane-rental-patna.html` — Hydra Crane Rental in Patna
- `crane-hire-services-patna.html` — Crane Hire Services in Patna
- `industrial-lifting-services.html` — Industrial Lifting Services
- `construction-crane-services.html` — Construction Crane Services
- `crane-services-bihar.html` — Crane Services in Bihar
- `404.html` — GitHub Pages not-found page

## Image notes

The photo gallery and service imagery use the supplied Hydra crane photos, converted to optimized WebP files in `assets/`. The uploaded source files remain unchanged.
