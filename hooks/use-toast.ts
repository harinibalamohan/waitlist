"use client"

import * as React from "react"

interface Toast {
  id: string
  title?: string
  description?: string
  variant?: "default" | "destructive"
}

interface State {
  toasts: Toast[]
}

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 3000

let count = 0
const listeners: Array<(state: State) => void> = []
let memoryState: State = { toasts: [] }

function genId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

function dispatch(action: { toasts: Toast[] }) {
  memoryState = { ...memoryState, toasts: action.toasts }
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

export function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  function toast({ title, description, variant = "default" }: Omit<Toast, "id">) {
    const id = genId()
    const newToast: Toast = { id, title, description, variant }
    
    const updatedToasts = [...state.toasts, newToast].slice(0, TOAST_LIMIT)
    dispatch({ toasts: updatedToasts })

    setTimeout(() => {
      dispatch({ 
        toasts: memoryState.toasts.filter(t => t.id !== id) 
      })
    }, TOAST_REMOVE_DELAY)
  }

  return {
    toasts: state.toasts,
    toast,
  }
}
