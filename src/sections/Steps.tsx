import { Button } from '@components/Button'
import { StepsSection } from '@components/StepsSection'
import { steps } from '@/constants/steps'

export const Steps = () => {
  return (
    <section className="bg-tramicar-bg py-20 px-6 md:px-16 rounded-3xl">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          <span className="text-primary">Pasos</span> para hacer la
          transferencia de tu coche con nosotros:
        </h2>
        <StepsSection steps={steps} />
        <div className="mt-10">
          <Button>Realiza tu trámite →</Button>
        </div>
      </div>
    </section>
  )
}
