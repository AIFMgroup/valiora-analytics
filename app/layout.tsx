import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from '@/contexts/AuthContext'

export const metadata: Metadata = {
  title: 'Valiora Analytics | Företagsvärdering & Försäljningsberedskap',
  description: 'Få en professionell analys av ditt företags värde och försäljningsberedskap. AI-driven sanity check på 10 minuter. En del av Pactior Group.',
  keywords: 'företagsvärdering, värdering, försäljning, M&A, due diligence, sanity check, Pactior Group',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body className="antialiased">
        <AuthProvider>
          <div className="min-h-screen bg-white">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}

