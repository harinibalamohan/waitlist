'use client'

import { useState } from 'react'

interface Toast {
  id: string
  title?: string
  description?: string
  variant?: 'default' | 'destructive'
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = ({ title, description, variant = 'default' }: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substring(2)
    const newToast: Toast = { id, title, description, variant }
    setToasts([...toasts, newToast])
  }

  return { toast }
} 