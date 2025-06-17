import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  href?: string
}

export const Button = ({ children, href = '#' }: ButtonProps) => {
  return (
    <a
      href={href}
      className="inline-block px-6 py-3 rounded-lg text-white font-medium bg-primary hover:bg-indigo-700 transition-colors"
    >
      {children}
    </a>
  )
}
