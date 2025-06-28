import { Button } from "@/components/ui/button"
import { Scissors, ArrowLeft, Clock, FileText, Trash2, Mail, Shield, Database } from "lucide-react"
import Link from "next/link"

export default function EliminarCuenta() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gray-900 p-2 rounded">
              <Scissors className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">BarberTrack</span>
          </Link>
          <Link href="/">
            <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50 bg-transparent">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Eliminación de Cuenta</h1>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Última actualización: 27 de diciembre de 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <span>Vigente desde: 27 de diciembre de 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Índice de Contenidos</h2>
            <div className="grid md:grid-cols-2 gap-2">
              {[
                { id: "proceso", title: "1. Proceso de Eliminación" },
                { id: "pasos", title: "2. Pasos a Seguir" },
                { id: "datos-eliminados", title: "3. Datos que se Eliminan" },
                { id: "datos-conservados", title: "4. Datos que se Conservan" },
                { id: "tiempos", title: "5. Tiempos de Procesamiento" },
                { id: "consideraciones", title: "6. Consideraciones Importantes" },
                { id: "contacto", title: "7. Información de Contacto" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-gray-700 hover:text-gray-900 hover:underline py-1"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-6 leading-relaxed">
                En BarberTrack respetamos su derecho a eliminar su cuenta y datos personales de nuestra plataforma. Esta
                página le proporciona información detallada sobre cómo solicitar la eliminación de su cuenta y qué
                sucede con sus datos durante este proceso.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-12">
                <div className="flex items-center">
                  <Trash2 className="h-5 w-5 text-red-400 mr-2" />
                  <p className="text-red-800 font-semibold">
                    Importante: La eliminación de cuenta es un proceso irreversible.
                  </p>
                </div>
              </div>

              <div className="space-y-16">
                {/* Section 1 */}
                <div id="proceso">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                    1. Proceso de Eliminación de Cuenta
                  </h2>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">1.1 Eliminación Permanente</h3>
                    <p className="text-gray-700 mb-4">
                      Cuando solicita la eliminación de su cuenta de BarberTrack, iniciamos un proceso de eliminación
                      permanente de sus datos personales de nuestros sistemas. Este proceso es irreversible y no podrá
                      recuperar su cuenta ni sus datos una vez completado.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">1.2 Solicitud por Correo Electrónico</h3>
                    <p className="text-gray-700 mb-4">
                      Para garantizar la seguridad y verificar su identidad, todas las solicitudes de eliminación de
                      cuenta deben realizarse a través de correo electrónico. No procesamos solicitudes de eliminación a
                      través de otros canales.
                    </p>
                  </div>
                </div>

                {/* Section 2 */}
                <div id="pasos">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                    2. Pasos para Solicitar la Eliminación de su Cuenta
                  </h2>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                    <div className="flex items-center mb-4">
                      <Mail className="h-6 w-6 text-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold text-blue-900">Proceso Paso a Paso</h3>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                          1
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-2">Envíe un correo electrónico</h4>
                          <p className="text-blue-800">
                            Envíe un correo desde la dirección de email asociada a su cuenta de BarberTrack a:
                          </p>
                          <p className="font-bold text-blue-900 mt-1">barber.trackk@gmail.com</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                          2
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-2">Use el asunto correcto</h4>
                          <p className="text-blue-800 mb-1">Asunto del correo:</p>
                          <p className="font-bold text-blue-900">"Solicitud de Eliminación de Cuenta - BarberTrack"</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                          3
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-2">Incluya la información requerida</h4>
                          <p className="text-blue-800 mb-2">En el cuerpo del correo, incluya:</p>
                          <ul className="list-disc list-inside text-blue-800 space-y-1 ml-4">
                            <li>Su nombre completo registrado en BarberTrack</li>
                            <li>Número de teléfono asociado a la cuenta</li>
                            <li>Confirmación explícita de que desea eliminar permanentemente su cuenta</li>
                            <li>Razón de la eliminación (opcional)</li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                          4
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-2">Espere la confirmación</h4>
                          <p className="text-blue-800">
                            Recibirá una confirmación de recepción en un plazo máximo de 48 horas y la eliminación se
                            completará en un plazo máximo de 30 días naturales.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-yellow-600 mr-2" />
                      <p className="text-yellow-800">
                        <strong>Verificación de Identidad:</strong> Solo procesamos solicitudes enviadas desde la
                        dirección de correo electrónico registrada en su cuenta para garantizar su seguridad.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div id="datos-eliminados">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                    3. Datos que se Eliminan Permanentemente
                  </h2>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">3.1 Información Personal</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Nombre completo y apellidos</li>
                      <li>Dirección de correo electrónico</li>
                      <li>Número de teléfono</li>
                      <li>Fotografía de perfil</li>
                      <li>Dirección y ubicación</li>
                      <li>Contraseña (ya cifrada)</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">3.2 Datos de Actividad</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Historial completo de citas y reservas</li>
                      <li>Reseñas y calificaciones realizadas</li>
                      <li>Comentarios y notas personales</li>
                      <li>Preferencias de servicios guardadas</li>
                      <li>Fotografías subidas para análisis de estilo</li>
                      <li>Configuraciones de notificaciones</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      3.3 Datos de Negocio (si es propietario)
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Información comercial de la barbería</li>
                      <li>Galería de fotos del establecimiento</li>
                      <li>Datos de servicios y precios</li>
                      <li>Información de barberos y empleados</li>
                      <li>Horarios de atención</li>
                    </ul>
                  </div>
                </div>

                {/* Section 4 */}
                <div id="datos-conservados">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                    4. Datos que se Conservan (Solo Analíticas)
                  </h2>

                  <div className="bg-gray-50 border-l-4 border-gray-400 p-6 mb-8">
                    <div className="flex items-center mb-4">
                      <Database className="h-6 w-6 text-gray-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-800">Datos de Uso Agregados</h3>
                    </div>

                    <p className="text-gray-700 mb-4">
                      <strong>Únicamente conservamos datos de uso agregados y anonimizados</strong> que no pueden ser
                      vinculados a su identidad personal. Estos datos se utilizan exclusivamente para:
                    </p>

                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mb-4">
                      <li>Análisis estadísticos generales de la aplicación</li>
                      <li>Métricas de rendimiento y uso de funcionalidades</li>
                      <li>Mejoras en la experiencia de usuario</li>
                      <li>Análisis de tendencias del mercado</li>
                    </ul>

                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-800 mb-2">Ejemplos de datos conservados:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 text-sm">
                        <li>"X usuarios utilizaron la función de análisis facial en diciembre"</li>
                        <li>"Y% de usuarios reservan citas los fines de semana"</li>
                        <li>"Z es el tiempo promedio de uso de la aplicación"</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-400 p-4">
                    <p className="text-green-800">
                      <strong>Garantía de Anonimato:</strong> Estos datos estadísticos no contienen información que
                      pueda identificarle personalmente y cumplen con todas las regulaciones de privacidad.
                    </p>
                  </div>
                </div>

                {/* Section 5 */}
                <div id="tiempos">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                    5. Tiempos de Procesamiento
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-blue-900 mb-3">Confirmación de Recepción</h3>
                      <p className="text-blue-800 text-2xl font-bold mb-2">48 horas</p>
                      <p className="text-blue-700 text-sm">
                        Tiempo máximo para confirmar que hemos recibido su solicitud
                      </p>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-green-900 mb-3">Eliminación Completa</h3>
                      <p className="text-green-800 text-2xl font-bold mb-2">30 días</p>
                      <p className="text-green-700 text-sm">
                        Tiempo máximo para completar la eliminación de todos sus datos personales
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 bg-gray-50 p-4 rounded">
                    <h4 className="font-semibold text-gray-800 mb-2">Proceso de Eliminación:</h4>
                    <ol className="list-decimal list-inside text-gray-700 space-y-1 ml-4">
                      <li>Verificación de identidad y validación de la solicitud</li>
                      <li>Desactivación inmediata de la cuenta</li>
                      <li>Eliminación de datos personales de sistemas principales</li>
                      <li>Eliminación de copias de seguridad y sistemas auxiliares</li>
                      <li>Confirmación final de eliminación completa</li>
                    </ol>
                  </div>
                </div>

                {/* Section 6 */}
                <div id="consideraciones">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                    6. Consideraciones Importantes
                  </h2>

                  <div className="space-y-6">
                    <div className="bg-red-50 border border-red-200 p-4 rounded">
                      <h3 className="text-lg font-semibold text-red-900 mb-3">⚠️ Proceso Irreversible</h3>
                      <p className="text-red-800">
                        Una vez iniciado el proceso de eliminación, no podrá recuperar su cuenta, datos, historial de
                        citas, reseñas, o cualquier otra información asociada a su cuenta.
                      </p>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
                      <h3 className="text-lg font-semibold text-yellow-900 mb-3">📱 Desinstale la Aplicación</h3>
                      <p className="text-yellow-800">
                        Recuerde desinstalar la aplicación BarberTrack de todos sus dispositivos después de solicitar la
                        eliminación de su cuenta.
                      </p>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 p-4 rounded">
                      <h3 className="text-lg font-semibold text-blue-900 mb-3">🏪 Cuentas de Negocio</h3>
                      <p className="text-blue-800">
                        Si es propietario de una barbería, la eliminación de su cuenta también eliminará toda la
                        información de su negocio, incluyendo reservas futuras. Asegúrese de notificar a sus clientes
                        con anticipación.
                      </p>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 p-4 rounded">
                      <h3 className="text-lg font-semibold text-purple-900 mb-3">🔄 Alternativas</h3>
                      <p className="text-purple-800 mb-2">Antes de eliminar su cuenta, considere estas alternativas:</p>
                      <ul className="list-disc list-inside text-purple-700 space-y-1 ml-4">
                        <li>Desactivar notificaciones temporalmente</li>
                        <li>Cambiar configuraciones de privacidad</li>
                        <li>Contactarnos para resolver problemas específicos</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 7 */}
                <div id="contacto">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                    7. Información de Contacto
                  </h2>

                  <div className="bg-gray-50 border-l-4 border-gray-400 p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Para Solicitar Eliminación de Cuenta</h3>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800">Correo Electrónico:</h4>
                        <p className="text-gray-700 text-lg">barber.trackk@gmail.com</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800">Asunto Requerido:</h4>
                        <p className="text-gray-700">"Solicitud de Eliminación de Cuenta - BarberTrack"</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800">Empresa:</h4>
                        <p className="text-gray-700">More Code</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800">Tiempo de Respuesta:</h4>
                        <p className="text-gray-700">
                          Confirmación de recepción: máximo 48 horas
                          <br />
                          Eliminación completa: máximo 30 días naturales
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-blue-50 border border-blue-200 p-4 rounded">
                    <h4 className="font-semibold text-blue-900 mb-2">¿Necesita Ayuda?</h4>
                    <p className="text-blue-800">
                      Si tiene preguntas sobre el proceso de eliminación o necesita asistencia, no dude en contactarnos
                      al mismo correo electrónico antes de proceder con la eliminación.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="bg-gray-900 p-1.5 rounded">
                <Scissors className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-semibold text-gray-900">BarberTrack</span>
            </div>
            <div className="flex justify-center space-x-6 mb-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm">
                Inicio
              </Link>
              <a href="mailto:barber.trackk@gmail.com" className="text-gray-600 hover:text-gray-900 text-sm">
                Contacto
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              &copy; 2024 BarberTrack by More Code. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
