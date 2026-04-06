<div align="center">

# K.R. Mangalam University - Frontend

The official website for **K.R. Mangalam University (KRMU)**, built with Next.js 16, React 19, and Tailwind CSS. A modern, performant, and SEO-optimized university portal serving students, faculty, and visitors.

[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Strapi](https://img.shields.io/badge/Strapi_CMS-2F2E8B?style=for-the-badge&logo=strapi&logoColor=white)](https://strapi.io/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

</div>

---

<details>
<summary><strong>Table of Contents</strong></summary>

- [About the Project](#about-the-project)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Services & Integrations](#services--integrations)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Project](#running-the-project)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Contributing](#contributing)

</details>

---

## About the Project

This is the official frontend for **K.R. Mangalam University**, a comprehensive academic portal that serves as the digital face of the university. The website provides information about academic programs, admissions, placements, faculty, campus life, and much more.

Content is managed through **Strapi CMS** (headless), allowing the content team to update pages without touching code. The site is optimized for performance with **Incremental Static Regeneration (ISR)**, image optimization, and security headers.

## Key Features

- **Academic Programs** -- Detailed pages for B.Tech, BBA, BCA, B.Com, B.Arch, B.Des, B.FA, Allied Health Sciences, and more
- **Admissions Portal** -- Program-specific landing pages with lead capture forms (2026 intake)
- **Placements** -- Recruiter logos, placement statistics, and hiring highlights
- **Faculty Directory** -- Faculty profiles organized by schools and departments
- **News & Events** -- Dynamic news feed integrated with WordPress and Strapi
- **Photo Gallery** -- Campus images and event galleries
- **Student Achievements** -- Showcase of student accomplishments
- **Blogs** -- Blog portal with WordPress integration
- **Careers** -- Job postings with file upload support (Cloudflare R2)
- **CUET Counselling** -- Dedicated section for CUET exam counselling
- **Campus Life** -- Clubs, societies, and student life content
- **Research** -- Research initiatives, publications, and IPR resources
- **Virtual Campus Tours** -- Interactive tours via Univiser and 360° tours via TourMaker
- **Online Fee Payment** -- Integrated with Collexo payment gateway and iCloudEMS
- **AI Chatbot** -- NoPaperForms chatbot for visitor engagement
- **Digital Library** -- Links to Gale Group, ScienceDirect, patent databases
- **SEO Optimized** -- Structured data (Schema.org), Open Graph, Twitter Cards, dynamic meta tags
- **Responsive Design** -- Mobile-first approach with Tailwind CSS breakpoints
- **Accessibility** -- Built with Radix UI primitives for accessible components

## Tech Stack

<details>
<summary><strong>Frontend</strong></summary>

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | React framework with App Router, ISR, and Turbopack |
| [React 19](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first CSS framework |
| [shadcn/ui](https://ui.shadcn.com/) | Reusable component library (New York style) |
| [Radix UI](https://www.radix-ui.com/) | Accessible UI primitives (accordion, select, tabs, dialog, etc.) |
| [Lucide React](https://lucide.dev/) | Primary icon library |
| [React Icons](https://react-icons.github.io/react-icons/) | Secondary icon library |
| [Embla Carousel](https://www.embla-carousel.com/) | Lightweight carousel/slider component |
| [Class Variance Authority](https://cva.style/) | Component variant management |

</details>

<details>
<summary><strong>Content Management</strong></summary>

| Technology | Purpose |
|---|---|
| [Strapi](https://strapi.io/) | Headless CMS for all website content |
| [WordPress](https://wordpress.org/) | Secondary blog/news source |
| [@strapi/blocks-react-renderer](https://www.npmjs.com/package/@strapi/blocks-react-renderer) | Renders Strapi rich text blocks in React |

</details>

<details>
<summary><strong>Cloud & Storage</strong></summary>

| Technology | Purpose |
|---|---|
| [Cloudflare R2](https://www.cloudflare.com/products/r2/) | Object storage for documents and media files |
| [AWS S3 SDK](https://docs.aws.amazon.com/sdk-for-javascript/) | S3-compatible client for R2 access |

</details>

<details>
<summary><strong>Analytics & Marketing</strong></summary>

| Technology | Purpose |
|---|---|
| [Google Analytics](https://analytics.google.com/) | Website traffic analytics |
| [Google Tag Manager](https://tagmanager.google.com/) | Tag management and event tracking |
| [NoPaperForms](https://www.nopaperforms.com/) | Lead capture, form handling, and chatbot widget |

</details>

<details>
<summary><strong>Utilities</strong></summary>

| Technology | Purpose |
|---|---|
| [DOMPurify](https://github.com/cure53/DOMPurify) | HTML sanitization to prevent XSS |
| [Cheerio](https://cheerio.js.org/) | Server-side HTML parsing |
| [iframe-resizer](https://github.com/davidjbradshaw/iframe-resizer) | Responsive iframe content handling |

</details>

<details>
<summary><strong>Developer Tools</strong></summary>

| Technology | Purpose |
|---|---|
| [ESLint](https://eslint.org/) | Code linting |
| [Husky](https://typicode.github.io/husky/) | Git hooks for code quality |
| [PostCSS](https://postcss.org/) | CSS processing pipeline |

</details>

## Services & Integrations

This project integrates with **25+ external services** across multiple categories:

---

### Content Management

#### 1. Strapi CMS
- **What it does:** Primary headless CMS powering all dynamic content -- homepage, programs, admissions, faculty, news, events, and more.
- **How it works:** The frontend fetches data from Strapi's REST API at build time and runtime using ISR (revalidation every 3600 seconds). Content editors update pages via the Strapi admin panel without needing developer involvement.
- **Key files:** `lib/api/common.ts`, `app/constant.ts`

#### 2. WordPress
- **What it does:** Powers the blog section, news content, and career form submissions.
- **How it works:** Blog posts are fetched from the WordPress REST API at `wp.krmangalam.edu.in`. Career job applications are proxied through `/api/submit-job` to WordPress's `admin-ajax.php`. This allows the content team to use WordPress's familiar editor for long-form content.
- **Key files:** `app/(main-website)/(blogs)/`, `app/(main-website)/api/submit-job/route.ts`

#### 3. On-Demand ISR Revalidation
- **What it does:** Allows content editors to instantly refresh cached pages after making updates in Strapi, without waiting for the 1-hour revalidation cycle.
- **How it works:** A `/api/revalidate` endpoint accepts tag-based purge requests secured with a secret token. Strapi webhooks trigger this endpoint after content updates.
- **Key files:** `app/api/revalidate/route.ts`

---

### File Storage & CDN

#### 4. Cloudflare R2 (Object Storage)
- **What it does:** Stores and serves documents, images, uploaded files (resumes, disclosure documents), and mailer assets.
- **How it works:** Uses the AWS S3-compatible SDK to interact with R2 buckets. Two buckets are used -- `main-bucket` for general assets and `website-bucket` for mandatory disclosure documents. Files are served via public R2 URLs. Proxy routes (`/wp-content/[...path]` and `/mailer/[...path]`) serve R2 files seamlessly.
- **Key files:** `lib/constants/r2.ts`, `lib/constants/r2-disclosure.ts`, `app/(main-website)/api/list/route.ts`, `app/(main-website)/wp-content/[...path]/route.ts`, `app/(main-website)/mailer/[...path]/route.ts`

---

### Lead Management & Forms

#### 5. NoPaperForms (NPF) -- Lead Capture API
- **What it does:** Captures prospective student leads from admission landing pages.
- **How it works:** Form submissions from 20+ admission pages are sent to the NPF API via the `/api/send-to-npf` route. API authentication uses access key + secret key.
- **Key files:** `app/(main-website)/api/send-to-npf/route.ts`

#### 6. NoPaperForms -- Form Widgets
- **What it does:** Embeds interactive lead capture forms directly into admission and blog pages.
- **How it works:** NPF widget scripts (`emwgts.js`) are loaded dynamically on pages that need inline form embeds. A popup widget (`npfwpopup.js`) is also available for modal-style forms.
- **Key files:** `lib/constants/NoPaperFormProvider.tsx`, `lib/constants/loadNpfScript.ts`, `app/(main-website)/(blogs)/blog/(listings)/comp/NoPaperFormsWidget.tsx`

#### 7. NoPaperForms -- AI Chatbot
- **What it does:** Provides an AI-powered chatbot widget for visitor engagement and lead qualification.
- **How it works:** The chatbot script is loaded globally in the layout, appearing as a floating widget on all pages.
- **Key files:** `app/NpfChatbot.tsx`

#### 8. NoPaperForms -- Visitor Tracking
- **What it does:** Tracks visitor behavior on admission landing pages for lead scoring and remarketing.
- **How it works:** The NPF tracking script (`track.js`) is loaded on landing pages to monitor visitor interactions.
- **Key files:** `app/(landing-page)/admission/CommonComponent2026/NoPaperFormsWidget.tsx`

---

### Payments & Student Management

#### 9. Collexo (Payment Gateway)
- **What it does:** Handles online fee payments for the university.
- **How it works:** Students are redirected to the Collexo payment portal for fee transactions.
- **Key files:** `app/(main-website)/(admission)/payment-procedure/comp/OnlineFee.tsx`

#### 10. iCloudEMS (Student Management System)
- **What it does:** Manages student records, enrollment, and serves as an alternative payment portal.
- **How it works:** Links direct students to the iCloudEMS platform for student management operations.
- **Key files:** `app/(main-website)/(admission)/payment-procedure/comp/OnlineFee.tsx`, `app/(main-website)/(admission)/payment-procedure/comp/PaymentProcedureFAQ.tsx`

#### 11. KRMU Admissions Portal
- **What it does:** Dedicated admissions management system at `admissions.krmangalam.edu.in`.
- **How it works:** Admission landing pages link students to this portal for completing their enrollment process.
- **Key files:** Multiple landing page files under `app/(landing-page)/admission/`

---

### Analytics & Tracking

#### 12. Google Analytics 4 (GA4)
- **What it does:** Tracks website traffic, user behavior, and conversion metrics.
- **How it works:** GA4 measurement script is loaded in the root layout.
- **Key files:** `app/(main-website)/layout.tsx`

#### 13. Google Tag Manager (GTM)
- **What it does:** Manages all tracking pixels, event tags, and marketing scripts without code changes.
- **How it works:** GTM container is loaded in the root layout. The marketing team manages tags via the GTM dashboard.
- **Key files:** `app/(main-website)/layout.tsx`

#### 14. Google Search Console
- **What it does:** Verifies site ownership for Google search indexing and SEO monitoring.
- **How it works:** A verification meta tag is included in the root layout.
- **Key files:** `app/(main-website)/layout.tsx`

---

### Virtual Tours & Campus Exploration

#### 15. Univiser (Interactive Campus Tour)
- **What it does:** Provides an interactive, guided campus tour experience.
- **How it works:** Embedded via iframe from `krm.univiser.io`, allowing visitors to explore the campus interactively.
- **Key files:** `app/(main-website)/univiser/UniviserIframe.tsx`

#### 16. TourMaker (360° Virtual Tour)
- **What it does:** Offers immersive 360-degree virtual tours of the campus facilities.
- **How it works:** Embedded via iframe from `tourmkr.com`, providing panoramic views of campus locations.
- **Key files:** `app/(main-website)/(admission)/campus-life/virtual-tour/comp/VirtualTour.tsx`, `app/(main-website)/(admission)/campus-tour/comp/ExploreCampus.tsx`

---

### Social Media & Video

#### 17. YouTube
- **What it does:** Hosts and serves video content across 20+ pages (campus life, events, research, testimonials).
- **How it works:** YouTube videos are embedded via iframes throughout the site. The university's YouTube channel is linked for additional content.
- **Key files:** Used across blog, life-at-krmu, research, and homepage components

#### 18. Facebook
- **What it does:** Social media presence and content sharing.
- **How it works:** Facebook page links and share buttons are integrated into blog posts and the homepage.
- **Key files:** `app/HomePage.tsx`, blog single-post components

#### 19. Instagram
- **What it does:** Social media presence showcasing campus life.
- **How it works:** Instagram profile links are embedded in the homepage and campus life sections.
- **Key files:** `app/HomePage.tsx`, `app/(main-website)/(life-at-krmu)/overview/comp/OverviewInnovate.tsx`

#### 20. LinkedIn
- **What it does:** Professional networking and recruitment links.
- **How it works:** LinkedIn profile links are referenced across faculty and placement pages.

---

### Maps & Location

#### 21. Google Maps
- **What it does:** Displays university campus location and regional office locations.
- **How it works:** Google Maps is embedded via iframe on the contact page for easy navigation.
- **Key files:** `app/(main-website)/(contact-us)/contact-us/comp/ContactUsRegionalOffice.tsx`

---

### Fonts & Design

#### 22. Google Fonts
- **What it does:** Provides custom typography across the website.
- **How it works:** Fonts are loaded via Next.js `next/font` for optimized delivery. Four font families are used:
  - **Montserrat** -- Primary body font
  - **Raleway** -- Secondary heading font
  - **Instrument Serif** -- Decorative serif font
  - **Inter** -- UI font
- **Key files:** Layout files across the app

---

### Academic Resources (External Links)

#### 23. Digital Library & Research Databases
The website links to several external academic resources:
- **Gale Group (InfoTrac)** -- Digital library access for journals
- **Google Patents** -- Patent search and research
- **Free Patents Online** -- Patent database
- **espacenet** -- Worldwide patent search
- **ScienceDirect** -- Research articles and publications
- **Key files:** `app/(main-website)/(life-at-krmu)/library/`, `app/(main-website)/(research)/`

---

### Utilities

#### 24. TinyURL
- **What it does:** Provides shortened URLs for placement and career inquiry links.
- **Key files:** `app/(main-website)/(placements)/career-development-centre/`, `app/(main-website)/(placements)/placement/`

#### 25. Google Docs
- **What it does:** External document links for forms and resources.
- **How it works:** Various pages link to Google Docs for downloadable forms and documents.

## Project Structure

```
krmu-frontend/
├── app/
│   ├── (main-website)/           # Main website (grouped route)
│   │   ├── layout.tsx            # Root layout (Header, Footer, GTM, GA)
│   │   ├── page.tsx              # Homepage with dynamic SEO
│   │   ├── globals.css           # Global styles
│   │   ├── components/           # Shared components (Header, Footer, etc.)
│   │   ├── Home/                 # Homepage sections (Hero, Testimonials, etc.)
│   │   ├── api/                  # API routes (NPF, R2 file listing, jobs)
│   │   ├── (academics)/          # Academic pages
│   │   ├── (admission)/          # Admission pages
│   │   ├── (blogs)/              # Blog pages
│   │   ├── (careers)/            # Careers section
│   │   ├── (faculty)/            # Faculty directory
│   │   ├── (placements)/         # Placement statistics
│   │   ├── (programmes)/         # Program listings
│   │   ├── (schools)/            # School pages
│   │   ├── (student-achievements)/ # Achievements
│   │   ├── (life-at-krmu)/       # Campus life
│   │   ├── (research)/           # Research section
│   │   ├── (contact-us)/         # Contact pages
│   │   └── cuet-counselling/     # CUET counselling
│   ├── (landing-page)/           # Admission landing pages (2026 intake)
│   │   └── admission/
│   │       ├── btech-2026/
│   │       ├── bba-2026/
│   │       ├── bca-2026/
│   │       └── ...
│   ├── (new-pages)/              # New experimental pages
│   ├── api/
│   │   └── revalidate/           # ISR on-demand revalidation
│   ├── HomePage.tsx              # Main homepage component
│   └── constant.ts              # API URL constants
│
├── lib/
│   ├── api/                      # Strapi API fetching functions (50+ modules)
│   │   ├── home.ts               # Homepage data
│   │   ├── admission.ts          # Admission data
│   │   ├── faculty.ts            # Faculty data
│   │   ├── placement.ts          # Placement data
│   │   ├── programme.ts          # Programme data
│   │   ├── news-events.ts        # News & events
│   │   ├── blogs/                # Blog APIs
│   │   ├── careers/              # Career APIs
│   │   └── ...
│   ├── types/                    # TypeScript interfaces (30+ type files)
│   ├── constants/                # App-wide constants
│   ├── utils.ts                  # Utility functions (cn helper)
│   └── sanitize.ts               # HTML sanitization
│
├── components/
│   └── ui/                       # shadcn/ui components
│       ├── accordion.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       ├── dialog.tsx
│       ├── input.tsx
│       ├── select.tsx
│       ├── tabs.tsx
│       └── skeleton.tsx
│
├── public/                       # Static assets (images, verification files)
├── next.config.ts                # Next.js config (security headers, image domains)
├── tsconfig.json                 # TypeScript config (strict mode)
├── postcss.config.mjs            # PostCSS config
├── components.json               # shadcn/ui config
├── eslint.config.mjs             # ESLint config
└── package.json                  # Dependencies & scripts
```

## Getting Started

### Prerequisites

- **Node.js** 18.18+ (required by Next.js 16)
- **npm** (comes with Node.js)
- Access to the **Strapi CMS** instance (for content)
- **Cloudflare R2** credentials (for file storage)
- **NoPaperForms** API keys (for lead capture)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/krmu-techteam/krmu-frontend.git
   cd krmu-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the project root (see [Environment Variables](#environment-variables) below).

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

#### Strapi CMS

| Variable | Description | Required |
|---|---|---|
| `NEXT_PUBLIC_FETCH_STRAPI_URL` | Production Strapi API URL | Yes |
| `NEXT_PUBLIC_STRAPI_URL` | Alternative Strapi URL | Yes |
| `NEXT_PUBLIC_STRAPI_API_URL` | Strapi media endpoint | Yes |
| `STRAPI_API_URL` | Server-side Strapi URL | Yes |

#### Cloudflare R2 Storage

| Variable | Description | Required |
|---|---|---|
| `NEXT_PUBLIC_CF_ACCOUNT_ID` | Cloudflare account ID | Yes |
| `NEXT_PUBLIC_R2_PUBLIC_URL` | Public R2 bucket URL | Yes |
| `NEXT_PUBLIC_R2_PUBLIC_URL_DISCLOSURE` | Disclosure documents bucket URL | Yes |
| `R2_ACCESS_KEY` | R2 access key | Yes |
| `R2_SECRET_KEY` | R2 secret key | Yes |
| `R2_BUCKET` | R2 bucket name | Yes |
| `R2_DISCLOSURE_ACCESS_KEY` | Disclosure bucket access key | Yes |
| `R2_DISCLOSURE_API_ENDPOINT` | Disclosure bucket API endpoint | Yes |
| `R2_DISCLOSURE_BUCKET` | Disclosure bucket name | Yes |

#### NoPaperForms (Lead Management)

| Variable | Description | Required |
|---|---|---|
| `NPF_ACCESS_KEY` | NoPaperForms API access key | Yes |
| `NPF_SECRET_KEY` | NoPaperForms API secret key | Yes |

#### General

| Variable | Description | Required |
|---|---|---|
| `NEXT_PUBLIC_FILE_BASE` | Base URL for serving files | Yes |
| `NEXT_PUBLIC_KRMU_WORD_URL` | WordPress site URL | Yes |
| `NEXT_PUBLIC_MAIN_URL` | Main website URL | Yes |
| `NEXT_PUBLIC_WORD_BLOG_URL` | WordPress blog URL | Yes |
| `REVALIDATION_SECRET` | Secret token for ISR revalidation API | Yes |

### Running the Project

```bash
# Development (with Turbopack for fast refresh)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint the codebase
npm run lint
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Create optimized production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint checks |

## Deployment

The project is configured for deployment on **Vercel** (recommended for Next.js):

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com/)
3. Configure all environment variables in the Vercel dashboard
4. Deploy

**Security headers** are pre-configured in `next.config.ts`:
- `X-Frame-Options` -- Clickjacking protection
- `Content-Security-Policy` -- Resource loading restrictions
- `X-Content-Type-Options` -- MIME type sniffing protection
- `Referrer-Policy` -- Referrer information control
- `Permissions-Policy` -- Browser feature restrictions

**Image optimization** is configured for remote images from Strapi, Cloudflare R2, WordPress, and the main KRMU domain.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/your-feature`)
3. Commit your changes (`git commit -m 'feat: add some feature'`)
4. Push to the branch (`git push origin feat/your-feature`)
5. Open a Pull Request

**Branch naming convention:**
- `feat/` -- New features
- `fix/` -- Bug fixes
- `vishal/` or `<name>/` -- Developer-specific branches

---

<div align="center">

**K.R. Mangalam University** -- Built with Next.js by the KRMU Tech Team

</div>
