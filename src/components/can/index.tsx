'use client'
import { useCan } from '@/hooks/useCan'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

interface CanProps {
  children: ReactNode
  permissions?: string[]
  roles?: string[]
  to?: string
}

export function Can({ children, permissions, roles, to }: CanProps) {
  const userCanSeeComponent = useCan({ permissions, roles })

  console.log(userCanSeeComponent)
  if (!userCanSeeComponent) {
    if (to) {
      return redirect(`${to}?m=unauthorized`)
    }
    return null
  }

  return <>{children}</>
}