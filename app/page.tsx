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
  ExternalLink,
  FileText,
  Target
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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Image 
                src="/Logo/Valiora_logo.png" 
                alt="Valiora Analytics" 
                width={140} 
                height={40}
                className="h-8 w-auto"
              />
              <div className="hidden md:flex items-center gap-6">
                <a href="#features" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                  Funktioner
                </a>
                <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                  Så fungerar det
                </a>
                <a href="#about" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                  Om oss
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="btn-ghost hidden sm:flex">
                Logga in
              </button>
              <Link href="/sanity-check" className="btn-primary">
                Starta analys
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-teal-100/50 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-slate-100 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left column - Text */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-200">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse-subtle" />
                <span className="text-sm text-teal-700 font-medium">AI-driven företagsanalys</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                Är ditt företag{' '}
                <span className="text-gradient">redo för försäljning?</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-600 max-w-xl leading-relaxed">
                Vår Sanity Check analyserar 12 kritiska områden och ger dig en 
                objektiv bild av ditt företags värde och försäljningsberedskap.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/sanity-check" 
                  className="btn-primary text-base px-8 py-4"
                >
                  Starta gratis analys
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="btn-secondary text-base px-8 py-4">
                  Se exempel
                </button>
              </div>
              
              {/* Social proof */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 border-2 border-white flex items-center justify-center text-white text-sm font-medium"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1 text-slate-900">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="font-semibold">4.9</span>
                    <span className="text-slate-400">/5</span>
                  </div>
                  <p className="text-slate-500">Från 500+ recensioner</p>
                </div>
              </div>
            </div>

            {/* Right column - Card */}
            <div className="relative">
              <div className="card-hover p-8 animate-fade-in-up">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/30">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Sanity Check</h3>
                    <p className="text-slate-500">Komplett företagsanalys</p>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-slate-600 mb-6">
                  Analysera ditt företags försäljningsberedskap genom 12 kritiska 
                  områden och få konkreta insikter på under 10 minuter.
                </p>
                
                {/* Checklist */}
                <div className="grid grid-cols-2 gap-3 mb-8">
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
                      <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA */}
                <Link
                  href="/sanity-check"
                  className="btn-primary w-full justify-center py-4 text-base"
                >
                  Starta din analys nu
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                {/* Meta */}
                <div className="flex items-center justify-center gap-4 mt-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>~10 min</span>
                  </div>
                  <span>•</span>
                  <span>Gratis</span>
                  <span>•</span>
                  <span>Ingen registrering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Komplett analys på <span className="text-gradient">10 minuter</span>
            </h2>
            <p className="text-lg text-slate-600">
              Vår Sanity Check täcker alla kritiska områden som påverkar 
              ditt företags attraktionskraft för potentiella köpare.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="card-hover p-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Section */}
      <section id="how-it-works" className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Vem är det för?
            </h2>
            <p className="text-lg text-slate-600">
              Vårt verktyg är designat för att stödja alla parter i en transaktion.
            </p>
          </div>
          
          {/* Tabs */}
          <div className="flex justify-center mb-10">
            <div className="tab-list">
              {[
                { key: 'owner', label: 'Företagsägare' },
                { key: 'buyer', label: 'Förvärvare' },
                { key: 'advisor', label: 'Rådgivare' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as typeof activeTab)}
                  className={activeTab === tab.key ? 'tab-active' : 'tab'}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="card p-8 sm:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {tabContent[activeTab].title}
                  </h3>
                  <p className="text-lg text-teal-600">
                    {tabContent[activeTab].subtitle}
                  </p>
                </div>
                
                <ul className="space-y-4">
                  {tabContent[activeTab].points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-teal-600" />
                      </div>
                      <span className="text-slate-600">{point}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/sanity-check"
                  className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700 transition-colors group"
                >
                  Kom igång nu
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-teal-50 to-slate-50 flex items-center justify-center border border-slate-200">
                  <div className="w-24 h-24 rounded-full bg-teal-100 flex items-center justify-center">
                    {activeTab === 'owner' && <Building2 className="w-12 h-12 text-teal-600" />}
                    {activeTab === 'buyer' && <TrendingUp className="w-12 h-12 text-teal-600" />}
                    {activeTab === 'advisor' && <Users className="w-12 h-12 text-teal-600" />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Pactior Section */}
      <section id="about" className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-teal-600 text-sm font-medium mb-3">En del av Pactior Group</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Teknologi kombinerat med{' '}
              <span className="text-gradient">mänsklig expertis</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
              <div key={value.title} className="card p-6 text-center">
                <h3 className="font-semibold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-sm text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href="https://pactior-production.up.railway.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium transition-colors group"
            >
              Läs mer om Pactior Group
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Redo att analysera ditt företag?
          </h2>
          <p className="text-lg text-teal-100 mb-8 max-w-xl mx-auto">
            Få en objektiv bild av ditt företags försäljningsberedskap 
            och konkreta rekommendationer på under 10 minuter.
          </p>
          <Link 
            href="/sanity-check"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-700 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            Starta gratis analys
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-sm text-teal-200 mt-4">
            Ingen registrering krävs • Resultat på 10 minuter
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-2 space-y-4">
              <Image 
                src="/Logo/Valiora_logo.png" 
                alt="Valiora Analytics" 
                width={120} 
                height={36}
                className="h-8 w-auto brightness-0 invert"
              />
              <p className="text-slate-400 text-sm max-w-md">
                Valiora Analytics erbjuder professionella företagsvärderingar med hjälp av 
                avancerad dataanalys och branschexpertis.
              </p>
              <div className="pt-2">
                <p className="text-xs text-slate-500 mb-1">En del av</p>
                <a 
                  href="https://pactior-production.up.railway.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 font-medium transition-colors"
                >
                  Pactior Group
                </a>
              </div>
            </div>
            
            {/* Navigation */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-sm text-slate-400 hover:text-white transition-colors">Funktioner</a></li>
                <li><a href="#how-it-works" className="text-sm text-slate-400 hover:text-white transition-colors">Så fungerar det</a></li>
                <li><Link href="/sanity-check" className="text-sm text-slate-400 hover:text-white transition-colors">Starta analys</Link></li>
              </ul>
            </div>
            
            {/* Pactior */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Pactior Group</h4>
              <ul className="space-y-2">
                <li><a href="https://pactior-production.up.railway.app" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">Om Pactior Group</a></li>
                <li><a href="https://pactior-production.up.railway.app" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">Trestor Partners</a></li>
                <li><a href="https://pactior-production.up.railway.app" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">Kontakt</a></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom */}
          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              © 2025 Valiora Analytics. En del av Pactior Group AB.
            </p>
            <div className="flex items-center gap-6 text-xs text-slate-500">
              <a href="#" className="hover:text-slate-300 transition-colors">Integritetspolicy</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Villkor</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
