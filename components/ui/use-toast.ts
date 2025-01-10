'use client'

import { useState, useEffect } from 'react'

interface ToastProps {
  title?: string
  description?: string
  variant?: 'default' | 'destructive'
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const toast = ({ title, description, variant = 'default' }: ToastProps) => {
    const newToast = { title, description, variant }
    setToasts([...toasts, newToast])
  }

  return { toast }
} 