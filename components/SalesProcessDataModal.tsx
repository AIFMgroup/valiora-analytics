'use client'

import { X } from 'lucide-react'

export interface ScrapedData {
  title?: string
  description?: string
  [key: string]: unknown
}

export interface FinancialDocs {
  revenueByYear?: {
    year1?: string
    year2?: string
    year3?: string
  }
  profitByYear?: {
    year1?: string
    year2?: string
    year3?: string
  }
  [key: string]: unknown
}

export interface IndustryData {
  label?: string
  value?: string
}

export interface CompanyData {
  companyName?: string
  orgNumber?: string
  industry?: string | IndustryData
  revenue?: number
  ebitda?: number
  employees?: number
  foundedYear?: number
  description?: string
  website?: string
  location?: string
  ownerDependency?: string
  customerConcentration?: string
  recurringRevenue?: number
  growthRate?: number
  profitMargin?: number
  scrapedData?: ScrapedData
  financialDocs?: FinancialDocs & Record<string, unknown>
  legalDocs?: Record<string, unknown>
  keyPerson?: Record<string, unknown>
  ownershipStructure?: Record<string, unknown>
  organizationalInfo?: Record<string, unknown>
  marketPosition?: Record<string, unknown>
  customerBase?: Record<string, unknown>
  revenueModel?: Record<string, unknown>
  competitiveAdvantages?: Record<string, unknown>
  businessRisks?: Record<string, unknown>
  strategicOptions?: Record<string, unknown>
  exitReadiness?: Record<string, unknown>
  generatedSummaries?: Record<string, unknown>
  businessRelations?: Record<string, unknown>
  balanceSheet?: Record<string, unknown>
  [key: string]: unknown
}

interface SalesProcessDataModalProps {
  isOpen: boolean
  onClose: () => void
  data: CompanyData | null
  onSave?: (data: CompanyData) => void
}

export default function SalesProcessDataModal({
  isOpen,
  onClose,
  data,
  onSave
}: SalesProcessDataModalProps) {
  if (!isOpen) return null

  const formatCurrency = (value: number | undefined) => {
    if (!value) return 'N/A'
    return new Intl.NumberFormat('sv-SE', {
      style: 'currency',
      currency: 'SEK',
      maximumFractionDigits: 0,
    }).format(value)
  }

  const formatPercent = (value: number | undefined) => {
    if (value === undefined) return 'N/A'
    return `${value.toFixed(1)}%`
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Företagsdata</h2>
            {data?.companyName && (
              <p className="text-sm text-slate-500">{data.companyName}</p>
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
          {data ? (
            <div className="grid grid-cols-2 gap-6">
              {/* Basic Info */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                  Grunduppgifter
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-slate-500">Företagsnamn</p>
                    <p className="text-sm font-medium text-slate-900">
                      {data.companyName || 'N/A'}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Org.nummer</p>
                    <p className="text-sm font-medium text-slate-900">
                      {data.orgNumber || 'N/A'}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Bransch</p>
                    <p className="text-sm font-medium text-slate-900">
                      {typeof data.industry === 'string' 
                        ? data.industry 
                        : data.industry?.label || 'N/A'}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Plats</p>
                    <p className="text-sm font-medium text-slate-900">
                      {data.location || 'N/A'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Financial Info */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                  Finansiell data
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-slate-500">Omsättning</p>
                    <p className="text-sm font-medium text-slate-900">
                      {formatCurrency(data.revenue)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">EBITDA</p>
                    <p className="text-sm font-medium text-slate-900">
                      {formatCurrency(data.ebitda)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Vinstmarginal</p>
                    <p className="text-sm font-medium text-slate-900">
                      {formatPercent(data.profitMargin)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Tillväxttakt</p>
                    <p className="text-sm font-medium text-slate-900">
                      {formatPercent(data.growthRate)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Operational Info */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                  Operativ data
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-slate-500">Anställda</p>
                    <p className="text-sm font-medium text-slate-900">
                      {data.employees || 'N/A'}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Grundat år</p>
                    <p className="text-sm font-medium text-slate-900">
                      {data.foundedYear || 'N/A'}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Återkommande intäkter</p>
                    <p className="text-sm font-medium text-slate-900">
                      {formatPercent(data.recurringRevenue)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Risk Factors */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                  Riskfaktorer
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-slate-500">Ägarberoende</p>
                    <p className="text-sm font-medium text-slate-900">
                      {data.ownerDependency || 'N/A'}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Kundkoncentration</p>
                    <p className="text-sm font-medium text-slate-900">
                      {data.customerConcentration || 'N/A'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center text-slate-500 py-8">
              Ingen data tillgänglig
            </p>
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
          {onSave && (
            <button 
              onClick={() => data && onSave(data)}
              className="px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Spara ändringar
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

