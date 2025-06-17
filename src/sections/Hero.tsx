import { Button } from '@components/Button'
import heroImg from '@assets/hero-illustration.svg'

export const Hero = () => {
  return (
    <section className="bg-lightBg pb-16 pt-7 px-6 text-center md:text-left md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-primary">Esto es una prueba</span> para
            demostrar tus capacidades de{' '}
            <span className="text-primary">maquetación</span>
          </h1>
          <p className="text-sm text-primary mb-2">
            Solo pagarás los impuestos (ITP) y tasas (DGT).
            <br />
            Línea Directa te regala el 100% de los gastos de gestión*
          </p>
          <p className="text-grayText mb-6">
            En Tramicar, tenemos un equipo de profesionales listos para
            gestionar el cambio de nombre de tu vehículo completamente online.
          </p>
          <Button>Realiza tu trámite ahora →</Button>
        </div>
        <div>
          <img src={heroImg} alt="Transferencia coche" className="w-full" />
        </div>
      </div>
    </section>
  )
}
