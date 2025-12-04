'use client'

import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'

interface StickyBottomNavProps {
  onBack?: () => void
  onNext?: () => void
  onSubmit?: () => void
  backLabel?: string
  nextLabel?: string
  submitLabel?: string
  isFirstStep?: boolean
  isLastStep?: boolean
  isLoading?: boolean
  disabled?: boolean
  showBackButton?: boolean
  lastSaved?: Date | null
  nextDisabled?: boolean
}

export default function StickyBottomNav({
  onBack,
  onNext,
  onSubmit,
  backLabel = 'Tillbaka',
  nextLabel = 'Nästa',
  submitLabel = 'Skicka in',
  isFirstStep = false,
  isLastStep = false,
  isLoading = false,
  disabled = false,
  showBackButton = true,
  lastSaved,
  nextDisabled = false
}: StickyBottomNavProps) {
  const isDisabled = disabled || nextDisabled
  return (
    <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-4 z-10">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Back button */}
        <div>
          {showBackButton && !isFirstStep && onBack && (
            <button
              onClick={onBack}
              disabled={isLoading}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4" />
              {backLabel}
            </button>
          )}
        </div>

        {/* Next/Submit button */}
        <div className="flex items-center gap-4">
          {lastSaved && (
            <span className="text-xs text-slate-400">
              Sparad {lastSaved.toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' })}
            </span>
          )}
          {isLastStep ? (
            <button
              onClick={onSubmit}
              disabled={isLoading || isDisabled}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Bearbetar...
                </>
              ) : (
                <>
                  {submitLabel}
                </>
              )}
            </button>
          ) : (
            <button
              onClick={onNext}
              disabled={isLoading || isDisabled}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {nextLabel}
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

