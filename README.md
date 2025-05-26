# KinetiKare Physiotherapy Website

A modern, professional Next.js website for Kareem Hassanein's physiotherapy practice, featuring premium glass design elements, interactive components, and optimized user experience.

## 🌐 Live Website
- **Production**: https://www.kareemphysio.com
- **Repository**: `kinetikare-physio-landing-page` on GitHub
- **Deployment**: Vercel with automatic deployments from main branch

## 🏗️ Project Structure

### Core Framework
- **Framework**: Next.js 14.2.29 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Heroicons for consistent iconography
- **Build Tool**: Next.js build system with sitemap generation

### 📁 Key Directories

```
physiotherapy-next/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Homepage (main entry point)
│   ├── about/                    # About page
│   ├── blog/                     # Blog pages with dynamic routing
│   │   └── [slug]/               # Dynamic blog post pages
│   ├── faq/                      # FAQ page with scroll positioning
│   ├── services/                 # Services page
│   └── success-stories/          # Success stories page
├── components/                   # Reusable React components
│   ├── sections/                 # Main page sections
│   ├── layout/                   # Layout components (Header, Footer)
│   ├── ui/                       # UI components (buttons, cards, etc.)
│   └── icons/                    # Custom icon components
├── public/                       # Static assets
│   ├── images/                   # All website images
│   └── favicon/                  # Favicon files
├── styles/                       # Global styles
├── lib/                          # Utility functions
├── context/                      # React context providers
├── hooks/                        # Custom React hooks
└── tests/                        # Test files
```

## 🎨 Design System

### Color Palette
- **Primary**: Professional Dark Blue (`#2C3E50`)
- **Accent**: Rich Gold (`#D4AF37`, `#B08D57`)
- **Neutral**: Warm Sand (`#E6DED1`)
- **Text**: Dark charcoal for optimal readability
- **Glass Effects**: White with various opacity levels

### Typography
- **Primary Font**: Inter (system font)
- **Accent Font**: Playfair Display (serif)
- **Utility Font**: Montserrat

### Key Design Elements
- **Glass Morphism**: Premium glass containers with backdrop blur
- **Gradient Accents**: Gold gradient elements throughout
- **Smooth Animations**: Framer Motion powered transitions
- **Responsive Design**: Mobile-first approach

## 🧩 Key Components

### Main Sections (components/sections/)

#### 1. HeroSection.tsx
- **Purpose**: Homepage hero with main messaging and testimonials
- **Features**:
  - Dynamic background image with parallax effects
  - Google Reviews-style testimonials carousel (8-second intervals)
  - Premium glass testimonials container
  - Two main CTAs: "Book an Appointment" and "Explore Services"
- **Key Elements**:
  - Testimonials: 4 patient reviews with avatars and ratings
  - Background: Clinic image with sophisticated overlays
  - Typography: Dramatic reveals with staggered animations

#### 2. AboutSection.tsx
- **Purpose**: "Meet Your Physiotherapist" content
- **Features**: Professional introduction and credentials

#### 3. CareJourneySection.tsx
- **Purpose**: Interactive care journey showcase
- **Features**:
  - Large premium glass container (centered, no left sidebar)
  - 4 journey steps: Assessments, Manual Therapy, Exercise Plans, Recovery Roadmap
  - "Evidence-Based Excellence" theme
  - Auto-rotating carousel (4-second intervals)
  - Clickable progress dots
- **Recent Changes**: Removed left sidebar, made container larger and more premium

#### 4. ServicesSection.tsx
- **Purpose**: Physiotherapy services overview
- **Features**: Service cards with descriptions and imagery

#### 5. ContactSection.tsx
- **Purpose**: Contact information and forms
- **Features**: Contact details and appointment booking

### Layout Components (components/layout/)

#### Header.tsx
- **Features**: 
  - Navigation menu with active states
  - Phone number and "Book Appointment" CTA
  - Responsive mobile menu
  - KinetiKare branding

#### Footer.tsx
- **Features**: 
  - Contact information
  - Social links
  - Copyright and legal information

### UI Components (components/ui/)
- Reusable buttons, cards, modals, and form elements
- Consistent styling with design system
- Accessibility features built-in

## 📄 Important Pages

### Homepage (app/page.tsx)
**Current Structure**:
```tsx
<HeroSection />           // Main hero with testimonials
<AboutSection />          // Meet Your Physiotherapist  
<CareJourneySection />    // Interactive journey steps
<ServicesSection />       // Services overview
<ContactSection />        // Contact information
```

### FAQ Page (app/faq/page.tsx)
- **Special Features**: 
  - Smooth scroll positioning when clicking questions
  - URL hash navigation with proper offsets
  - Accordion-style Q&A interface
- **Recent Fixes**: Resolved scrolling issues with proper positioning logic

### Blog System (app/blog/)
- Dynamic routing for blog posts
- Static generation for SEO
- Markdown content support

## 🎯 Key Features

