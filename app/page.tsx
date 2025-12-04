'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, 
  CheckCircle, 
  BarChart3, 
  Shield, 
  Zap,
  TrendingUp,
  Users,
  Building2,
  Clock,
  Star,
  ChevronRight,
  ExternalLink
} from 'lucide-react'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'owner' | 'buyer' | 'advisor'>('owner')

  const features = [
    {
      icon: BarChart3,
      title: '12 Nyckelområden',
      description: 'Komplett analys av alla kritiska aspekter som påverkar värde och försäljningsbarhet.'
    },
    {
      icon: Zap,
      title: '10 Minuter',
      description: 'Snabb och effektiv process designad för att spara tid utan att kompromissa med kvalitet.'
    },
    {
      icon: Shield,
      title: 'AI-Driven',
      description: 'Avancerad AI-analys ger objektiva insikter baserade på tusentals transaktioner.'
    },
    {
      icon: TrendingUp,
      title: 'Handlingsplan',
      description: 'Konkreta rekommendationer för att öka företagets värde och attraktionskraft.'
    }
  ]

  const stats = [
    { value: '2,500+', label: 'Analyser genomförda' },
    { value: '94%', label: 'Nöjda användare' },
    { value: '12', label: 'Analysområden' },
    { value: '10 min', label: 'Genomsnittlig tid' }
  ]

  const tabContent = {
    owner: {
      title: 'För företagsägare',
      subtitle: 'Se ditt företag med en köpares ögon',
      points: [
        'Objektiv bedömning av ditt företags styrkor och svagheter',
        'Identifiera värdeskapande åtgärder innan försäljning',
        'Förstå hur marknaden värderar din typ av verksamhet',
        'Strategisk planering för optimal exit-timing'
      ]
    },
    buyer: {
      title: 'För förvärvare',
      subtitle: 'Kvalificera targets snabbare',
      points: [
        'Snabb screening av potentiella förvärv',
        'Identifiera red flags tidigt i processen',
        'Strukturerad due diligence-förberedelse',
        'Bättre underlag för värderingsförhandlingar'
      ]
    },
    advisor: {
      title: 'För rådgivare',
      subtitle: 'Professionella verktyg för M&A',
      points: [
        'Strukturerad approach för alla typer av uppdrag',
        'Imponerande rapporter för dina kunder',
        'Tidseffektiv initial analys',
        'Stärkt kundrelation genom insiktsfull rådgivning'
      ]
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background effects */}
      <div className="hero-glow top-20 -left-20 opacity-50" />
      <div className="hero-glow bottom-20 right-0 opacity-30" />
      
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image 
              src="/Logo/Valiora_logo.png" 
              alt="Valiora Analytics" 
              width={140} 
              height={40}
              className="h-9 w-auto brightness-0 invert"
            />
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-white/60 hover:text-white transition-colors">Funktioner</a>
            <a href="#how-it-works" className="text-white/60 hover:text-white transition-colors">Så fungerar det</a>
            <a href="#pricing" className="text-white/60 hover:text-white transition-colors">Priser</a>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-white/60 hover:text-white transition-colors hidden sm:block">
              Logga in
            </button>
            <Link href="/sanity-check" className="btn-primary text-sm">
              Starta analys
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-12 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left column - Text */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d4aa]/10 border border-[#00d4aa]/20">
                <span className="w-2 h-2 rounded-full bg-[#00d4aa] animate-pulse" />
                <span className="text-sm text-[#00d4aa] font-medium">AI-driven företagsanalys</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Är ditt företag </span>
                <span className="text-gradient">redo för försäljning?</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white/60 max-w-xl leading-relaxed">
                Vår Sanity Check analyserar 12 kritiska områden och ger dig en 
                objektiv bild av ditt företags värde och försäljningsberedskap.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/sanity-check" 
                  className="btn-primary inline-flex items-center justify-center gap-2 text-base group"
                >
                  Starta gratis analys
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <button className="btn-secondary inline-flex items-center justify-center gap-2 text-base">
                  Se exempel
                </button>
              </div>
              
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00d4aa]/30 to-[#00b896]/20 border-2 border-[#0a0a0f] flex items-center justify-center"
                    >
                      <Users className="w-4 h-4 text-[#00d4aa]" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1 text-white">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-semibold">4.9</span>
                    <span className="text-white/40">/5</span>
                  </div>
                  <p className="text-white/40">Från 500+ recensioner</p>
                </div>
              </div>
            </div>

            {/* Right column - Hero Card (CTA) */}
            <div className="relative">
              <div className="hero-card shadow-pulse p-8 sm:p-10">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#00d4aa]/10 to-transparent rounded-tr-3xl" />
                
                <div className="relative space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#00d4aa]/10 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-[#00d4aa]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Sanity Check</h3>
                      <p className="text-sm text-white/50">Komplett företagsanalys</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-white/70 leading-relaxed">
                      Analysera ditt företags försäljningsberedskap genom 12 kritiska 
                      områden och få konkreta insikter på under 10 minuter.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        'Bolagsöversikt',
                        'Ägarberoende',
                        'Intäktsmodell',
                        'Lönsamhet',
                        'Kundbas',
                        'Team',
                        'Processer',
                        'Risk & compliance'
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#00d4aa] flex-shrink-0" />
                          <span className="text-sm text-white/60">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <Link
                      href="/sanity-check"
                      className="w-full btn-primary inline-flex items-center justify-center gap-3 py-4 text-base group"
                    >
                      <span>Starta din analys nu</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    
                    <div className="flex items-center justify-center gap-4 mt-4 text-sm text-white/40">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>~10 min</span>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-white/20" />
                      <span>Gratis att starta</span>
                      <div className="w-1 h-1 rounded-full bg-white/20" />
                      <span>Ingen registrering</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -left-4 top-1/4 animate-float delay-200">
                <div className="glass-strong rounded-xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#00d4aa]/20 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-[#00d4aa]" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50">Genomsnittlig tid</p>
                      <p className="text-sm font-semibold text-white">10 minuter</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-4 bottom-1/4 animate-float delay-500">
                <div className="glass-strong rounded-xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#00d4aa]/20 flex items-center justify-center">
                      <Shield className="w-4 h-4 text-[#00d4aa]" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50">AI-driven</p>
                      <p className="text-sm font-semibold text-white">Objektiv analys</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="stat-card text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Komplett analys på <span className="text-gradient">10 minuter</span>
            </h2>
            <p className="text-lg text-white/60">
              Vår Sanity Check täcker alla kritiska områden som påverkar 
              ditt företags attraktionskraft för potentiella köpare.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="card-glow p-6 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#00d4aa]/10 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                  <feature.icon className="w-6 h-6 text-[#00d4aa]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Section - Who is it for */}
      <section id="how-it-works" className="relative z-10 px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Vem är det för?
            </h2>
            <p className="text-lg text-white/60">
              Vårt verktyg är designat för att stödja alla parter i en transaktion.
            </p>
          </div>
          
          {/* Tabs */}
          <div className="flex justify-center mb-10">
            <div className="tab-group">
              <button 
                onClick={() => setActiveTab('owner')}
                className={`tab-item ${activeTab === 'owner' ? 'active' : ''}`}
              >
                Företagsägare
              </button>
              <button 
                onClick={() => setActiveTab('buyer')}
                className={`tab-item ${activeTab === 'buyer' ? 'active' : ''}`}
              >
                Förvärvare
              </button>
              <button 
                onClick={() => setActiveTab('advisor')}
                className={`tab-item ${activeTab === 'advisor' ? 'active' : ''}`}
              >
                Rådgivare
              </button>
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="card-glow shadow-pulse-slow p-8 sm:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {tabContent[activeTab].title}
                  </h3>
                  <p className="text-lg text-[#00d4aa]">
                    {tabContent[activeTab].subtitle}
                  </p>
                </div>
                
                <ul className="space-y-4">
                  {tabContent[activeTab].points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="w-6 h-6 rounded-full bg-[#00d4aa]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-[#00d4aa]" />
                      </div>
                      <span className="text-white/70">{point}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/sanity-check"
                  className="inline-flex items-center gap-2 text-[#00d4aa] font-medium hover:gap-3 transition-all group"
                >
                  Kom igång nu
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#00d4aa]/10 to-transparent flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-[#00d4aa]/10 flex items-center justify-center animate-pulse">
                    {activeTab === 'owner' && <Building2 className="w-16 h-16 text-[#00d4aa]" />}
                    {activeTab === 'buyer' && <TrendingUp className="w-16 h-16 text-[#00d4aa]" />}
                    {activeTab === 'advisor' && <Users className="w-16 h-16 text-[#00d4aa]" />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Pactior Group Section */}
      <section className="relative z-10 px-6 py-24 bg-gradient-to-b from-transparent to-[#0d0d14]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#00d4aa] text-sm font-medium mb-3">En del av Pactior Group</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Teknologi kombinerat med <span className="text-gradient">mänsklig expertis</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Valiora Analytics är en del av Pactior Group - finansiella lösningar 
              för framtidens företagare. Vi tror på att förenkla vardagen för de som bygger Sverige.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { title: 'Integritet', desc: 'Vi agerar alltid i våra kunders bästa intresse' },
              { title: 'Expertis', desc: 'Djup kunskap inom varje specialområde' },
              { title: 'Innovation', desc: 'Moderna verktyg för bättre resultat' },
              { title: 'Transparens', desc: 'Tydlig kommunikation genom hela processen' }
            ].map((value) => (
              <div key={value.title} className="glass rounded-xl p-5 text-center">
                <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-white/50">{value.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href="https://pactior-production.up.railway.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#00d4aa] hover:text-[#00e8b8] transition-colors group"
            >
              <span className="font-medium">Läs mer om Pactior Group</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-glow shadow-pulse p-10 sm:p-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Redo att analysera ditt företag?
            </h2>
            <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto">
              Få en objektiv bild av ditt företags försäljningsberedskap 
              och konkreta rekommendationer på under 10 minuter.
            </p>
            <Link 
              href="/sanity-check"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4 group"
            >
              Starta gratis analys
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="text-sm text-white/40 mt-4">
              Ingen registrering krävs • Resultat på 10 minuter
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-16 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            {/* Brand & Description */}
            <div className="md:col-span-2 space-y-4">
              <Image 
                src="/Logo/Valiora_logo.png" 
                alt="Valiora Analytics" 
                width={120} 
                height={36}
                className="h-8 w-auto brightness-0 invert"
              />
              <p className="text-white/50 text-sm leading-relaxed max-w-md">
                Valiora Analytics erbjuder professionella företagsvärderingar med hjälp av 
                avancerad dataanalys och branschexpertis. Få en rättvis och transparent 
                värdering av ditt företag.
              </p>
              <div className="pt-2">
                <p className="text-xs text-white/30 mb-2">En del av</p>
                <a 
                  href="https://pactior-production.up.railway.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#00d4aa] hover:text-[#00e8b8] transition-colors group"
                >
                  <span className="font-semibold">Pactior Group</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-sm text-white/50 hover:text-white/80 transition-colors">
                    Funktioner
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-sm text-white/50 hover:text-white/80 transition-colors">
                    Så fungerar det
                  </a>
                </li>
                <li>
                  <Link href="/sanity-check" className="text-sm text-white/50 hover:text-white/80 transition-colors">
                    Starta analys
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Pactior Group */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white">Pactior Group</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://pactior-production.up.railway.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 hover:text-white/80 transition-colors"
                  >
                    Om Pactior Group
                  </a>
                </li>
                <li>
                  <a 
                    href="https://pactior-production.up.railway.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 hover:text-white/80 transition-colors"
                  >
                    Trestor Partners
                  </a>
                </li>
                <li>
                  <a 
                    href="https://pactior-production.up.railway.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 hover:text-white/80 transition-colors"
                  >
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30">
              © 2025 Valiora Analytics. En del av Pactior Group AB. Alla rättigheter förbehållna.
            </p>
            <div className="flex items-center gap-6 text-xs text-white/30">
              <a href="#" className="hover:text-white/50 transition-colors">Integritetspolicy</a>
              <a href="#" className="hover:text-white/50 transition-colors">Villkor</a>
              <a href="#" className="hover:text-white/50 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

