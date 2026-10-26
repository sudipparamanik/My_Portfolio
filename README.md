# Existing Portfolio Redesign — Sudip Paramanik

This package contains replacement files designed to fit your existing Vite + React + TypeScript + Tailwind portfolio.

## Files included
- `src/App.tsx` — redesigned page, keeping your project data, profile photo modal, certificate preview modal, navigation, experience, and contact sections.
- `src/index.css` — new premium dark/purple/blue/orange visual theme and responsive CSS-built 3D workstation.
- `src/data/portfolio.ts` — a copy of the portfolio data structure you supplied.

## Apply it to your existing project
1. Make a backup copy of your current project folder first.
2. Unzip this package.
3. Copy `src/App.tsx` into your existing project's `src/App.tsx`.
4. Copy `src/index.css` into the file your `src/main.tsx` imports for global styles. If your current global stylesheet is named `src/index.css`, replace that file. If it is named `src/styles.css`, either rename the supplied file or paste its content into `src/styles.css`.
5. Copy `src/data/portfolio.ts` only if you want to replace the current data file with the supplied version. Your current portfolio data can remain if it has the same fields.
6. Ensure your `src/main.tsx` imports the global stylesheet and renders `App`.
7. In your project terminal run:
   ```bash
   npm install
   npm run dev
   ```

## Notes
- This redesign uses CSS to create a 3D-style workstation; it does not add a Three.js dependency.
- Keep your actual profile image at `/public/images/profile.png`.
- Keep certificate thumbnails and PDFs at the exact paths in `portfolio.ts`.
- `resume: "#"` intentionally routes the Resume button to Contact until you add a real resume file.
- Review all repository URLs and project descriptions before publishing. In particular, CloudDeploy's description lists several advanced capabilities; only present them as completed if you have implemented and tested them.
