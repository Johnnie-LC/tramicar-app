export interface Item {
  icon: string
  title: string
  description: string
  className: string
}

interface AdvantageProps {
  items: Item[]
}

export const Advantage: React.FC<AdvantageProps> = ({ items }) => {
  return (
    <section className="flex justify-center py-16 px-4">
      <div className="max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10 relative">
        {items.map(({ icon, title, description, className }) => (
          <div key={title} className="flex flex-col items-center text-center">
            <img src={icon} alt={title} className={`mb-4 ${className}`} />
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-gray-600 text-sm mt-2 max-w-xs">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
