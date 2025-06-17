interface TitleProps {
  children: React.ReactNode
  className?: string
}

export const Title = ({ children, className = '' }: TitleProps) => (
  <h1 className={`text-3xl md:text-4xl font-bold ${className}`}>{children}</h1>
)

export const Paragraph = ({ children, className = '' }: TitleProps) => (
  <p className={`text-gray-600 ${className}`}>{children}</p>
)
