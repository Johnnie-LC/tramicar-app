import React from 'react'

export interface Step {
  number: number
  title: string
  description: React.ReactNode
}

interface StepsSectionProps {
  steps: Step[]
}

export const StepsSection: React.FC<StepsSectionProps> = ({ steps }) => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10 relative">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="relative flex flex-col items-center text-center flex-1"
          >
            {index !== steps.length - 1 && (
              <div className="hidden md:block absolute top-[24px] left-1/2 h-[2px] bg-stepline z-0 w-[120%]" />
            )}

            <div className="flex justify-center relative z-10">
              <div className="w-[48px] h-[48px] rounded-full bg-[#4F5DFF] text-white font-semibold flex items-center justify-center mb-4">
                {step.number}
              </div>
            </div>

            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
