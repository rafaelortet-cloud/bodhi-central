---
description: Troubleshoot Vercel 404 issues on sub-pages
---

This workflow helps you diagnose and fix issues where the root URL works, but sub-pages return 404 errors on Vercel.

1. **Check Vercel Build Logs**
   - Go to your Vercel Dashboard.
   - Select your project.
   - Click on the **Deployments** tab.
   - Select the most recent deployment (the one confusing you).
   - Click **Building...** (or "Ready" / "Error") to see the details.
   - Expand the **Build** section.
   - Scroll to the end of the log.
   - **Look for:** A "Route (app)" summary table.
     - *Success:* You see `/scripture`, `/about`, etc. listed as routes.
     - *Failure:* You only see `/` or errors.
   - If the routes are missing in the log, Vercel didn't build them. Check your `next.config.ts` or `package.json` for build script errors.

2. **Verify Deployment URL**
   - Vercel gives you a "Production Domain" (e.g., `bodhi-central.vercel.app`) and "Deployment URLs" (e.g., `bodhi-central-git-main-abc.vercel.app`).
   - Sometimes the main domain points to an old, cached version.
   - **Action:** Open the specific **Deployment URL** for your latest commit.
   - Does `/scripture` work there?
     - *Yes:* The main domain is just caching. It will update soon, or you can redeploy.
     - *No:* The build itself is broken.

3. **Redeploy Without Cache**
   - Often, a bad cache causes weird routing issues.
   - In your local terminal, trigger a redeploy (or do it via Vercel UI "Redeploy" button -> uncheck "Use Build Cache").
   
   // turbo
   ```bash
   # Optional: Trigger a strictly empty commit to force a rebuild if UI isn't an option
   git commit --allow-empty -m "Trigger Vercel rebuild"
   git push
   ```

4. **Verify Local Build**
   - Ensure it works locally first.
   
   // turbo
   ```bash
   npm run build
   # Check the output table for your routes
   ```

5. **Downgrade Next.js (If using Canary/Beta)**
   - If you are on a very new version (like `16.x`) and Vercel isn't supporting it fully yet.
   - **Action:** Downgrade to the latest stable `15.x`.
   
   ```bash
   npm install next@latest react@latest react-dom@latest
   # Or specifically
   npm install next@15.1.0 react@19.0.0 react-dom@19.0.0
   ```
