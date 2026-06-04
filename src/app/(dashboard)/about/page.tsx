import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About MAPA — MAPA CRM',
}

const WHATSAPP_URL = `https://wa.me/919677608001?text=${encodeURIComponent('Hi MAPA! I am interested in your digital services.')}`

const services = [
  { icon: '📣', title: 'Digital Marketing', desc: 'SEO, social media marketing, paid ads, and content strategy to grow your brand online and generate leads.', bg: '#0d2137', border: '#2563eb', color: '#60a5fa' },
  { icon: '⚙️', title: 'Automation', desc: 'n8n workflows, WhatsApp automation, CRM integrations, and end-to-end business process automation.', bg: '#0d2118', border: '#16a34a', color: '#4ade80' },
  { icon: '🌐', title: 'Web Development', desc: 'Custom websites, landing pages, and web applications built for speed, SEO, and high conversion.', bg: '#1a1040', border: '#7c3aed', color: '#a78bfa' },
  { icon: '📱', title: 'App Development', desc: 'Mobile apps for Android and iOS tailored to your business needs and customer experience.', bg: '#0d1f37', border: '#0ea5e9', color: '#38bdf8' },
  { icon: '💬', title: 'WhatsApp CRM', desc: 'Full WhatsApp CRM setup, multi-agent inbox, broadcast campaigns, and pipeline management.', bg: '#0a2018', border: '#22c55e', color: '#86efac' },
  { icon: '📊', title: 'Analytics & Reporting', desc: 'Custom dashboards, sales reports, and data insights to help you make better business decisions.', bg: '#271a00', border: '#f59e0b', color: '#fbbf24' },
]

const stats = [
  { label: 'Projects Delivered', value: '50+', color: '#3b82f6', bg: '#0d2137', border: '#2563eb' },
  { label: 'Happy Clients',      value: '30+', color: '#22c55e', bg: '#0d2118', border: '#16a34a' },
  { label: 'Years Experience',   value: '5+',  color: '#a855f7', bg: '#1a1040', border: '#7c3aed' },
  { label: 'Support',            value: '24/7',color: '#f59e0b', bg: '#271a00', border: '#f59e0b' },
]

export default function AboutPage() {
  return (
    <div className="p-6 space-y-5">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">About MAPA</h1>
        <p className="text-sm text-muted-foreground mt-1">
          MAPA Digital Services — We help businesses grow with smart digital solutions.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl p-5" style={{ background: s.bg, border: `1px solid ${s.border}60` }}>
            <p className="text-xs mb-2" style={{ color: s.color + 'aa' }}>{s.label}</p>
            <p className="text-3xl font-bold" style={{ color: s.color }}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Services */}
      <div className="rounded-xl overflow-hidden" style={{ border: '1px solid #ffffff15', background: '#0e1726' }}>
        <div className="px-5 py-4" style={{ borderBottom: '1px solid #ffffff15' }}>
          <h2 className="text-sm font-semibold text-white">Our Services</h2>
          <p className="text-xs text-muted-foreground mt-0.5">Everything you need to grow your business digitally</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="p-5 space-y-3 transition-all hover:brightness-110"
              style={{
                background: s.bg,
                borderRight: (i % 3 !== 2) ? `1px solid #ffffff10` : 'none',
                borderBottom: (i < 3) ? `1px solid #ffffff10` : 'none',
              }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl" style={{ background: s.color + '20', border: `1px solid ${s.border}50` }}>
                {s.icon}
              </div>
              <div>
                <p className="text-sm font-semibold mb-1" style={{ color: s.color }}>{s.title}</p>
                <p className="text-xs leading-relaxed" style={{ color: '#94a3b8' }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="rounded-xl overflow-hidden" style={{ background: '#0d1f37', border: '1px solid #2563eb50' }}>
        <div className="px-5 py-4" style={{ borderBottom: '1px solid #2563eb30', background: '#0d2547' }}>
          <h2 className="text-sm font-semibold" style={{ color: '#93c5fd' }}>Contact Us</h2>
          <p className="text-xs mt-0.5" style={{ color: '#64748b' }}>Reach out anytime — we respond fast</p>
        </div>
        <div className="p-5 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-4 rounded-xl px-4 py-4" style={{ background: '#0d2547', border: '1px solid #2563eb40' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0" style={{ background: '#1d4ed820' }}>📞</div>
              <div>
                <p className="text-xs" style={{ color: '#64748b' }}>Phone</p>
                <a href="tel:+919677608001" className="text-sm font-semibold hover:underline" style={{ color: '#60a5fa' }}>
                  +91 96776 08001
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl px-4 py-4" style={{ background: '#0a2018', border: '1px solid #22c55e40' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0" style={{ background: '#16a34a20' }}>💬</div>
              <div>
                <p className="text-xs" style={{ color: '#64748b' }}>WhatsApp</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:underline" style={{ color: '#4ade80' }}>
                  +91 96776 08001
                </a>
              </div>
            </div>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full rounded-xl text-white text-sm font-semibold py-3 px-4 transition-all hover:opacity-90 active:scale-95"
            style={{ background: 'linear-gradient(135deg, #15803d, #16a34a, #22c55e)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat with us on WhatsApp
          </a>
        </div>
      </div>

      <p className="text-xs pb-2" style={{ color: '#475569' }}>
        MAPA CRM v1.0 · Built &amp; powered by MAPA Digital Services
      </p>

    </div>
  )
}
