# Daria Velychko — portfolio

Personal site for a junior frontend developer. React and Vite, in JavaScript.

## Run locally

```bash
npm install
npm run dev
```

Open the address Vite prints, usually http://localhost:5173.

Production check:

```bash
npm run build
npm run preview
```

## Deploy

The build output is the `dist` folder. Asset paths are relative, so the same build works at a domain root or a project subpath.

**Netlify or Vercel:** connect a new repository, set the build command to `npm run build`, and set the publish directory to `dist`.

**GitHub Pages:** push this project to a new repository. Do not overwrite an existing repository unless you mean to replace it. In the repository settings, use GitHub Actions to publish `dist`, or upload the contents of `dist` to the Pages branch.

This folder does not publish anything on its own.
# portfolionew
