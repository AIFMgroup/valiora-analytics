'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Loader2 } from 'lucide-react'
import SanitycheckWizard from '@/components/SanitycheckWizard'

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-[#00d4aa]/10 flex items-center justify-center animate-pulse">
          <Loader2 className="w-8 h-8 text-[#00d4aa] animate-spin" />
        </div>
        <p className="text-white/50 text-sm">Laddar analysverktyget...</p>
      </div>
    </div>
  )
}

export default function SanityCheckPage() {
  return (
    <div className="min-h-screen relative bg-white">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-500/3 rounded-full blur-[100px]" />
      </div>
      
      {/* Header */}
      <header className="relative z-10 px-6 py-4 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              href="/"
              className="flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="text-sm">Tillbaka</span>
            </Link>
            
            <div className="h-4 w-px bg-slate-200" />
            
            <div className="flex items-center gap-2">
              <Image 
                src="/Logo/Valiora_logo.png" 
                alt="Valiora Analytics" 
                width={100} 
                height={28}
                className="h-6 w-auto"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200">
              <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span className="text-xs text-slate-500">Sparas automatiskt</span>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="relative z-10">
        <Suspense fallback={<LoadingSpinner />}>
          <SanitycheckWizard />
        </Suspense>
      </main>
    </div>
  )
}

