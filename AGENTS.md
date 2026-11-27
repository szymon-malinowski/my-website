## Portfolio implementation notes

- Mobile First.
- Implement Atomic Pattern in folder structure.
- Routes should always be in the `/src/routes` folder, just like Tanstack Router.
- Keep the portfolio website copy in English, even when source material is provided in another language.
- Preserve factual resume details from `notes/Szymon_Malinowski_FlowCV_Resume_2026-06-19.pdf`; do not invent employers, dates, or qualifications.
- The visual direction is a red(255,0,0) and white(255,255,255) Polish flag palette with a warm off-white canvas and restrained black typography.
- My oictuer should be on the top, along with links to my GitHub, and LinkedIn.
- Use the existing React + Vite setup. Keep sections responsive and accessible, with real links for contact and social profiles.
- Validate changes with `npm run build` and `npm run lint` before handoff.
