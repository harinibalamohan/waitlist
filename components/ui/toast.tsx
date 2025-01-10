"use client"

import { createContext, useContext, useState } from 'react'
import { cn } from "@/lib/utils"

interface Toast {
  id: string
  title?: string
  description?: string
  variant?: 'default' | 'destructive'
}

interface ToastContextType {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, 'id'>) => void
  removeToast: (id: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts((prev) => [...prev, { ...toast, id }])
    setTimeout(() => removeToast(id), 3000)
  }

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <Toaster />
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) throw new Error('useToast must be used within ToastProvider')
  return context
}

function Toast({ title, description, variant = 'default' }: Omit<Toast, 'id'>) {
  return (
    <div
      className={cn(
        'rounded-lg shadow-lg p-4 transition-all transform',
        variant === 'destructive' ? 'bg-red-600 text-white' : 'bg-white text-gray-900'
      )}
    >
      {title && <div className="font-semibold">{title}</div>}
      {description && <div className="text-sm">{description}</div>}
    </div>
  )
}

export function Toaster() {
  const { toasts } = useToast()
  
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  )
}
