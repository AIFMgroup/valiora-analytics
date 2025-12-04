// Input sanitization module

export interface SanitizeResult {
  valid: boolean
  errors: string[]
  sanitized: any
}

export function validateAndSanitize(data: any): SanitizeResult {
  const errors: string[] = []
  
  if (!data || typeof data !== 'object') {
    return {
      valid: false,
      errors: ['Invalid input: expected object'],
      sanitized: null
    }
  }

  // Basic sanitization
  const sanitized: any = {}
  
  // String fields - trim and limit length
  const stringFields = [
    'companyName', 'industry', 'email', 'orgNumber', 'revenue',
    'profitMargin', 'companyAge', 'employees', 'revenue3Years',
    'customerBase', 'competitiveAdvantage', 'futureGrowth', 'challenges'
  ]

  for (const field of stringFields) {
    if (data[field] !== undefined) {
      if (typeof data[field] === 'string') {
        sanitized[field] = data[field].trim().slice(0, 1000)
      } else {
        sanitized[field] = String(data[field]).slice(0, 1000)
      }
    }
  }

  // Numeric fields
  const numericFields = [
    'exactRevenue', 'operatingCosts', 'totalDebt', 'cash',
    'accountsReceivable', 'inventory', 'accountsPayable'
  ]

  for (const field of numericFields) {
    if (data[field] !== undefined) {
      const num = Number(data[field])
      if (!isNaN(num)) {
        sanitized[field] = num
      }
    }
  }

  // Pass through other fields
  const passthroughFields = ['enrichedCompanyData']
  for (const field of passthroughFields) {
    if (data[field] !== undefined) {
      sanitized[field] = data[field]
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    sanitized
  }
}

export function sanitizeHtml(input: string): string {
  if (!input) return ''
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

