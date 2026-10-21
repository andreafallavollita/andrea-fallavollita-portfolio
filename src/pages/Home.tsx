import React from 'react'
import { BarChart3, Workflow, LayoutTemplate, PawPrint, type LucideIcon } from 'lucide-react'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

const competences = [
  "Digital Marketing", "AI Automations", "SEO", "Email Marketing", "Prompt Engineering",
  "Lead Generation", "WordPress Development", "B2B Strategy", "Marketing Automation", "Content Marketing"
]

type Project = {
  title: string
  desc: string
  tags: string[]
  category: string
  icon: LucideIcon
  url: string
}

const projects: Project[] = [
  {
    title: "Dynamica Dashboard",
    desc: "Dashboard per monitorare campagne, spesa pubblicitaria e lead. Integra dati da Google Ads, Meta Ads e CRM, con filtri per periodo, KPI ed esportazioni CSV ed Excel.",
    tags: ["Python", "Streamlit", "API Ads", "Reporting"],
    category: "Marketing analytics",
    icon: BarChart3,
    url: "https://github.com/andreafallavollita5-cmyk/dynamica-dashboard"
  },
  {
    title: "Agente Lead",
    desc: "Pipeline Python per raccogliere, aggregare e validare dati lead e generare report per destinatario. Il repository pubblico presenta una versione dimostrativa con dati sintetici e invii esterni disattivati per impostazione predefinita.",
    tags: ["Python", "Automazione", "Validazione dati", "Lead reporting"],
    category: "Workflow automation",
    icon: Workflow,
    url: "https://github.com/andreafallavollita5-cmyk/agente-lead"
  },
  {
    title: "TIG Performance",
    desc: "Frontend responsive per presentare soluzioni AI dedicate al performance marketing. Include una hero con video, sezioni servizi, contenuti video e un modulo di richiesta informazioni.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive design"],
    category: "Web development",
    icon: LayoutTemplate,
    url: "https://github.com/andreafallavollita5-cmyk/versione-2-tig-performance"
  },
  {
    title: "HappyTails",
    desc: "App per la ricerca e l’adozione di animali, sviluppata con React Native ed Expo. Comprende onboarding, ricerca, schede di animali e rifugi, preferiti e chat, con integrazione Supabase.",
    tags: ["React Native", "Expo", "TypeScript", "Supabase"],
    category: "App development",
    icon: PawPrint,
    url: "https://github.com/andreafallavollita5-cmyk/happytails-app"
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
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" style={{ padding: '80px 20px' }}>
        <h2 style={{ fontSize: '36px', color: '#00f5ff', textAlign: 'center', marginBottom: '40px' }}>Progetti principali</h2>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '24px' 
        }}>
          {projects.map((proj) => {
            const Icon = proj.icon
            return (
              <article key={proj.url} style={{
                background: '#111',
                border: '1px solid rgba(34, 211, 238, 0.2)',
                borderRadius: '16px',
                overflow: 'hidden',
                minWidth: 0,
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div aria-hidden="true" style={{
                  minHeight: '170px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '24px',
                  background: 'linear-gradient(135deg, #082f49, #020617)',
                  color: '#67e8f9'
                }}>
                  <Icon size={48} strokeWidth={1.5} />
                  <span style={{ fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{proj.category}</span>
                </div>
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ color: '#00f5ff', marginBottom: '10px' }}>{proj.title}</h3>
                  <p style={{ color: '#cbd5e1', lineHeight: '1.7', marginBottom: '20px' }}>{proj.desc}</p>
                  <ul aria-label={`Tecnologie e competenze: ${proj.title}`} style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', listStyle: 'none', padding: 0, margin: '0 0 24px' }}>
                    {proj.tags.map((tag) => (
                      <li key={tag} style={{ padding: '5px 10px', borderRadius: '999px', background: '#082f49', color: '#a5f3fc', fontSize: '12px' }}>{tag}</li>
                    ))}
                  </ul>
                  <a href={proj.url} target="_blank" rel="noopener noreferrer" aria-label={`Codice su GitHub: ${proj.title} (si apre in una nuova scheda)`} style={{ color: '#00f5ff', textDecoration: 'underline', textUnderlineOffset: '4px', marginTop: 'auto', padding: '8px 0', alignSelf: 'flex-start' }}>Codice su GitHub →</a>
                </div>
              </article>
            )
          })}
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
