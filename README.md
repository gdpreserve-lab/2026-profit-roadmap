# 2026 Profit Roadmap 📊

A React-based profit roadmap dashboard with charts and data visualization.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm start
```
Runs at http://localhost:3000

### Build
```bash
npm run build
```
Creates optimized production build in `build/` directory

---

## 🌐 Deployment

### **Automatic Deployment to Vercel**

#### Option 1: Via GitHub (Recommended)
1. Go to https://vercel.com/new
2. Click **"Import Git Repository"**
3. Select: `gdpreserve-lab/2026-profit-roadmap`
4. Click **"Deploy"**
5. Your app is live! 🎉

**Auto-redeploy:** Every push to `main` automatically deploys to production

#### Option 2: Via GitHub Actions (Advanced)
1. Add Vercel secrets to GitHub:
   - Go to your repo → **Settings** → **Secrets and variables** → **Actions**
   - Add these secrets:
     - `VERCEL_TOKEN` - [Get from Vercel](https://vercel.com/account/tokens)
     - `VERCEL_ORG_ID` - [Find in Vercel dashboard](https://vercel.com/account/settings)
     - `VERCEL_PROJECT_ID` - [Find in project settings](https://vercel.com/dashboard)

2. The workflow in `.github/workflows/deploy.yml` will:
   - Deploy on every push to `main` (production)
   - Create preview deployments for pull requests

---

## 📦 Dependencies

- **React** 18.3.1 - UI framework
- **Chart.js** 4.4.3 - Chart visualization
- **react-chartjs-2** 5.2.0 - React wrapper for Chart.js
- **lucide-react** 0.378.0 - Icon library

---

## 📁 Project Structure

```
├── public/              # Static files
├── src/
│   ├── App.js          # Main component
│   ├── index.js        # Entry point
│   └── ...
├── package.json        # Dependencies
├── vercel.json         # Vercel config
└── .github/
    └── workflows/
        └── deploy.yml  # Auto-deployment workflow
```

---

## 🔧 Environment Variables

Create a `.env` file in the root directory (if needed):
```bash
REACT_APP_API_URL=https://api.example.com
```

---

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Create production build |
| `npm test` | Run tests |
| `npm run eject` | Eject from create-react-app (irreversible) |

---

## 🌍 Live Deployment

**Production URL:** https://2026-profit-roadmap.vercel.app

---

## 📖 Resources

- [Vercel Docs](https://vercel.com/docs)
- [React Docs](https://react.dev)
- [Chart.js Docs](https://www.chartjs.org/)

---

## 📄 License

MIT

---

**Built with ❤️ by gdpreserve-lab**
