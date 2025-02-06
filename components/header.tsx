"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { HelpCircle, User } from 'lucide-react'
import { AccountDetails } from "./account-details"

export function DashboardHeader() {
  const [accountDetailsOpen, setAccountDetailsOpen] = useState(false)

  return (
    <header className="border-b border-white/10 p-4">
      <div className="flex items-center justify-end space-x-4">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10"
        >
          <HelpCircle className="h-5 w-5" />
          <span className="sr-only">Help</span>
        </Button>
        <Button
          variant="default"
          className="w-24 h-8 rounded bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center"
          onClick={() => setAccountDetailsOpen(true)}
        >
          <User className="h-5 w-5 mr-2" />
          Account
        </Button>
      </div>
      <AccountDetails open={accountDetailsOpen} onOpenChange={setAccountDetailsOpen} />
    </header>
  )
}

