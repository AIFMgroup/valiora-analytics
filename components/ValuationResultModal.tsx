'use client'

import { useState } from 'react'
import { X, Download, Share2, TrendingUp, TrendingDown, Minus } from 'lucide-react'

interface ValuationResult {
  companyName?: string
  valuationLow?: number
  valuationMid?: number
  valuationHigh?: number
  multipleLow?: number
  multipleMid?: number
  multipleHigh?: number
  score?: number
  factors?: {
    name: string
    impact: 'positive' | 'negative' | 'neutral'
    description: string
  }[]
}

interface ValuationResultModalProps {
  isOpen: boolean
  onClose: () => void
  result: ValuationResult | null
}

export default function ValuationResultModal({ 
  isOpen, 
  onClose, 
  result 
}: ValuationResultModalProps) {
  if (!isOpen || !result) return null

  const formatCurrency = (value: number | undefined) => {
    if (!value) return 'N/A'
    return new Intl.NumberFormat('sv-SE', {
      style: 'currency',
      currency: 'SEK',
      maximumFractionDigits: 0,
    }).format(value)
  }

  const getImpactIcon = (impact: 'positive' | 'negative' | 'neutral') => {
    switch (impact) {
      case 'positive':
        return <TrendingUp className="w-4 h-4 text-green-500" />
      case 'negative':
        return <TrendingDown className="w-4 h-4 text-red-500" />
      default:
        return <Minus className="w-4 h-4 text-slate-400" />
    }
  }

  const getScoreColor = (score: number | undefined) => {
    if (!score) return 'text-slate-500'
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Värderingsresultat</h2>
            {result.companyName && (
              <p className="text-sm text-slate-500">{result.companyName}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
          {/* Valuation Range */}
          <div className="bg-gradient-to-br from-teal-50 to-slate-50 rounded-xl p-6 mb-6">
            <h3 className="text-sm font-medium text-slate-600 mb-4">Indikativ värdering</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xs text-slate-500 mb-1">Låg</p>
                <p className="text-lg font-bold text-slate-700">
                  {formatCurrency(result.valuationLow)}
                </p>
                {result.multipleLow && (
                  <p className="text-xs text-slate-400">{result.multipleLow.toFixed(1)}x</p>
                )}
              </div>
              <div className="border-x border-slate-200">
                <p className="text-xs text-slate-500 mb-1">Medel</p>
                <p className="text-2xl font-bold text-teal-600">
                  {formatCurrency(result.valuationMid)}
                </p>
                {result.multipleMid && (
                  <p className="text-xs text-teal-500">{result.multipleMid.toFixed(1)}x</p>
                )}
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Hög</p>
                <p className="text-lg font-bold text-slate-700">
                  {formatCurrency(result.valuationHigh)}
                </p>
                {result.multipleHigh && (
                  <p className="text-xs text-slate-400">{result.multipleHigh.toFixed(1)}x</p>
                )}
              </div>
            </div>
          </div>

          {/* Score */}
          {result.score !== undefined && (
            <div className="bg-slate-50 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-slate-600">Försäljningsberedskap</h3>
                <span className={`text-2xl font-bold ${getScoreColor(result.score)}`}>
                  {result.score}/100
                </span>
              </div>
              <div className="mt-3 h-2 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-teal-500 to-teal-600 rounded-full transition-all duration-500"
                  style={{ width: `${result.score}%` }}
                />
              </div>
            </div>
          )}

          {/* Factors */}
          {result.factors && result.factors.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-slate-600 mb-3">Påverkande faktorer</h3>
              <div className="space-y-2">
                {result.factors.map((factor, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg"
                  >
                    {getImpactIcon(factor.impact)}
                    <div>
                      <p className="text-sm font-medium text-slate-700">{factor.name}</p>
                      <p className="text-xs text-slate-500">{factor.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-slate-200 bg-slate-50">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors"
          >
            Stäng
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors">
            <Download className="w-4 h-4" />
            Ladda ner rapport
          </button>
        </div>
      </div>
    </div>
  )
}

