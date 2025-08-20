# Hossein Chegini - AI & ML Engineer Portfolio

> "If you have good ideas worth processing, I can lift them up."

A modern, responsive portfolio website showcasing my expertise in Artificial Intelligence, Machine Learning, and Data Engineering. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Optimized for all devices and screen sizes
- **SEO Optimized**: Built-in SEO with meta tags, sitemap, and robots.txt
- **Performance**: Fast loading with Next.js optimization
- **Accessibility**: WCAG compliant design
- **Interactive**: Smooth scrolling and hover effects

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/hossein-chegini-portfolio.git
cd hossein-chegini-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Option 1: Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "New Project" and import your repository
4. Vercel will automatically detect Next.js and deploy
5. Your site will be live at `https://your-project-name.vercel.app`

### Option 2: Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign up/login
3. Click "New site from Git" and connect your repository
4. Set build command: `npm run build`
5. Set publish directory: `.next`
6. Deploy!

### Option 3: Deploy to any hosting provider

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=https://hosseinchegini.com
```

### Customization

- Update personal information in component files
- Modify colors in `tailwind.config.js`
- Update SEO metadata in `app/layout.tsx`
- Change domain in `app/sitemap.ts` and `app/robots.ts`

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # SEO sitemap
│   └── robots.ts           # SEO robots.txt
├── components/
│   ├── HeroSection.tsx     # Hero section with main message
│   ├── Navigation.tsx      # Navigation component
│   ├── SkillsSection.tsx   # Skills showcase
│   ├── ExperienceSection.tsx # Work experience
│   ├── ProjectsSection.tsx # Project portfolio
│   └── ContactSection.tsx  # Contact form
├── public/                 # Static assets
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`. You can customize:
- Primary colors (blue/purple gradient)
- Dark theme colors
- Background gradients

### Content
Update the following files with your information:
- `components/HeroSection.tsx` - Main hero text and personal info
- `components/SkillsSection.tsx` - Your skills
- `components/ExperienceSection.tsx` - Work experience
- `components/ProjectsSection.tsx` - Your projects
- `components/ContactSection.tsx` - Contact information

## 📈 SEO Features

- ✅ Meta tags for social sharing
- ✅ Open Graph tags for Facebook/LinkedIn
- ✅ Twitter Card tags
- ✅ Structured data markup
- ✅ Sitemap.xml generation
- ✅ Robots.txt configuration
- ✅ Canonical URLs
- ✅ Semantic HTML structure

## 🔍 Performance

- ✅ Next.js Image optimization
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Optimized fonts
- ✅ Minified CSS/JS
- ✅ Compression enabled

## 📱 Mobile Optimization

- ✅ Responsive design
- ✅ Touch-friendly interactions
- ✅ Optimized for mobile performance
- ✅ Mobile-first approach

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: hossein.computer@gmail.com
- **LinkedIn**: [Hossein Chegini](https://www.linkedin.com/in/hossein-chegini/)
- **GitHub**: [hosseincomputer](https://github.com/hosseincomputer)
- **Google Scholar**: [Hossein Chegini](https://scholar.google.com/citations?user=8daZaoUAAAAJ&hl=en)

---

Built with ❤️ by Hossein Chegini