### 1. Premium Testimonials System
- **Location**: HeroSection.tsx
- **Style**: Google Reviews aesthetic without trademark issues
- **Features**:
  - 4 real patient testimonials
  - Auto-rotation every 8 seconds
  - Premium glass container with background visibility
  - User avatars with initials
  - 5-star ratings display
  - Smooth transitions and animations

### 2. Interactive Care Journey
- **Location**: CareJourneySection.tsx
- **Features**:
  - Large centered glass container
  - 4 journey steps with icons and descriptions
  - Auto-rotation with manual navigation
  - Premium animations and effects
  - "Evidence-Based Excellence" branding

### 3. Responsive Design
- Mobile-first approach
- Breakpoints: xs(370px), sm(640px), md(768px), lg(1024px), xl(1280px), 2xl(1440px)
- Optimized for all device sizes

### 4. Performance Optimizations
- Next.js static generation
- Image optimization
- Code splitting
- Efficient animations
- Sitemap generation

## 🔧 Configuration Files

### tailwind.config.js
- **Purpose**: Tailwind CSS configuration
- **Key Features**:
  - Custom color palette
  - Extended spacing and typography
  - Animation utilities
  - Glass morphism utilities
  - Performance optimizations

### next.config.js
- Next.js configuration
- Image optimization settings
- Build optimizations

### package.json
- Dependencies and scripts
- Build and development commands

## 🚀 Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Generate sitemap (runs automatically after build)
npm run postbuild
```

## 📱 Responsive Breakpoints

```css
xs: 370px   /* Small phones */
sm: 640px   /* Large phones */
md: 768px   /* Tablets */
lg: 1024px  /* Small laptops */
xl: 1280px  /* Laptops */
2xl: 1440px /* Large screens */
```

## 🎨 Animation System

### Framer Motion Usage
- **Hero Section**: Staggered text reveals, background parallax
- **Care Journey**: Smooth carousel transitions, scale animations
- **Testimonials**: Fade transitions, scale effects
- **General**: Scroll-triggered animations with `whileInView`

### Animation Timing
- **Testimonials**: 8 seconds per slide
- **Care Journey**: 4 seconds per slide
- **Page Transitions**: 0.6-0.8 seconds
- **Hover Effects**: 0.2-0.3 seconds

## 📊 SEO & Performance

### SEO Features
- Automatic sitemap generation
- Meta tags and Open Graph
- Structured data
- Semantic HTML
- Optimized images

### Performance Features
- Static site generation
- Image optimization
- Code splitting
- Efficient CSS
- Minimal JavaScript bundles

## 🔗 External Integrations

### Booking System
- **URL**: https://endorphinshealth.janeapp.com/#/staff_member/42
- **Integration**: Direct link from CTA buttons
- **Purpose**: Online appointment booking

### Domain & Hosting
- **Domain**: kareemphysio.com
- **Hosting**: Vercel
- **SSL**: Automatic HTTPS
- **CDN**: Global edge network

## 🛠️ Recent Major Changes

### Hero Section Testimonials (Latest)
- Removed time stamps and footer elements
- Enhanced premium glass design
- Improved background visibility
- Extended display time to 8 seconds
- Added quote decorations and enhanced styling

### Care Journey Section (Latest)
- Removed left sidebar with journey steps
- Made glass container larger (max-w-2xl)
- Replaced duplicate title with "Evidence-Based Excellence"
- Enhanced premium styling and animations
- Improved spacing and typography

### FAQ Page Fixes
- Fixed scroll positioning issues
- Added proper URL hash navigation
- Improved user experience with smooth scrolling

## 📝 Content Management

### Images Location
- **Main Images**: `/public/images/`
- **Blog Images**: `/public/images/blog/`
- **Service Images**: `/public/images/services/`
- **Avatars**: `/public/images/avatars/`

### Content Updates
- **Testimonials**: Edit in `HeroSection.tsx` testimonials array
- **Journey Steps**: Edit in `CareJourneySection.tsx` careJourneyItems array
- **Services**: Update in `ServicesSection.tsx`
- **FAQ**: Update in `app/faq/page.tsx`

## 🎯 Brand Identity

### KinetiKare Brand
- **Tagline**: "The Science of Recovery, The Art of Care"
- **Sub-taglines**: 
  - "Genuine Understanding. Expert Care. Lasting Recovery."
  - "Evidence-Based Excellence"
- **Practitioner**: Kareem Hassanein, Physiotherapist
- **Location**: Professional clinic setting

### Visual Identity
- Premium, sophisticated design
- Medical professionalism with warmth
- Gold accents for luxury feel
- Glass morphism for modern touch
- Clean, accessible typography

---

## 💡 Development Notes

This website represents a sophisticated, professional physiotherapy practice with premium design elements, smooth user experience, and optimized performance. The codebase is well-structured, maintainable, and ready for future enhancements.

For any questions or modifications, refer to the specific component files mentioned above or the configuration files for system-level changes.
