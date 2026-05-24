# Deployment Guide

## 🚀 Deploying to Vercel

### Method 1: Quick Deploy (Recommended for First Time)

1. **Go to Vercel:**
   ```
   https://vercel.com/new
   ```

2. **Import Repository:**
   - Click "Import Git Repository"
   - Paste: `https://github.com/gdpreserve-lab/2026-profit-roadmap`
   - Click "Continue"

3. **Configure:**
   - Framework: React (auto-detected)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `build` (auto-filled)

4. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes

5. **Success:**
   - Your app is live at: `https://2026-profit-roadmap.vercel.app`

---

### Method 2: Automatic CI/CD with GitHub Actions

#### Step 1: Get Vercel Tokens
1. Go to: https://vercel.com/account/tokens
2. Create a new token → Copy it

#### Step 2: Get Project IDs
1. Go to: https://vercel.com/dashboard
2. Select your project
3. Go to **Settings** → **General**
4. Copy `ORG ID` and `PROJECT ID`

#### Step 3: Add GitHub Secrets
1. Go to your GitHub repo
2. **Settings** → **Secrets and variables** → **Actions**
3. Add three secrets:
   - `VERCEL_TOKEN` = (your token from Step 1)
   - `VERCEL_ORG_ID` = (your org ID from Step 2)
   - `VERCEL_PROJECT_ID` = (your project ID from Step 2)

#### Step 4: Done! 🎉
- Push to `main` → Auto-deploys to production
- Create PR → Preview deployment created

---

### Method 3: Manual Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## 🔍 Monitor Deployments

- **Vercel Dashboard:** https://vercel.com/dashboard
- **GitHub Actions:** Your repo → **Actions** tab
- **View Logs:** Click on any deployment to see build logs

---

## ✅ Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Verify `npm run build` works locally: `npm run build`
- Check `vercel.json` configuration

### Dependencies Issues
- Run `npm install` locally
- Check `package.json` for conflicts
- Look for `sourcemap-codec` issues (see main README)

### Environment Variables
- Add in Vercel dashboard → **Settings** → **Environment Variables**
- Or set in `.env.local` for local development

---

## 📚 More Resources

- [Vercel Git Integration](https://vercel.com/docs/git/vercel-for-git)
- [Vercel CLI](https://vercel.com/docs/cli)
- [GitHub Actions](https://github.com/features/actions)

---

**Questions?** Check the main README.md or visit https://vercel.com/docs
