'use client'

import { useEffect, useState } from 'react'
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react'

export type ToastType = 'success' | 'error' | 'info' | 'warning'

export interface Toast {
  id: string
  message: string
  type: ToastType
  duration?: number
}

interface ToastItemProps {
  toast: Toast
  onClose: (id: string) => void
}

const iconMap = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
  warning: AlertTriangle,
}

const styleMap = {
  success: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    icon: 'text-emerald-400',
    text: 'text-emerald-300',
  },
  error: {
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
    icon: 'text-red-400',
    text: 'text-red-300',
  },
  info: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    icon: 'text-blue-400',
    text: 'text-blue-300',
  },
  warning: {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    icon: 'text-amber-400',
    text: 'text-amber-300',
  },
}

function ToastItem({ toast, onClose }: ToastItemProps) {
  const [isLeaving, setIsLeaving] = useState(false)
  const Icon = iconMap[toast.type]
  const styles = styleMap[toast.type]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLeaving(true)
      setTimeout(() => onClose(toast.id), 300)
    }, toast.duration || 3000)

    return () => clearTimeout(timer)
  }, [toast.id, toast.duration, onClose])

  return (
    <div
      className={`
        flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-xl
        ${styles.bg} ${styles.border}
        transition-all duration-300 ease-out
        ${isLeaving ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}
        shadow-lg shadow-black/20
      `}
    >
      <Icon className={`w-5 h-5 flex-shrink-0 ${styles.icon}`} />
      <p className={`text-sm font-medium ${styles.text} flex-1`}>{toast.message}</p>
      <button
        onClick={() => {
          setIsLeaving(true)
          setTimeout(() => onClose(toast.id), 300)
        }}
        className="p-1 rounded-lg hover:bg-white/10 transition-colors"
      >
        <X className="w-4 h-4 text-white/50 hover:text-white/80" />
      </button>
    </div>
  )
}

interface ToastContainerProps {
  toasts: Toast[]
  onClose: (id: string) => void
}

export function ToastContainer({ toasts, onClose }: ToastContainerProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onClose={onClose} />
      ))}
    </div>
  )
}

