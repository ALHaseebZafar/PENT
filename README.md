# PentAI - Responsive Landing Page

A pixel-perfect, responsive Next.js 14 landing page built with TypeScript and Tailwind CSS, based on Figma design specifications.

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- **Node.js** 18.x or higher ([Download](https://nodejs.org/))
- **npm**, **yarn**, **pnpm**, or **bun** package manager

### Installation

1. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

2. **Run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

3. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   └── components/
│       ├── Header.tsx       # Navigation header
│       └── Hero.tsx         # Hero section
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## 🎨 Design Features

- **Pixel-perfect implementation** of Figma design
- **Responsive design** with mobile, tablet, and desktop breakpoints
- **Modern UI** with gradient effects and smooth transitions
- **Optimized performance** with Next.js 14 App Router
- **Type-safe** with TypeScript
- **Utility-first CSS** with Tailwind CSS

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - UI library

## 🔧 Troubleshooting

### Common Issues and Solutions

#### Issue 1: Dependencies not installing

**Solution A - Clear cache and reinstall:**
```bash
# Delete node_modules and lock file
rm -rf node_modules
rm package-lock.json  # or yarn.lock / pnpm-lock.yaml

# Reinstall
npm install
```

**Solution B - Try different package manager:**
```bash
# Try with yarn
npm install -g yarn
yarn install

# Or try with pnpm
npm install -g pnpm
pnpm install
```

**Solution C - Check Node version:**
```bash
node --version  # Should be 18.x or higher

# If version is lower, update Node.js
# Download from https://nodejs.org/
```

#### Issue 2: Port 3000 already in use

**Solution A - Kill the process:**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

**Solution B - Use different port:**
```bash
npm run dev -- -p 3001
# Then visit http://localhost:3001
```

#### Issue 3: Styles not loading correctly

**Solution A - Rebuild Tailwind:**
```bash
# Delete .next folder
rm -rf .next

# Restart dev server
npm run dev
```

**Solution B - Check Tailwind configuration:**
- Verify `tailwind.config.ts` has correct content paths
- Check that `globals.css` imports Tailwind directives

**Solution C - Clear browser cache:**
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Or open browser dev tools and disable cache

#### Issue 4: TypeScript errors

**Solution A - Restart TypeScript server:**
- In VS Code: `Ctrl+Shift+P` → "TypeScript: Restart TS Server"

**Solution B - Verify tsconfig.json:**
```bash
# Check if TypeScript is installed
npm list typescript

# Reinstall if needed
npm install --save-dev typescript
```

#### Issue 5: Build fails

**Solution A - Clean build:**
```bash
rm -rf .next
npm run build
```

**Solution B - Check for syntax errors:**
```bash
npm run lint
```

**Solution C - Verify all dependencies:**
```bash
npm install --legacy-peer-deps
```

### Platform-Specific Setup

#### Windows Users

**Option 1 - Using Command Prompt:**
```cmd
npm install
npm run dev
```

**Option 2 - Using PowerShell:**
```powershell
npm install
npm run dev
```

**Option 3 - Using Git Bash:**
```bash
npm install
npm run dev
```

If you encounter permission errors:
```powershell
# Run PowerShell as Administrator and execute:
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

#### Mac/Linux Users

If you encounter permission errors:
```bash
# Use sudo only if necessary
sudo npm install -g npm@latest

# Or fix npm permissions (recommended)
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.profile
source ~/.profile
```

### Alternative Methods

#### Method 1: Using Docker (Advanced)

If you have Docker installed:

1. Create `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
```

2. Run:
```bash
docker build -t pentai .
docker run -p 3000:3000 pentai
```

#### Method 2: Using Dev Containers (VS Code)

1. Install "Dev Containers" extension in VS Code
2. Open project in container
3. Everything will be configured automatically

## 📝 Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm run start
```

## 🤝 Support

If you encounter any issues not covered in troubleshooting:

1. Check the [Next.js Documentation](https://nextjs.org/docs)
2. Check the [Tailwind CSS Documentation](https://tailwindcss.com/docs)
3. Review the project's GitHub Issues

## 📄 License

This project is private and proprietary.

