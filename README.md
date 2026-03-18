# Shadrick Chanda - Portfolio Website

A modern, responsive portfolio website built with React and TailwindCSS showcasing my skills, experience, and projects as a Software Engineering graduate.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Navigation**: Smooth scrolling navigation with mobile-friendly menu
- **Sections**: Hero, About, Skills, Experience, Contact, and Footer
- **Contact Form**: Interactive contact form with validation
- **Professional References**: Display of professional references

## Technologies Used

- **React 18**: Modern React with hooks
- **TailwindCSS**: Utility-first CSS framework
- **React Scripts**: Build tool and development server
- **GitHub Pages**: Deployment platform

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shadrickchanda/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

### Building for Production

1. Create a production build:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

## Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── 20251222_131159.jpg  # Profile image
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Experience.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Deployment

This portfolio is configured to deploy to GitHub Pages automatically. The deployment settings are:

- **Homepage**: `https://shadrickchanda.github.io/portfolio`
- **Build Command**: `npm run build`
- **Publish Directory**: `build`

To deploy manually:

1. Ensure you have a GitHub repository named `portfolio`
2. Run `npm run deploy`
3. Your site will be available at `https://yourusername.github.io/portfolio`

## Customization

### Updating Personal Information

Edit the following files to customize your portfolio:

- **Hero Section**: `src/components/Hero.js` - Update name, title, and description
- **About Section**: `src/components/About.js` - Update personal information
- **Skills**: `src/components/Skills.js` - Update technical and soft skills
- **Experience**: `src/components/Experience.js` - Update education and work experience
- **Contact**: `src/components/Contact.js` - Update contact information and references

### Updating Profile Image

1. Replace the image in `public/20251222_131159.jpg` with your profile photo
2. Update the image path in `src/components/Hero.js` if using a different filename

### Styling

The design uses TailwindCSS with custom primary colors defined in `tailwind.config.js`. You can customize the color scheme by modifying the theme configuration.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- **Email**: shadsrick@gmail.com
- **Phone**: +260 760 647 747 / +260 772 152 667
- **Location**: Ndola, Zambia

---

Built with ❤️ by Shadrick Chanda
