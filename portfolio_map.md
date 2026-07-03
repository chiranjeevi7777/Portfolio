# Portfolio Structure Map — `portfolio.html`
> **File:** `d:\Github\Portfoliio\portfolio.html` · **2532 lines · 81 KB** · Single-file HTML/CSS/JS

---

## ⚡ Quick-Reference: Most Common Changes

| What to Change | Where | Line(s) |
|---|---|---|
| Page title / SEO description | `<head>` meta tags | 7–8 |
| Canonical / OG / Twitter URLs | `<head>` TODO comments | 12, 19–20, 26 |
| OG + Twitter card images | `<head>` | 19, 26 |
| Schema.org LinkedIn / GitHub URLs | `<script type="ld+json">` | 59–60 |
| Schema.org employer | `<script type="ld+json">` | 44–46 |
| Resume PDF link (navbar button) | `<nav>` | 1809 |
| Availability badge text | Hero section | 1824 |
| Hero H1 headline | Hero section | 1825 |
| Hero description paragraph | Hero section | 1827–1828 |
| Typing roles list | JS `roles` array | 2245–2251 |
| Hero proof stats (6 projects, MCA, RAG) | Hero section | 1844–1846 |
| Marquee tech tags (scrolling banner) | Marquee div | 1880, 1883 |
| About bio paragraphs | About section | 1900–1905 |
| About quote | About section | 1906 |
| Identity cards (Location, Education, Title) | About section | 1910–1913 |
| Experience job title / company | Experience section | 1932–1933 |
| Experience description paragraph | Experience section | 1938–1940 |
| Work bullet list items | Experience section | 1941–1949 |
| Project cards (all 6) | Projects section | 1967–2091 |
| Project GitHub / Demo / Case Study links | `.project-actions` per card | See table below |
| Skill bars (levels) | Skills section | 2113–2155 |
| Capability cards (4 boxes) | Skills section | 2161–2164 |
| Contact email address | Contact section + JS | 1180–1181, 2219 |
| GitHub profile URL | Contact section | 2189 |
| LinkedIn profile URL | Contact section | 2193 |
| Footer copyright text | Footer | 2206 |

---

## 🗂 File Anatomy — Line Ranges

### HEAD (Lines 1–1764)
| Block | Lines | Notes |
|---|---|---|
| DOCTYPE + html + head open | 1–3 | |
| Charset, viewport, theme-color | 4–6 | |
| `<title>` | 7 | "Chiranjeevi R \| Full Stack AI Engineer" |
| Meta description + author + robots | 8–10 | |
| Canonical URL | 12 | **TODO** — replace example.com |
| Open Graph tags | 14–20 | **TODO** — og:image, og:url |
| Twitter Card tags | 22–26 | **TODO** — twitter:image |
| Schema.org JSON-LD Person | 28–63 | employer, alumniOf, sameAs GitHub/LinkedIn |
| Inline favicon (SVG data URL) | 65 | Red/Blue "CR" mark |
| Google Fonts preconnect + link | 66–68 | Inter + Space Grotesk |
| `<style>` opens | 70 | |

### CSS — Design Tokens (Lines 71–96)
```
--bg: #050816           (page background)
--surface: #0B1220
--card: #111827
--primary: #E62429      (red — brand accent)
--secondary: #1E3A8A    (deep blue)
--cyan: #3B82F6
--highlight: #FF3B3B
--success: #10B981      (green — availability dot)
--text: #F8FAFC
--muted: #94A3B8
--soft: #CBD5E1
--radius: 16px
--nav-h: 78px
--max: 1180px
--font-display: "Space Grotesk"
--font-body: "Inter"
```
To change brand colors → edit `--primary`, `--secondary`, `--highlight` (lines 77–88).

### CSS — Component Blocks (Lines 97–1763)
| Component | Lines |
|---|---|
| Reset + base html/body | 98–165 |
| `.skip-link` (accessibility) | 167–182 |
| `.container`, `.eyebrow`, `.section`, `.section-title` | 184–242 |
| `.glass`, `.icon` utilities | 244–256 |
| **Preloader** `.preloader`, `.loader-mark` | 258–299 |
| **Navbar** `.site-header`, `.nav`, `.brand`, `.nav-links`, `.btn` | 301–474 |
| **Hero** section styles | 476–617 |
| **Console card** (hero right panel) | 619–759 |
| **Marquee** banner | 761–797 |
| **About** grid + identity cards | 799–867 |
| **Experience** card styles | 869–948 |
| **Projects** grid + card styles | 950–1265 |
| **Skills** layout + bars | 1266–1380 |
| **Contact** shell + cards | 1381–1480 |
| **Toast** notification | 1456–1480 |
| **Footer** | 1482–1505 |
| `.reveal` scroll animation | 1507–1516 |
| **Responsive breakpoints** | 1518–1668 |
| `prefers-reduced-motion` | 1670–1683 |
| **Spider cursor** CSS | 1685–1762 |
| `</style></head>` | 1763–1764 |

