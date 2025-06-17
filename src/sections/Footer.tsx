import Tramicarlogo from '@assets/icons/tramicar-logo.svg'
import Lda from '@assets/icons/LDA.svg'
export const Footer = () => {
  return (
    <footer className="bg-lightBg px-6 py-12 text-center text-sm text-gray-500">
      <div className="max-w-5xl mx-auto space-y-10">
        <p className="text-xs leading-relaxed text-footer text-justify">
          *Línea Directa asume únicamente los gastos de gestión del servicio
          "transferencia estándar". En el caso de que desees contratar nuestro
          servicio “transferencia exprés”, será necesario abonar la cantidad
          adicional correspondiente, 15€, la cual no está cubierta por Línea
          Directa.
          <br />
          <br />
          * TRAMICAR es una empresa dedicada a representación de las partes
          involucradas ante la Dirección General de Tráfico. Para el servicio de
          “transferencia estándar”, Tramicar lleva a cabo la gestión de
          expedición con la administración pública, ejecutando el trámite en
          nombre de las partes interesadas. La Dirección General de Tráfico
          enviará el documento provisional y definitivo según sus plazos. Los
          plazos de entrega del nuevo permiso de circulación oscilan entre 3 a 5
          semanas. No obstante, Tramicar no se responsabiliza ante cualquier
          demora por parte de la administración pública. En el caso de
          contratación del servicio de “transferencia exprés”, Tramicar trabaja
          con las mejores gestorías colegiadas, lo cual nos permite llevar a
          cabo la gestión del expediente en plazos mucho más reducidos, estos
          oscilan entre 3-7 días. Tramicar no se responsabiliza ante cualquier
          demora por parte de la gestión de expedientes externos.
          <br />
          <br />
          La documentación entregada por TRAMICAR (al final del flujo web)
          (certificado de operaciones) es un documento con validez jurídica que
          acredita la compraventa realizada entre las partes involucradas
          proporcionando cobertura legal desde el primer momento.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <img src={Tramicarlogo} alt="Tramicar logo" className="h-6" />
          <img src={Lda} alt="Línea Directa logo" className="h-20" />
        </div>

        <div className="flex flex-row items-center justify-between gap">
          <p className="text-xs text-gray-400">
            ©2023 Tramicar. Todos los derechos reservados.
          </p>
          <div className="flex justify-center flex-wrap gap-x-2  text-xs text-gray-400">
            <a href="#" className="hover:underline">
              Política de Privacidad
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Política de Cookies
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Aviso Legal
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Condiciones de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
