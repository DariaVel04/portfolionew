export const profile = {
  name: "Daria Velychko",
  role: "Junior Frontend Developer",
  location: "Tampere, Finland",
  email: "daria.velychko48@gmail.com",
  github: "https://github.com/DariaVel04",
  linkedin: "https://www.linkedin.com/in/dvelychko-frontend/",
  instagram: "https://www.instagram.com/wdxhqp/",
};

export const navItems = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const heroLines = [
  { id: "en", label: "EN", text: "I build clear, responsive interfaces." },
  { id: "fi", label: "FI", text: "Teen selkeitä ja responsiivisia verkkosivuja." },
  { id: "ru", label: "RU", text: "Делаю понятные и адаптивные интерфейсы." },
];

export const frames = [
  { id: "helmi", name: "Helmi", meta: "FI · EN · RU" },
  { id: "hatynka", name: "Shelter", meta: "React" },
  { id: "cafe", name: "Cafe", meta: "6 pages" },
];

export const languages = [
  { name: "Russian", level: "Native" },
  { name: "Ukrainian", level: "Native" },
  { name: "English", level: "B2 · Duolingo 110" },
  { name: "Finnish", level: "A2–B1" },
  { name: "Polish", level: "B1" },
];

export const filters = [
  { id: "all", label: "All" },
  { id: "websites", label: "Websites" },
  { id: "react", label: "React" },
];

export const projects = [
  {
    id: "helmi",
    index: "01",
    title: "Pohjoisen Helmi",
    kind: "websites",
    kindLabel: "Website",
    year: "2026",
    summary: "Multilingual site for a cleaning service in Tampere.",
    context:
      "Pohjoisen Helmi is a cleaning service in Tampere. The site is a set of pages a visitor can read in Finnish, English, or Russian.",
    built:
      "I built the static site: home, about, services, tools, contact, and a privacy page. The layout responds to desktop, tablet, and mobile. A script loads the matching copy from JSON locale files. The footer and contact page include email, phone, and a map link.",
    result:
      "Published on GitHub Pages. A Lighthouse file in the repository records performance 0.93 from a local run on 24 May 2026. Only the performance category was measured.",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://dariavel04.github.io/pohjoisen-helmi/",
    repo: "https://github.com/DariaVel04/pohjoisen-helmi",
  },
  {
    id: "hatynka",
    index: "02",
    title: "Хатинка Лапок",
    kind: "react",
    kindLabel: "React",
    year: "2026",
    summary: "Shelter catalog with filters, modals, and an adoption form.",
    context:
      "Хатинка Лапок is an animal-shelter interface in Ukrainian. The hero says every life matters, and the page is there so a visitor can meet an animal and ask about adoption.",
    built:
      "I built it in React and Vite as separate sections: header, hero, pet catalog, about, questions, reviews, and footer. Category tabs support arrow keys. A card opens a detail modal, and an adoption modal collects a phone number with intl-tel-input. Reviews use Swiper.",
    result: "The source is on GitHub. A public demo is not published.",
    stack: ["React", "Vite", "JavaScript", "CSS", "Swiper"],
    live: "https://dariavel04.github.io/Hatynka-lapok-react-project/",
    repo: "https://github.com/DariaVel04/Hatynka-lapok-react-project",
  },
  {
    id: "cafe",
    index: "03",
    title: "Cafe",
    kind: "websites",
    kindLabel: "Website",
    year: "2024",
    summary: "Multi-page cafe site with a shared responsive layout.",
    context:
      "A cafe website spread across separate pages instead of one long landing screen: home, menu, about, story, blog, and contact.",
    built:
      "I built those pages in HTML and CSS, with a shared reset and a responsive stylesheet.",
    result: "Published on GitHub Pages.",
    stack: ["HTML", "CSS"],
    live: "https://dariavel04.github.io/cafe/",
    repo: "https://github.com/DariaVel04/cafe",
  },
];

export const studies = [
  {
    title: "Greenshop",
    note: "Plant shop landing page, “Let’s Make a Better Planet”.",
    stack: "HTML · CSS",
    repo: "https://github.com/DariaVel04/greenshop",
  },
  {
    title: "Latte cafe",
    note: "Cafe landing page.",
    stack: "HTML · CSS",
    repo: "https://github.com/DariaVel04/Latte-cafe",
  },
  {
    title: "Shape",
    note: "Furniture page, “We Help You Make Modern Furniture”.",
    stack: "HTML · CSS",
    repo: "https://github.com/DariaVel04/shape",
  },
  {
    title: "Sofa",
    note: "Interior page, “Modern Interior Design Studio”.",
    stack: "HTML · CSS",
    repo: "https://github.com/DariaVel04/sofa",
  },
  {
    title: "Product filter",
    note: "Loads the Fake Store API and filters by category, search, and price.",
    stack: "JavaScript",
    repo: "https://github.com/DariaVel04/shop.js",
  },
];

export const skillGroups = [
  {
    label: "Interfaces",
    items: ["HTML5", "CSS3", "Responsive layout"],
  },
  {
    label: "JavaScript",
    items: ["JavaScript", "JSON localization", "Fetch and filter"],
  },
  {
    label: "React",
    items: ["React", "Vite", "Component structure", "ESLint"],
  },
  {
    label: "Also studied",
    items: ["C#", "C++", "PHP", "MySQL"],
  },
  {
    label: "Tools",
    items: ["Figma", "VS Code", "GitHub"],
  },
];

export const education = [
  {
    period: "Through 2027",
    title: "Tredu Vocational College",
    detail:
      "Information and Communication Technology. I study frontend development and work with HTML, CSS, JavaScript, and React.",
  },
  {
    period: "July 2024 — present",
    title: "Frontend tutoring",
    detail:
      "Individual lessons in HTML, CSS, and JavaScript: responsive layouts, interaction, and small projects.",
  },
  {
    period: "March 2025 — October 2025",
    title: "SMM course",
    detail:
      "Social media marketing: strategy, content, targeted ads, metrics, visuals, and practice projects.",
  },
  {
    period: "January 2024 — June 2024",
    title: "C++ tutoring",
    detail: "Programming fundamentals, algorithms, and problem-solving.",
  },
];