---

## BODY — Section Map

### Persistent UI Elements (Lines 1765–1818)
| Element | Lines | Notes |
|---|---|---|
| Skip link | 1766 | Accessibility — goes to `#main` |
| `<canvas id="webCanvas">` | 1768 | Spider web cursor effect |
| `<svg id="cursorSpider">` | 1769–1783 | Animated spider SVG |
| Preloader div | 1785–1787 | Shows "CR" on load |
| `<header>` / `<nav>` | 1789–1818 | Fixed top navbar |

### Navbar (Lines 1789–1818)
- **Brand logo text:** L1794 `Chiranjeevi R`, L1795 `Full Stack AI Engineer`
- **Nav links:** About / Experience / Projects / Skills / Contact (L1800–1804)
- **Resume button:** L1809 — `href="#"` → **TODO: real PDF URL**

---

### HERO Section `#hero` (Lines 1821–1875)
| Element | Lines |
|---|---|
| Availability badge | 1824 |
| H1 headline | 1825 |
| Hero description paragraph | 1826–1828 |
| Typing role span + caret | 1829–1831 |
| CTA buttons (View Projects / Contact Me) | 1832–1840 |
| Proof stats (6 / MCA / RAG) | 1843–1847 |
| Right panel — console card | 1850–1873 |

Console card metrics (L1867–1869):
- "Frontend experience" → **Accessible**
- "Backend architecture" → **API-first**
- "AI workflows" → **RAG ready**

---

### MARQUEE Banner (Lines 1877–1886)
Tags (same list duplicated for infinite scroll): Python, FastAPI, React, Machine Learning, Deep Learning, LangChain, LangGraph, RAG Systems, Vector Databases, OpenCV, Docker, AWS

**To add/remove tags:** Edit both `.marquee-group` divs at L1880 and L1883.

---

### ABOUT Section `#about` (Lines 1888–1917)
| Element | Lines |
|---|---|
| Section subtitle | 1893 |
| Section copy | 1895 |
| Bio paragraph 1 | 1900–1902 |
| Bio paragraph 2 | 1903–1905 |
| Quote block | 1906 |
| Identity card — Location | 1910 |
| Identity card — Education | 1911 |
| Identity card — Current Title | 1912 |
| Identity card — Also Works As | 1913 |

---

### EXPERIENCE Section `#experience` (Lines 1919–1953)
| Element | Lines |
|---|---|
| Section headline | 1924 |
| Section copy | 1926 |
| Job title — "AI Intern" | 1932 |
| Company — "Ellucian" | 1933 |
| Pill badge — "Enterprise AI Automation" | 1935 |
| Description paragraph | 1938–1940 |
| Work items list (7 bullets) | 1941–1949 |

Work items: Knowledge Draft Agent, Zoom Transcript Analysis, Engagement Summary Generator, Prompt Engineering, RAG Pipelines, Document Intelligence, Enterprise AI Automation

---

### PROJECTS Section `#projects` (Lines 1955–2094)

#### Project Cards — Line Map
| # | Project Name | Section Lines | Actions Lines |
|---|---|---|---|
| 01 | **STECUR** (Featured) | 1967–1996 | 1991–1993 |
| 02 | **AI Plagiarism Detection** | 1998–2015 | 2013 |
| 03 | **GitQuest** | 2017–2034 | 2032 |
| 04 | **CHD Detection ECG + X-Ray** | 2036–2053 | 2051 |
| 05 | **YOLO Text Detection** | 2055–2073 | 2071 |
| 06 | **Book Recommendation System** | 2075–2091 | 2089 |

All project action buttons currently have `href="#"` → **TODO: Replace with real GitHub/Demo/CaseStudy URLs.**

#### Tech Stacks Per Project
| Project | Tech Tags |
|---|---|
| STECUR | Deep Learning, Python, Computer Vision, Steganography, Secure Systems |
| AI Plagiarism | NLP, Embeddings, Python, Similarity Search |
| GitQuest | JavaScript, Gamification, Git, Interactive UI |
| CHD Detection | CNN, TensorFlow, ECG, X-Ray, Flask |
| YOLO Text | YOLO, OpenCV, OCR, Python |
| Book Recommender | NLP, TF-IDF, Cosine Similarity, Python |

---

### SKILLS Section `#skills` (Lines 2096–2167)

#### Skill Categories + Bar Levels
| Category | Lines | Skills |
|---|---|---|
| Frontend | 2107–2118 | HTML/CSS 92%, JS 88%, React 82%, Tailwind 84% |
| AI Engineering | 2120–2131 | ML 90%, Deep Learning 84%, RAG/LLM 86%, Prompt Eng 88% |
| Backend | 2133–2144 | Python 92%, FastAPI 84%, Flask 86%, Django/REST 78% |
| Data & Tools | 2146–2157 | MySQL/MongoDB 80%, Git/GitHub 88%, Docker/Linux 76%, AWS 68% |

