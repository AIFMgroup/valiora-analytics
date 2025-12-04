'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Shield } from 'lucide-react'
import SanitycheckWizard from '@/components/SanitycheckWizard'

export default function SanityCheckPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link 
                href="/"
                className="flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span className="text-sm font-medium">Tillbaka</span>
              </Link>
              
              <div className="h-5 w-px bg-slate-200" />
              
              <Image 
                src="/Logo/Valiora_logo.png" 
                alt="Valiora Analytics" 
                width={100} 
                height={28}
                className="h-6 w-auto"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 text-sm text-slate-500">
                <Clock className="w-4 h-4" />
                <span>~10 min</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-sm text-slate-500">
                <Shield className="w-4 h-4" />
                <span>Konfidentiellt</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="py-8">
        <SanitycheckWizard />
      </main>
    </div>
  )
}
