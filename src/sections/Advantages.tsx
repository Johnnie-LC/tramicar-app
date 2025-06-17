import { advantages } from '@/constants/advantages'
import { Advantage } from '@/components/Advantage'

export const Advantages = () => {
  return (
    <section className="bg-lightBg py-16 px-4 md:px-8 lg:px-20 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold">
        <span className="text-indigo-600 font-bold">Ventajas </span>
        de hacer el cambio de titularidad online con Tramicar.
      </h2>
      <Advantage items={advantages} />
      <div className="mt-10">
        <a
          href="#"
          className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Realiza tu trámite →
        </a>
      </div>
    </section>
  )
}
