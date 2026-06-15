import React from 'react'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

const competences = [
  "Digital Marketing", "AI Automations", "SEO", "Email Marketing", "Prompt Engineering",
  "Lead Generation", "WordPress Development", "B2B Strategy", "Marketing Automation", "Content Marketing"
]

const projects = [
  {
    title: "Agent B2B",
    desc: "Agent AI per automatizzare le richieste di contatto su LinkedIn: invia messaggi personalizzati in base ai criteri target, filtra i lead e gestisce le conversazioni in modo scalabile.",
    alt: "Automazione LinkedIn per lead generation B2B con agent AI",
    tags: ["B2B", "LinkedIn Automation", "Lead Generation"],
    image: `${import.meta.env.BASE_URL}images/project1.png`,
    url: "https://www.linkedin.com/in/andrea-fallavollita-454697178/"
  },
  {
    title: "Lead Reporting Automation for Business",
    desc: "Sistema automatico di generazione report da file sorgente con codice broker: estrae dati, genera dashboard e report personalizzati per monitorare performance e conversioni.",
    alt: "Report automatici con codice broker per analisi lead e metriche business",
    tags: ["Marketing Automation", "Lead Generation", "Reporting"],
    image: `${import.meta.env.BASE_URL}images/project2.png`,
    url: "https://www.linkedin.com/in/andrea-fallavollita-454697178/"
  },
  {
    title: "WordPress Agency Kit",
    desc: "Gestione di siti WordPress e miglioramento per lead generation: template personalizzati, landing page ottimizzate e integrazioni per aumentare le conversioni.",
    alt: "Gestione WordPress per agenzie digitali con focus su lead generation e ottimizzazione conversioni",
    tags: ["WordPress", "Frontend Design", "Lead Generation"],
    image: `${import.meta.env.BASE_URL}images/project3.png`,
    url: "https://www.linkedin.com/in/andrea-fallavollita-454697178/"
  },
  {
    title: "VoxItalia MVP",
    desc: "Piattaforma AI per localizzare contenuti video in italiano, con workflow guidato, traduzione automatica e gestione dei sottotitoli.",
    alt: "Interfaccia AI per localizzazione video e traduzione automatica in italiano",
    tags: ["AI Automation", "Video Localization", "Workflow Automation"],
    image: `${import.meta.env.BASE_URL}images/project4.png`,
    url: "https://www.linkedin.com/in/andrea-fallavollita-454697178/"
  },
  {
    title: "Agency Landing Page",
    desc: "Landing page responsive per agenzie digitali, progettata per comunicare servizi, valore e conversione in modo chiaro.",
    alt: "Landing page moderna per agenzia digitale con design responsive",
    tags: ["Frontend Design", "Landing Page", "Digital Marketing"],
    image: `${import.meta.env.BASE_URL}images/project5.png`,
    url: "https://www.linkedin.com/in/andrea-fallavollita-454697178/"
  }
]

const Home: React.FC = () => {
  return (
    <div style={{ background: '#020617', color: '#f8fafc', minHeight: '100vh', fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Hero />
      
{/* SEO Text Section */}
       <section id="about" style={{ padding: '80px 20px', maxWidth: '980px', margin: '0 auto', textAlign: 'center' }}>
         <h2 style={{ fontSize: '32px', color: '#00f5ff', marginBottom: '30px' }}>Marketing Automation Specialist</h2>
        <p style={{ color: '#cbd5e1', lineHeight: '1.7' }}>
          Sono Andrea Fallavollita, Marketing Automation Specialist con focus su digital marketing, AI automation, lead generation, email marketing e frontend design.
          Creo workflow digitali pensati per rendere i processi più semplici, misurabili e scalabili, con un approccio pratico orientato a performance, efficienza e crescita.
          Il mio portfolio raccoglie progetti legati ad automazioni AI, sistemi di reporting, landing page responsive e soluzioni digitali per aziende B2B.
          Sono interessato a opportunità in ambito marketing automation, digital marketing, growth, CRM automation e AI workflow.
        </p>
      </section>
      
      <section id="skills" style={{ padding: '80px 20px', background: '#000' }}>
        <h2 style={{ fontSize: '36px', color: '#00f5ff', textAlign: 'center', marginBottom: '40px' }}>Competenze</h2>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '16px' 
        }}>
          {competences.map((skill, idx) => (
            <div key={idx} style={{
              background: '#111',
              border: '1px solid rgba(34, 211, 238, 0.2)',
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'center'
            }}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" style={{ padding: '80px 20px' }}>
        <h2 style={{ fontSize: '36px', color: '#00f5ff', textAlign: 'center', marginBottom: '40px' }}>Progetti</h2>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '24px' 
        }}>
          {projects.map((proj, idx) => (
            <div key={idx} style={{
              background: '#111',
              borderRadius: '16px',
              overflow: 'hidden'
            }}>
              <img src={proj.image} alt={proj.alt} loading="lazy" decoding="async" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '24px' }}>
                <h3 style={{ color: '#00f5ff', marginBottom: '10px' }}>{proj.title}</h3>
                <p style={{ color: '#888', marginBottom: '15px' }}>{proj.desc}</p>
                <a href={proj.url} target="_blank" rel="noopener noreferrer" style={{ color: '#00f5ff', textDecoration: 'none' }}>Vedi progetto →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Open to Remote Opportunities Section */}
      <section id="opportunities" style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', color: '#00f5ff', marginBottom: '20px' }}>Open to remote opportunities</h2>
        <p style={{ color: '#cbd5e1', marginBottom: '26px' }}>
          Disponibile per opportunità remote in Marketing Automation, Digital Marketing, AI Automation, Lead Generation, Email Marketing e Frontend Design.
        </p>
        <a href="https://www.linkedin.com/in/andrea-fallavollita-454697178/" target="_blank" rel="noopener noreferrer" 
           style={{ 
             display: 'inline-block',
             padding: '12px 30px',
             background: '#00f5ff',
             color: '#020617',
             borderRadius: '999px',
             fontWeight: 'bold',
             textDecoration: 'none'
           }}>
          Contattami su LinkedIn
        </a>
      </section>

      <Footer />
    </div>
  )
}

export default Home