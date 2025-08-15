# Brickvests Financials Website

A professional, interactive website for Brickvests Financials - Real Estate Financial Modeling, Reimagined.

## 🏢 About

Brickvests Financials is a globally-focused real estate financial modeling company, providing high-quality Excel-based financial models tailored for real estate projects of all types and sizes.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Calculators**: ROI and IRR calculators for instant investment insights
- **Professional Sections**: Home, About, Services, Portfolio, Testimonials, Pricing, Contact
- **Contact Form**: Functional contact form with validation
- **Smooth Animations**: AOS (Animate On Scroll) library for smooth page transitions
- **Modern UI/UX**: Clean, professional design with excellent user experience
- **SEO Optimized**: Proper meta tags, semantic HTML, and fast loading

## 📁 Project Structure

```
brickvests-website/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js            # JavaScript functionality
├── assets/                # Images and media files
├── package.json           # Project configuration
├── PROJECT_PLAN.md        # Detailed project plan
└── README.md             # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (ES6+)**: Interactive functionality and form handling
- **Font Awesome**: Professional icons
- **Google Fonts**: Inter font family for modern typography
- **AOS Library**: Smooth scroll animations

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- Node.js (optional, for development server)

### Installation

1. Clone or download the project files
2. Open the project directory
3. Install dependencies (optional):
   ```bash
   npm install
   ```

### Running the Website

#### Option 1: Direct Browser Opening
Simply open `index.html` in your web browser.

#### Option 2: Development Server
```bash
npm start
# or
npm run dev
```

This will start a local server at `http://localhost:3000`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## 🎨 Color Scheme

- **Primary**: #2c5530 (Dark Green)
- **Secondary**: #f4a261 (Orange)
- **Accent**: #e76f51 (Red-Orange)
- **Text Dark**: #264653
- **Text Light**: #6c757d
- **Background**: #f8f9fa

## 📧 Contact Information

- **Email**: info@brickvests.com
- **Website**: www.brickvests.com
- **Location**: Lahore, Pakistan
- **Hours**: Mon-Sat, 9 AM - 7 PM (GMT+5)

## 🔧 Customization

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding styles in `css/styles.css`
3. Add any interactive functionality in `js/main.js`

### Modifying Colors
Update the CSS custom properties in `:root` selector in `styles.css`:

```css
:root {
    --primary-color: #2c5530;
    --secondary-color: #f4a261;
    /* ... other colors */
}
```

### Adding New Services
Update the services grid in the HTML and add corresponding styling.

## 📊 Interactive Features

### ROI Calculator
- Input: Initial Investment, Final Value, Additional Costs
- Output: ROI percentage and profit/loss analysis

### IRR Calculator
- Input: Initial Investment, Annual Cash Flow, Investment Period, Exit Value
- Output: Estimated IRR percentage

### Contact Form
- Full form validation
- Professional styling
- Loading states and user feedback

## 🚀 Deployment

This is a static website that can be deployed to any web hosting service:

### Recommended Hosting Options
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Free hosting for public repositories
- **Traditional Web Hosting**: Upload files via FTP

### Deployment Steps
1. Build the project (if using build tools)
2. Upload all files to your web server
3. Ensure `index.html` is in the root directory
4. Configure domain settings with your hosting provider

## 🔒 Security Considerations

- Form submissions should be handled by a backend service
- Implement proper data validation on the server side
- Use HTTPS for production deployment
- Consider adding CSRF protection for forms

## 📈 Performance Optimization

- Images are optimized for web
- CSS and JavaScript are minified for production
- External libraries are loaded from CDN
- Lazy loading implemented for images

## 🐛 Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## 📝 License

This project is licensed under the MIT License - see the package.json file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For technical support or questions about the website, contact:
- Email: info@brickvests.com
- Website: www.brickvests.com

---

**Brickvests Financials** - Real Estate Financial Modeling, Reimagined
© 2025 All Rights Reserved
