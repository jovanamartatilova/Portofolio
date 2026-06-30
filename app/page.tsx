"use client";
import { useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const SKILLS: Record<string, { name: string; icon?: string; img?: string }[]> = {
  "Tools & Platforms": [
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-original" },
  { name: "Figma", icon: "devicon-figma-plain colored" },
  { name: "Tableau", img: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/tableau.svg" },
  { name: "Microsoft Office", icon: "devicon-microsoftsqlserver-plain colored" },
  { name: "MySQL", icon: "devicon-mysql-plain colored" },
],
  "Languages": [
    { name: "Java", icon: "devicon-java-plain colored" },
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "PHP", icon: "devicon-php-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "SQL", icon: "devicon-azuresqldatabase-plain colored" },
    { name: "Dart", icon: "devicon-dart-plain colored" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  ],
  "Frameworks & Libraries": [
    { name: "Laravel", icon: "devicon-laravel-plain colored" },
    { name: "React JS", icon: "devicon-react-original colored" },
    { name: "Next.js", icon: "devicon-nextjs-plain" },
    { name: "Flutter", icon: "devicon-flutter-plain colored" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
  ],
  "Analytical": [
    { name: "Data Analysis", icon: "devicon-numpy-plain colored" },
    { name: "Business Process Analysis", icon: "devicon-trello-plain colored" },
    { name: "System Analysis & Design", icon: "devicon-figma-plain colored" },
    { name: "Data Visualization", img: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/tableau.svg" },
  ],
};

const PROJECTS = [
  {
    title: "Internship Portal System (EarlyPath)",
    type: "Fullstack Web App",
    description: "AI-powered multi-tenant SaaS Internship Management System with REST APIs, multi-tenant architecture, CV screening automation, dynamic certificate generation with FabricJS, and role-based authorization — built at PT. Otak Kanan.",
    stack: ["Laravel", "ReactJS", "TailwindCSS", "MySQL", "OpenAI API"],
    year: "2026",
    link: "https://earlypath.chrisant.works/",
    images: ["/EarlyPath(2).png", "/EarlyPath(1).png", "/EarlyPath.png"],
  },
  {
    title: "BookTrack",
    type: "Frontend Web App",
    description: "Responsive book library app with Open Library API integration, search, favorites with localStorage, dark mode, and fully responsive layout — built as a pre-project assessment for internship.",
    stack: ["React.js", "Tailwind CSS", "REST API"],
    year: "2026",
    link: "https://book-track-lovat.vercel.app/",
    images: ["/BookTrack (1).png", "/BookTrack (2).png", "/BookTrack.png"],
  },
  {
    title: "AgriConnect",
    type: "UI/UX Design",
    description: "Digital agriculture marketplace connecting farmers directly with buyers. End-to-end UX process: user research, affinity diagrams, empathy maps, personas, MoSCoW prioritization, wireframes, and high-fidelity Figma prototypes.",
    stack: ["Figma", "Design Thinking", "Co-Design", "Usability Testing"],
    year: "2025",
    link: "https://bit.ly/prototipewebsite",
    images: ["/AgriConnect.jpeg", "/AgriConnect(1).jpeg"],
  },
  {
    title: "JaringJurnal AISINDO",
    type: "Web App",
    description: "Web-based journal information system for AISINDO to centralize academic journal data, manage submissions, and support structured publication workflows with role-based access control.",
    stack: ["Laravel", "PHP", "MySQL", "System Analysis"],
    year: "2025",
    link: "https://github.com/AgileSoftDev-2025/JaringJurnalAisindo",
    images: ["/Jarjun AISINDO.jpeg"],
  },
  {
    title: "Puskesmas Girimulyo — Redesign",
    type: "UI/UX Design",
    description: "UI/UX redesign of a public health center's information system. Focused on simplifying registration flows, improving patient accessibility, and restructuring information architecture based on user research.",
    stack: ["Figma", "User Research", "Prototyping"],
    year: "2025",
    link: "https://bit.ly/prototiperedesign",
    images: ["/Girimulyo.jpeg"],
  },
  {
    title: "Retail Sales Dashboard",
    type: "Data Visualization",
    description: "Interactive Tableau dashboard for retail analytics with KPI tracking (sales, profit, orders), monthly trends, product category & age group analysis, and dynamic filters for data-driven decision making.",
    stack: ["Tableau", "Data Analysis"],
    year: "2025",
    link: "https://public.tableau.com/app/profile/jovana.martatilova1445/viz/avdpuas_revisi2_17660985641910/General-Sales1",
    images: ["/Tableau.png"],
  },
  {
    title: "LibraReads Mobile",
    type: "Mobile App",
    description: "Mobile digital library for programming e-books built with Flutter & Dart. Features authentication, book catalog, personal bookshelf, in-app PDF reader, and REST API integration. Tested with 25 respondents.",
    stack: ["Flutter", "Dart", "PHP", "MySQL", "REST API"],
    year: "2025",
    link: "https://github.com/jovanamartatilova/librareads_mobile",
    images: ["/LRMob.jpeg"],
  },
  {
    title: "LibraReads Web",
    type: "Fullstack Web App",
    description: "Full-stack Laravel library management system with User & Admin roles, CRUD operations, borrowing management, and admin dashboard with data visualizations (reading trends, user growth, category reports).",
    stack: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    year: "2025",
    link: "https://github.com/jovanamartatilova",
    images: ["/LRWeb.jpeg"],
  },
  {
    title: "MorBot",
    type: "Research / Chatbot",
    description: "AI chatbot for post-natal mothers on parenting during the golden age of child development. Won 2nd place at FST PKM Cup in the Economic Growth category.",
    stack: ["AI / NLP", "Chatbot", "Research"],
    year: "2024",
    badge: "2nd Place — FST PKM Cup",
    images: ["/Mock Up LibraReads.png"],
  },
  {
    title: "Meowly Smartcat",
    type: "AI / Machine Learning",
    description: "AI-powered cat breed classifier using computer vision. Contributor on a Python + Next.js stack.",
    stack: ["Python", "Next.js", "AI"],
    year: "2024",
    link: "https://github.com/anindyawita/Meowly-Smartcat-Service-Platform/",
    badge: "Contributor",
    images: ["/MockUp Meowly.png"],
  },
  {
    title: "Dradahblumbang Village Profile",
    type: "Web App",
    description: "Village profile website for Dradahblumbang, built with TypeScript. Contributed to frontend development.",
    stack: ["TypeScript"],
    year: "2024",
    link: "https://dradahblumbang.vercel.app/",
    badge: "Contributor",
    images: ["/Dradah.png"],
  },
];

const EXPERIENCE = [
  // ── INTERNSHIP ──
  { role:"Full Stack Web Developer", org:"PT. Otak Kanan · Internship", period:"Feb 2026 – Present", category:"Internship",
    img:"/otakkanan.jpeg", // ← taruh foto di public/
    bullets:[
      "Developing an AI-powered multi-tenant SaaS Internship Management System using Laravel and ReactJS",
      "Building REST APIs, implementing tenant isolation, and integrating AI features (CV screening & evaluation automation)",
      "Developing dynamic certificate generation with FabricJS and designing scalable architecture with role-based authorization",
      "Tech: Laravel, ReactJS, TailwindCSS, MySQL, OpenAI API, Queue System",
    ]},

  // ── PROFESSIONAL ──
  { role:"Campus Ambassador", org:"Poplite by Populix · Part-time", period:"Jan 2025 – Apr 2025", category:"Professional",
    img:"/popsurvey.jpeg",
    bullets:[
      "Created educational and promotional content about the Poplite platform",
      "Received training in Content Marketing and Brand Marketing",
    ]},

  // ── CAMPUS ──
  { role:"Head of Human Resources Department", org:"LPM FORMAT FST · Universitas Airlangga", period:"Mar 2025 – Present", category:"Campus",
    img:"/format.jpeg",
    bullets:[
      "Leading HR strategy for LPM FORMAT, the official student press organization of FST UNAIR",
      "Developing capacity-building programs in leadership, communication, and press journalism",
      "Initiating performance evaluation and feedback systems for member development",
    ]},
  { role:"Coordinator of Event Organizer — POINTER", org:"FST Universitas Airlangga", period:"May 2025 – Nov 2025", category:"Campus",
    img:"/himsi.png",
    bullets:[
      "Spearheaded planning and execution of orientation programs for new FST students",
      "Designed event theme, concept, and rundown aligned with organizational goals",
    ]},
  { role:"Secretary 2 — SCIFEAST 2024", org:"BEM FST Universitas Airlangga", period:"May 2024 – Nov 2024", category:"Campus",
    img:"/bemfst.jpg",
    bullets:[
      "SCIFEAST is a faculty event to appreciate FST students and introduce UNAIR to high school students across Indonesia",
      "Managed secretarial duties, documentation, and coordination across event committees",
    ]},
  { role:"Liaison Officer — PIMNAS 37 UNAIR", org:"Universitas Airlangga", period:"Oct 2024", category:"Campus",
    img:"/pimnas.png",
    bullets:[
      "Served as liaison officer for PIMNAS 37, the national student scientific work competition organized by Kemendikbud",
    ]},
  { role:"Group Mentor — PENDEKAR FST 2024", org:"PENDEKAR FST UNAIR", period:"May 2024 – Aug 2024", category:"Campus",
    img:"/bemfst.jpg",
    bullets:[
      "Mentored new FST students during campus orientation (PKKMB), introducing student organizations, culture, and faculty values",
    ]},
  { role:"Staff of Human Resource Development", org:"HIMSI · Universitas Airlangga", period:"Feb 2024 – Jan 2025", category:"Campus",
    img:"/himsi.png",
    bullets:[
      "Coordinated the Upgrading 1.0 work program for IS student development",
      "Organized training programs, workshops, and seminars for Information Systems students",
      "Played an integral role in recruitment and mentoring of new students",
    ]},
];

// ✅ UPDATED: 4 awards, data lengkap sesuai LinkedIn
const AWARDS = [
  {
    title: "Journalism Fellow",
    org: "Narasi Academy × Australian Embassy",
    year: "Jun 2025",
    desc: 'Selected as 1 of 10 student press organizations nationwide. Produced "Scroll, Like, Repeat", a multimedia journalism project on Gen Z mental health & social media, showcased at the Australian Embassy Wall of Fame.',
    color: "var(--accent)",
    img: "/narasi.jpeg"
  },
  {
    title: "Finalist KIM UNAIR 2024 (PKM-K)",
    org: "Garuda Sakti · Universitas Airlangga",
    year: "Nov 2024",
    desc: 'Competed in the KIM 2024 final with proposal "Inovasi Gerai Parfum Berbasis AI - Neuro Linguistic Programming", a program selecting the best PKM proposals across faculties.',
    color: "#C8A96E",
    img: "/kim.jpeg"
  },
  {
    title: "2nd Winner — FST PKM Cup 2024",
    org: "BEM Fakultas Sains dan Teknologi · UNAIR",
    year: "Jun 2024",
    desc: 'Created MorBot: "Inovasi Chatbot Parenting pada Masa Golden Age Anak bagi Ibu Pasca Persalinan", an AI parenting chatbot for post-natal mothers.',
    color: "#7A9E7E",
    img: "/fst.jpeg"
  },
  {
    title: "Finalist — GYIC 2024",
    org: "Exalter Student and Inventify Center",
    year: "Jul 2024",
    desc: "Designed SolidaritEase, a platform facilitating solidarity and cooperation within communities for social and environmental projects.",
    color: "#7A8EA0",
    img: "/gyic.jpeg"
  },
];

function ProjectCard({ p }: { p: typeof PROJECTS[number] }) {
  const [imgIndex, setImgIndex] = useState(0);
  const images = p.images || [];

  return (
    <div className="project-card">
      {images.length > 0 && (
<div style={{ position:"relative", height:160, borderRadius:"16px 16px 0 0", overflow:"hidden", margin:"-28px -28px 20px -28px", width:"calc(100% + 56px)", background:"#F5F0E8" }}>
  <img src={images[imgIndex]} alt={p.title} style={{ width:"100%", height:"100%", objectFit:"contain" }} />
          {images.length > 1 && (
            <>
              <button onClick={() => setImgIndex((imgIndex - 1 + images.length) % images.length)}
                style={{ position:"absolute", left:8, top:"50%", transform:"translateY(-50%)", width:28, height:28, borderRadius:"50%", border:"none", background:"rgba(0,0,0,0.5)", color:"#fff", cursor:"pointer" }}>‹</button>
              <button onClick={() => setImgIndex((imgIndex + 1) % images.length)}
                style={{ position:"absolute", right:8, top:"50%", transform:"translateY(-50%)", width:28, height:28, borderRadius:"50%", border:"none", background:"rgba(0,0,0,0.5)", color:"#fff", cursor:"pointer" }}>›</button>
              <div style={{ position:"absolute", bottom:8, left:"50%", transform:"translateX(-50%)", display:"flex", gap:5 }}>
                {images.map((_, i) => (
                  <span key={i} style={{ width:6, height:6, borderRadius:"50%", background: i === imgIndex ? "#fff" : "rgba(255,255,255,0.4)" }} />
                ))}
              </div>
            </>
          )}
        </div>
      )}
      <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16 }}>
        <div>
          <p style={{ fontSize:11,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--ink-faint)",marginBottom:4 }}>{p.type}</p>
          <h3 className="serif" style={{ fontSize:22,fontWeight:400,color:"var(--ink)" }}>{p.title}</h3>
        </div>
        <span style={{ fontSize:13,color:"var(--ink-faint)" }}>{p.year}</span>
      </div>
      {p.badge && (
        <div style={{ display:"inline-block",padding:"4px 10px",background:"var(--accent-light)",color:"var(--accent)",borderRadius:100,fontSize:12,fontWeight:500,marginBottom:12 }}>{p.badge}</div>
      )}
      <p style={{ fontSize:14,color:"var(--ink-muted)",lineHeight:1.65,marginBottom:20 }}>{p.description}</p>
      <div style={{ display:"flex",flexWrap:"wrap",gap:6 }}>
        {p.stack.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
      {p.link && (
  <div style={{ marginTop:16 }}>
    <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ fontSize:13,color:"var(--ink)",textDecoration:"none" }}>
      {p.title.includes("Retail Sales Dashboard") ? "Visit Tableau Public →"
        : ["BookTrack","Internship Portal System (EarlyPath)","Dradahblumbang"].some(t => p.title.includes(t)) ? "Visit website →"
        : "Visit More.. →"}
    </a>
  </div>
)}
    </div>
  );
}

export default function Home() {
  const [, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAV */}
     <nav style={{ position:"fixed",top:16,left:"50%",transform:"translateX(-50%)",zIndex:100,width:"calc(100% - 48px)",maxWidth:1100,background:"rgba(255,255,255,0.55)",backdropFilter:"blur(20px) saturate(180%)",WebkitBackdropFilter:"blur(20px) saturate(180%)",border:"1px solid rgba(255,255,255,0.7)",borderRadius:100,boxShadow:"0 4px 24px rgba(26,23,20,0.08)" }}>
  <div style={{ padding:"0 24px",height:52,display:"flex",alignItems:"center",justifyContent:"center" }}>
    <div style={{ display:"flex",gap:56,alignItems:"center" }}>
      {NAV_LINKS.map(l => <a key={l.label} href={l.href} className="nav-link">{l.label}</a>)}
    </div>
  </div>
</nav>

      {/* ═══════════════ HERO ═══════════════ */}
      <section id="about" className="hero-section" style={{ minHeight:"100vh",display:"flex",alignItems:"center",padding:"0 24px",background:"linear-gradient(160deg, #EDE0CC 0%, #F5F0E8 45%, #F5F0E8 100%)" }}>
        <div className="hero-content" style={{ maxWidth:1100,margin:"0 auto",width:"100%",paddingTop:80,paddingBottom:80 }}>
          <div className="hero-inner" style={{ display:"flex",alignItems:"center",gap:64,justifyContent:"space-between" }}>
            {/* ── KIRI ── */}
            <div style={{ flex:1,minWidth:0 }}>
              <p className="section-label animate-fade-up" style={{ marginBottom:20 }}>
                Information Systems · Universitas Airlangga · Surabaya
              </p>
              <h1 className="serif animate-fade-up delay-100" style={{ fontSize:"clamp(48px,6.5vw,82px)",lineHeight:1.06,fontWeight:400,color:"var(--ink)",marginBottom:28 }}>
                Jovana<br />Martatilova
              </h1>
              <p className="animate-fade-up delay-200" style={{ fontSize:"clamp(15px,1.8vw,18px)",color:"var(--ink-muted)",lineHeight:1.75,maxWidth:520,marginBottom:40 }}>
                Information Systems student with interests in Data Analytics and Business Intelligence. Experienced in data analysis, dashboard development, and machine learning projects, with additional background in UI/UX and web development. Passionate about building data-driven digital solutions.
              </p>
              <div className="animate-fade-up delay-300" style={{ display:"flex",gap:12,flexWrap:"wrap",marginBottom:64 }}>
                <a href="#projects" className="btn-primary">View Projects <span aria-hidden="true">↓</span></a>
                <a href="https://linkedin.com/in/jovanamartatilova" target="_blank" rel="noopener noreferrer" className="btn-outline">LinkedIn</a>
                <a href="https://github.com/jovanamartatilova" target="_blank" rel="noopener noreferrer" className="btn-outline">GitHub</a>
              </div>
              {/* Stats */}
              <div className="animate-fade-up delay-400" style={{ display:"flex",gap:0,borderTop:"1px solid #D4CFC8",paddingTop:32,maxWidth:480 }}>
                {[{n:"3.62",label:"GPA / 4.00"},{n:"6+",label:"Projects Built"},{n:"4×",label:"Awarded"}].map((s,i) => (
                  <div key={s.n} style={{ flex:1,paddingRight:24,borderRight: i < 2 ? "1px solid #E8E3DA" : "none",paddingLeft: i > 0 ? 24 : 0 }}>
                    <div className="serif" style={{ fontSize:38,fontWeight:400,color:"var(--ink)",lineHeight:1 }}>{s.n}</div>
                    <div style={{ fontSize:12,color:"var(--ink-faint)",marginTop:6,letterSpacing:"0.02em" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── KANAN — FOTO ── */}
            <div className="animate-fade-up delay-500" style={{ flexShrink:0, position:"relative" }}>
              <div className="photo-wrapper">
                <div className="photo-frame-deco" />
                <div className="photo-container">
                  <img
                    src="/photo.jpg"
                    alt="Jovana Martatilova"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* SKILLS */}
      <section id="skills" style={{ background:"var(--ink)",padding:"80px 24px" }}>
        <div style={{ maxWidth:1100,margin:"0 auto" }}>
          <div style={{ display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:52,flexWrap:"wrap",gap:16 }}>
            <div>
              <p style={{ fontSize:11,letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(245,240,232,0.4)",marginBottom:8,fontWeight:500 }}>Capabilities</p>
              <h2 className="serif" style={{ fontSize:38,fontWeight:400,color:"var(--cream)" }}>Skills</h2>
            </div>
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:1,border:"1px solid rgba(245,240,232,0.08)",borderRadius:20,overflow:"hidden" }}>
  {Object.entries(SKILLS).map(([group, items], gi) => (
    <div key={group} style={{
      padding:"32px 28px",
      background: gi % 2 === 0 ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
      borderRight:"1px solid rgba(245,240,232,0.08)",
    }}>
      <p style={{ fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--accent)",marginBottom:20,fontWeight:500 }}>{group}</p>
      <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(64px,1fr))",gap:16 }}>
        {items.map(s => (
          <div key={s.name} title={s.name} style={{
            display:"flex",flexDirection:"column",alignItems:"center",gap:8,
            padding:"14px 8px",borderRadius:12,
            background:"rgba(255,255,255,0.03)",
            border:"1px solid rgba(245,240,232,0.08)",
            transition:"transform 0.18s, background 0.18s, border-color 0.18s",
            cursor:"default",
          }}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px) scale(1.04)";e.currentTarget.style.background="rgba(200,85,61,0.12)";e.currentTarget.style.borderColor="rgba(200,85,61,0.4)"}}
            onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0) scale(1)";e.currentTarget.style.background="rgba(255,255,255,0.03)";e.currentTarget.style.borderColor="rgba(245,240,232,0.08)"}}
          >
            {s.icon ? (
  <i className={s.icon} style={{ fontSize:28,color:"var(--cream)" }} />
) : (
  <img src={s.img} alt={s.name} style={{ width:28,height:28 }} />
)}
            <span style={{ fontSize:10,color:"rgba(245,240,232,0.65)",textAlign:"center",lineHeight:1.3 }}>{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding:"80px 24px",background:"var(--cream)",borderTop:"1px solid #DDD6CA" }}>
        <div style={{ maxWidth:1100,margin:"0 auto" }}>
          <p className="section-label" style={{ marginBottom:8 }}>Work</p>
          <div style={{ display:"flex",alignItems:"baseline",justifyContent:"space-between",marginBottom:48,flexWrap:"wrap",gap:12 }}>
            <h2 className="serif" style={{ fontSize:38,fontWeight:400 }}>Projects</h2>
            <a href="https://github.com/jovanamartatilova" target="_blank" rel="noopener noreferrer" style={{ fontSize:13,color:"var(--accent)",textDecoration:"none" }}>View all on GitHub →</a>
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:20 }}>
          {PROJECTS.map(p => <ProjectCard key={p.title} p={p} />)}
        </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{ padding:"80px 24px",background:"var(--ink)",borderTop:"1px solid #EDE7D9" }}>
        <div style={{ maxWidth:1100,margin:"0 auto" }}>
        <p style={{ fontSize:11,letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(245,240,232,0.4)",marginBottom:8,fontWeight:500 }}>Journey</p>
          <h2 className="serif" style={{ fontSize:38,fontWeight:400,marginBottom:48,color:"var(--cream)" }}>Experience</h2>
         {[
            { key:"Internship", label:"Internship" },
            { key:"Professional", label:"Professional" },
            { key:"Campus", label:"Campus" },
          ].map(cat => (
            <div key={cat.key} style={{ marginBottom:52 }}>
              <p style={{ fontSize:11,letterSpacing:"0.15em",textTransform:"uppercase",color:"var(--accent)",fontWeight:500,marginBottom:20 }}>{cat.label}</p>
              <div>
                {EXPERIENCE.filter(e=>e.category===cat.key).map(e => (
                  <div key={e.role} style={{ padding:"24px 0",borderBottom:"1px solid rgba(245,240,232,0.08)" }}>
                    <div style={{ display:"flex",gap:20,alignItems:"flex-start" }}>
                      {e.img && (
                        <img
                          src={e.img}
                          alt={e.role}
                          onError={(ev)=>{(ev.target as HTMLImageElement).style.display="none"}}
                          style={{ width:56,height:56,borderRadius:12,objectFit:"cover",flexShrink:0,border:"1px solid rgba(245,240,232,0.12)",marginTop:2 }}
                        />
                      )}
                      <div style={{ flex:1,minWidth:0 }}>
                        <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:8,marginBottom:4 }}>
                          <div>
                            <h3 style={{ fontSize:17,fontWeight:500,color:"var(--cream)" }}>{e.role}</h3>
                            <p style={{ fontSize:14,color:"var(--accent)",marginTop:2 }}>{e.org}</p>
                          </div>
                          <span style={{ fontSize:12,color:"rgba(245,240,232,0.35)",whiteSpace:"nowrap",marginTop:4 }}>{e.period}</span>
                        </div>
                        <ul style={{ marginTop:12,paddingLeft:0,listStyle:"none" }}>
                          {e.bullets.map((b,i) => (
                            <li key={i} style={{ fontSize:14,color:"rgba(245,240,232,0.6)",lineHeight:1.6,padding:"3px 0 3px 16px",position:"relative" }}>
                              <span style={{ position:"absolute",left:0,top:"50%",transform:"translateY(-50%)",width:4,height:4,background:"var(--accent)",borderRadius:"50%",display:"block" }} />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Education */}
          <div style={{ marginTop:32,padding:"28px 32px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(245,240,232,0.08)",borderRadius:16,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16 }}>
            <div>
              <p style={{ fontSize:11,letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(245,240,232,0.4)",fontWeight:500,marginBottom:6 }}>Education</p>
              <h3 className="serif" style={{ fontSize:24,fontWeight:400,color:"var(--cream)" }}>Universitas Airlangga</h3>
              <p style={{ color:"rgba(245,240,232,0.5)",fontSize:14,marginTop:4 }}>S1 Information Systems · Aug 2023 – Present</p>
            </div>
            <div style={{ textAlign:"right" }}>
              <div className="serif" style={{ fontSize:36,color:"var(--cream)" }}>3.62</div>
              <div style={{ fontSize:12,color:"rgba(245,240,232,0.4)" }}>GPA / 4.00</div>
            </div>
          </div>

        </div>{/* end maxWidth:1100 */}
      </section>

      {/* ═══════════════ HONORS & AWARDS ═══════════════ */}
      {/* ✅ Section mandiri — full width, tidak terkurung maxWidth:760 */}
      <section style={{
        padding:"80px 24px",
        background:"linear-gradient(135deg, #EDE0CC 0%, #F5F0E8 55%, #EDE7D9 100%)",
        borderTop:"1px solid #DDD6CA",
        position:"relative",
        overflow:"hidden",
      }}>
        {/* Dot grid background */}
        <div style={{
          position:"absolute", inset:0,
          backgroundImage:"radial-gradient(circle, #C8B89A 1px, transparent 1px)",
          backgroundSize:"28px 28px",
          opacity:0.18,
          pointerEvents:"none",
        }} />
        {/* Blob merah kanan atas */}
        <div style={{
          position:"absolute", top:"-100px", right:"-100px",
          width:500, height:500,
          background:"radial-gradient(circle, rgba(200,85,61,0.09) 0%, transparent 70%)",
          pointerEvents:"none",
        }} />
        {/* Blob golden kiri bawah */}
        <div style={{
          position:"absolute", bottom:"-80px", left:"-60px",
          width:380, height:380,
          background:"radial-gradient(circle, rgba(200,169,110,0.10) 0%, transparent 70%)",
          pointerEvents:"none",
        }} />

        <div style={{ maxWidth:1100, margin:"0 auto", position:"relative", zIndex:1 }}>
          <p className="section-label" style={{ marginBottom:8 }}>Recognition</p>
          <div style={{ display:"flex", alignItems:"baseline", justifyContent:"space-between", marginBottom:40, flexWrap:"wrap", gap:12 }}>
            <h2 className="serif" style={{ fontSize:38, fontWeight:400 }}>Honors & Awards</h2>
            <span style={{ fontSize:13, color:"var(--ink-faint)" }}>{AWARDS.length} achievements</span>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:20 }}>
            {AWARDS.map((a) => (
              <div
                key={a.title}
                style={{
                  padding:"28px 24px",
                  border:"1px solid rgba(200,175,140,0.35)",
                  borderRadius:16,
                  background:"rgba(255,255,255,0.78)",
                  backdropFilter:"blur(10px)",
                  WebkitBackdropFilter:"blur(10px)",
                  boxShadow:"0 4px 20px rgba(26,23,20,0.06)",
                  transition:"transform 0.22s, box-shadow 0.22s",
                  position:"relative",
                  overflow:"hidden",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 16px 48px rgba(26,23,20,0.11)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(26,23,20,0.06)";
                }}
              >
                                {/* ✅ GAMBAR AWARD */}
                {a.img && (
                  <div style={{
                    height:160,
                    borderRadius:"12px 12px 0 0",
                    overflow:"hidden",
                    margin:"-28px -24px 20px -24px",
                    width:"calc(100% + 48px)",
                  }}>
                    <img
                      src={a.img}
                      alt={a.title}
                      style={{ width:"100%", height:"100%", objectFit:"cover" }}
                    />
                  </div>
                )}

                {/* Accent bar top */}
                <div style={{
                  position:"absolute", top:0, left:0, right:0, height:3,
                  background: a.color,
                  borderRadius:"16px 16px 0 0",
                }} />
                <div style={{ fontSize:11, letterSpacing:"0.12em", textTransform:"uppercase", color:"var(--ink-faint)", marginBottom:10, marginTop:4 }}>{a.year}</div>
                <h4 className="serif" style={{ fontSize:17, fontWeight:400, color:"var(--ink)", marginBottom:6, lineHeight:1.35 }}>{a.title}</h4>
                <p style={{ fontSize:12, color: a.color, marginBottom:10, fontWeight:500 }}>{a.org}</p>
                <p style={{ fontSize:13, color:"var(--ink-muted)", lineHeight:1.6 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WRITING */}
<section style={{ padding:"64px 24px", background:"var(--cream)", borderTop:"1px solid #DDD6CA", borderBottom:"1px solid #DDD6CA" }}>
  <div style={{ maxWidth:1100, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:24 }}>
    <div>
      <p className="section-label" style={{ marginBottom:8 }}>Writing</p>
      <h2 className="serif" style={{ fontSize:28, fontWeight:400, color:"var(--ink)", marginBottom:8 }}>
        I also write on Medium.
      </h2>
      <p style={{ fontSize:14, color:"var(--ink-muted)", maxWidth:480, lineHeight:1.6 }}>
        Occasional thoughts on tech, data, and student life — published on Medium.
      </p>
    </div>
    <a href="https://medium.com/@jovanamartatilova" target="_blank" rel="noopener noreferrer" className="btn-primary">
      Read on Medium <span aria-hidden="true">→</span>
    </a>
  </div>
</section>

      {/* CONTACT */}
      <section id="contact" style={{ padding:"80px 24px 100px",background:"var(--ink)",color:"var(--cream)" }}>
        <div style={{ maxWidth:1100,margin:"0 auto" }}>
          <p style={{ fontSize:11,letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(245,240,232,0.4)",marginBottom:16 }}>Get in Touch</p>
          <h2 className="serif" style={{ fontSize:"clamp(36px,6vw,64px)",fontWeight:400,marginBottom:20,color:"var(--cream)" }}>
            Let&apos;s work together.
          </h2>
          <p style={{ fontSize:16,color:"rgba(245,240,232,0.6)",maxWidth:500,lineHeight:1.7,marginBottom:48 }}>
            Currently open to internship extensions, project collaborations, and new opportunities.
          </p>
          <div style={{ display:"flex",gap:16,flexWrap:"wrap",marginBottom:56 }}>
            <a href="mailto:jovanamartatilova@gmail.com" style={{ display:"inline-flex",alignItems:"center",gap:8,padding:"12px 28px",background:"var(--cream)",color:"var(--ink)",borderRadius:100,fontSize:14,fontWeight:500,textDecoration:"none" }}>
              jovanamartatilova@gmail.com
            </a>
            <a href="https://linkedin.com/in/jovanamartatilova" target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex",alignItems:"center",gap:8,padding:"12px 28px",border:"1px solid rgba(245,240,232,0.2)",color:"var(--cream)",borderRadius:100,fontSize:14,fontWeight:500,textDecoration:"none" }}>LinkedIn</a>
            <a href="https://github.com/jovanamartatilova" target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex",alignItems:"center",gap:8,padding:"12px 28px",border:"1px solid rgba(245,240,232,0.2)",color:"var(--cream)",borderRadius:100,fontSize:14,fontWeight:500,textDecoration:"none" }}>GitHub</a>
          </div>
          <hr style={{ borderColor:"rgba(245,240,232,0.1)",marginBottom:24,border:"none",borderTop:"1px solid rgba(245,240,232,0.1)" }} />
          <div style={{ display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:12 }}>
            <p style={{ fontSize:13,color:"rgba(245,240,232,0.35)" }}>© 2026 Jovana Martatilova</p>
            <p style={{ fontSize:13,color:"rgba(245,240,232,0.35)" }}>Surabaya, East Java, Indonesia</p>
          </div>
        </div>
      </section>
    </>
  );
}