"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

interface AccountDetailsProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AccountDetails({ open, onOpenChange }: AccountDetailsProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Account Details</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
} 