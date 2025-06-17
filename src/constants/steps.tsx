import { Step } from '@components/StepsSection'

export const steps: Step[] = [
  {
    number: 1,
    title: 'Matrícula y datos',
    description:
      'Ingresa la matrícula del coche, comunidad autónoma del comprador, precio de venta del coche, y tus datos básicos de contacto.',
  },
  {
    number: 2,
    title: 'Presupuesto y pago',
    description: (
      <>
        ¡Calculamos tu presupuesto al momento!{' '}
        <span className="text-blue-600 font-medium">
          Solo pagarás las tasas DGT e impuestos ITP.
        </span>{' '}
        Se aplicará tu descuento automático y continúa para realizar el pago.
      </>
    ),
  },
  {
    number: 3,
    title: 'Identificación biométrica',
    description:
      'Es hora de identificar vuestras identidades mediante la captura de ambos lados del DNI/NIE y un reconocimiento facial. ¡100% online!',
  },
  {
    number: 4,
    title: 'Firma electrónica',
    description:
      'Firma digitalmente los documentos. ¡Y listo! Tramicar se encarga de la gestión con la DGT y de enviarte tu nuevo permiso de circulación a casa.',
  },
]