**To change a bar level:** Find the `style="--level: XX%"` inline style on the `<i>` inside each `.bar`.

#### Capability Cards (Lines 2160–2165)
- ML Tooling: TensorFlow, PyTorch, Scikit-learn, OpenCV, YOLO
- GenAI Stack: LangChain, LangGraph, embeddings, vector databases, LLMs
- Product Delivery: UI systems, REST APIs, automation flows, deployment readiness
- Engineering Habits: Clean architecture, readable code, performance, accessibility, SEO

---

### CONTACT Section `#contact` (Lines 2169–2201)
| Element | Lines |
|---|---|
| Heading | 2175 |
| Description paragraph | 2176 |
| Email mailto link | 2180–2183 |
| Email display text | 2181 |
| Copy Email button | 2184–2187 |
| GitHub link | 2189–2192 |
| LinkedIn link | 2193–2196 |

**TODOs:**
- L2180: `chiranjeevi.r@example.com` → real email
- L2189: `https://github.com/` → real GitHub profile
- L2193: `https://linkedin.com/` → real LinkedIn profile

---

### FOOTER (Lines 2204–2213)
- Copyright text: L2206 — auto year via `id="year"` span
- Footer links: About, Projects, Contact

---

## JavaScript — All Behaviors (Lines 2217–2529)

| Behavior | Lines | Notes |
|---|---|---|
| Email variable (TODO) | 2219 | `chiranjeevi.r@example.com` → replace here too |
| Preloader dismiss | 2221–2225 | 450ms after load |
| Auto year in footer | 2227 | `new Date().getFullYear()` |
| Mobile menu toggle | 2229–2243 | Hamburger open/close |
| **Typing animation** `roles[]` array | 2245–2281 | Change roles here |
| Scroll reveal IntersectionObserver | 2283–2295 | `.reveal` → `.visible` |
| Active nav highlighting | 2297–2313 | Watches `main section[id]` |
| Toast notification | 2315–2321 | Shows for 1800ms |
| Copy email button | 2323–2330 | Uses `navigator.clipboard` |
| Placeholder link warning | 2332–2337 | All `href="#"` show toast |
| Magnetic button effect | 2339–2357 | `.magnetic` class elements |
| Parallax hero card | 2359–2371 | `.parallax-card` tilt on hover |
| **Spider cursor system** | 2373–2528 | Canvas web + animated SVG spider |

### Typing Roles (L2245–2251) — to add/remove roles:
```js
const roles = [
  "AI Engineer",
  "Full Stack Developer",
  "Machine Learning Engineer",
  "Generative AI Engineer",
  "Python Developer"
];
```

---

## 🚨 All Open TODOs

| TODO | Line(s) | What's Needed |
|---|---|---|
| Canonical URL | 12 | Real deployed domain |
| OG image URL | 19 | Real og-image.jpg URL |
| OG page URL | 20 | Real deployed domain |
| Twitter card image | 26 | Real image URL |
| Schema GitHub URL | 59 | Real GitHub profile URL |
| Schema LinkedIn URL | 60 | Real LinkedIn profile URL |
| Resume PDF link | 1809 | Real PDF URL |
| STECUR GitHub | 1991 | Real repo URL |
| STECUR Live Demo | 1992 | Real demo URL |
| STECUR Case Study | 1993 | Real case study URL |
| Plagiarism GitHub/Demo/Case | 2013 | Real URLs |
| GitQuest GitHub/Demo/Case | 2032 | Real URLs |
| CHD Detection GitHub/Demo/Case | 2051 | Real URLs |
| YOLO Text GitHub/Demo/Case | 2071 | Real URLs |
| Book Recommender GitHub/Demo/Case | 2089 | Real URLs |
| Contact email address | 2180–2181, 2219 | Real email (3 places!) |
| GitHub contact link | 2189 | Real GitHub profile URL |
| LinkedIn contact link | 2193 | Real LinkedIn profile URL |

> [!CAUTION]
> Email appears in **3 places**: L2180 (href), L2181 (display text), L2219 (JS variable). Update all three.

---

## 📐 Responsive Breakpoints

| Breakpoint | Lines | What Changes |
|---|---|---|
| `max-width: 1040px` | 1518–1545 | Hero/about/skills go to 1 column; project cards full-width |
| `max-width: 860px` | 1547–1593 | Nav links hidden → hamburger; section heads stack |
| `max-width: 640px` | 1595–1668 | Tighter padding; buttons full-width; capability grid 1 col |
| `prefers-reduced-motion` | 1670–1683, 1757–1762 | All animations disabled; spider hidden |
| `hover: none / pointer: coarse` | 1750–1755 | Spider cursor hidden on touch devices |
