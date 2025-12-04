# Valiora Analytics

**Professionell företagsanalys och försäljningsberedskap**

En modern fintech-applikation för att analysera företags försäljningsberedskap genom en 12-stegs Sanity Check.

> **En del av [Pactior Group](https://pactior-production.up.railway.app)** - finansiella lösningar för framtidens företagare. Vi kombinerar teknologi med mänsklig expertis för att förenkla vardagen för de som bygger Sverige.

---

## 🚀 Snabbstart

### 1. Installera dependencies

```bash
npm install
```

### 2. Konfigurera miljövariabler

Skapa en `.env`-fil i projektets rot:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/valiora?schema=public"
OPENAI_API_KEY="sk-..."
JWT_SECRET="your-super-secret-jwt-key-here"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

### 3. Sätt upp databasen

```bash
npx prisma generate
npx prisma db push
```

### 4. Starta utvecklingsservern

```bash
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000) i din webbläsare.

---

## 📁 Projektstruktur

```
valiora-essential/
├── app/                     # Next.js App Router
│   ├── globals.css          # Fintech design system
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Startsida med Hero
│   ├── sanity-check/        # Sanity Check wizard
│   │   └── page.tsx
│   └── api/                 # API routes
│       ├── analyze-company/ # AI-analys
│       └── valuation/       # Värderingslogik
│
├── components/              # React-komponenter
│   ├── SanitycheckWizard.tsx    # Huvudwizard (12 steg)
│   ├── Toast.tsx                # Notifikationer
│   ├── Form*.tsx                # Formulärkomponenter
│   └── *PDF.tsx                 # PDF-generering
│
├── contexts/                # React Context
│   ├── AuthContext.tsx      # Autentisering
│   └── ToastContext.tsx     # Toast-notifikationer
│
├── lib/                     # Affärslogik
│   ├── valuation-helpers.ts # Värderingsberäkningar
│   ├── valuation-rules.ts   # Branschregler
│   ├── industryQuestions.ts # Branschfrågor
│   └── prisma.ts            # Databaskoppling
│
├── prisma/
│   └── schema.prisma        # Databasschema
│
└── utils/                   # Hjälpfunktioner
    ├── quickValuation.ts    # Snabbvärdering
    ├── currency.ts          # Valutaformatering
    └── validation.ts        # Validering
```

---

## 🎨 Design System

Projektet använder ett professionellt fintech-tema med:

### Färgpalett
- **Primary**: `#00d4aa` (Teal/Mint)
- **Background**: `#0a0a0f` (Mörk)
- **Cards**: `#15151f` (Mörkgrå)

### Komponenter
- **Cards med pulserande skuggor**: `.card-glow`, `.shadow-pulse`
- **Glasmorfism**: `.glass`, `.glass-strong`
- **Gradient text**: `.text-gradient`
- **Knappar**: `.btn-primary`, `.btn-secondary`
- **Tabbar**: `.tab-group`, `.tab-item`

### Animationer
- Fade in/up: `.animate-fade-in-up`
- Float: `.animate-float`
- Pulserande skuggor: `.shadow-pulse`, `.shadow-pulse-slow`
- Shimmer: `.animate-shimmer`

---

## 📋 Sanity Check - 12 Steg

1. **Bolagsöversikt & syfte** - Grundläggande information
2. **Ägarberoende & ledning** - Nyckelpersonsberoende
3. **Intäkter & affärsmodell** - Intäktsströmmar
4. **Lönsamhet & kassaflöde** - Finansiell hälsa
5. **Kundbas & marknad** - Kundkoncentration
6. **Team & organisation** - Personalstruktur
7. **Processer & system** - Operativ mognad
8. **Risk & compliance** - Juridik och risker
9. **Tillväxt & potential** - Framtidsutsikter
10. **Försäljningsberedskap** - Exit-readiness
11. **Sammanfattning & resultat** - Analys och poäng
12. **Uppgradering & nästa steg** - Premiumtjänster

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL + Prisma
- **Icons**: Lucide React
- **State**: Zustand
- **PDF**: @react-pdf/renderer

---

## 📦 Scripts

```bash
npm run dev       # Starta utvecklingsserver
npm run build     # Bygg för produktion
npm run start     # Starta produktionsserver
npm run lint      # Kör linting
```

---

## 🔐 Autentisering

Projektet stödjer:
- Magic Link-inloggning
- Dev-läge med localStorage
- Session cookies

---

## 📄 Licens

© 2024 Valiora Analytics. Alla rättigheter förbehållna.
