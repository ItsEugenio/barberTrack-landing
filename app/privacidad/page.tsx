import { Button } from "@/components/ui/button"
import { Scissors, ArrowLeft, Clock, FileText } from "lucide-react"
import Link from "next/link"

export default function PoliticaPrivacidad() {
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
            <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50">
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Política de Privacidad</h1>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Última actualización: 25 de junio de 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <span>Vigente desde: 25 de junio de 2025</span>
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
                { id: "informacion", title: "1. Información que Recopilamos" },
                { id: "uso", title: "2. Cómo Utilizamos su Información" },
                { id: "compartir", title: "3. Compartir Información" },
                { id: "seguridad", title: "4. Seguridad de los Datos" },
                { id: "derechos", title: "5. Sus Derechos y Opciones" },
                { id: "ia", title: "6. Inteligencia Artificial" },
                { id: "menores", title: "7. Menores de Edad" },
                { id: "contacto", title: "8. Información de Contacto" },
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
                More Code ("nosotros", "nuestro" o "la empresa") es el responsable del tratamiento de los datos
                personales y desarrolla y mantiene la aplicación móvil BarberTrack (en adelante, el "Servicio").
              </p>

              <p className="text-gray-700 mb-12 leading-relaxed">
                Esta página le informa sobre nuestras políticas con respecto a la recopilación, uso y divulgación de
                datos personales cuando utiliza nuestro Servicio y las opciones que tiene asociadas con esos datos.
              </p>

              <div className="space-y-16">
                {/* Section 1 */}
                <div id="informacion">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                    1. Información que Recopilamos
                  </h2>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        1.1 Información que Proporciona Directamente
                      </h3>

                      <div className="mb-6">
                        <h4 className="text-lg font-medium text-gray-800 mb-3">
                          Información de Registro y Autenticación:
                        </h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                          <li>Dirección de correo electrónico</li>
                          <li>Número de teléfono</li>
                          <li>Contraseña (almacenada de forma cifrada)</li>
                          <li>Información de cuenta de Google</li>
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-medium text-gray-800 mb-3">Información de Perfil:</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                          <li>Nombre y apellidos</li>
                          <li>Fotografía de perfil</li>
                          <li>Ubicación/dirección</li>
                          <li>Preferencias de notificaciones</li>
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-medium text-gray-800 mb-3">
                          Información de Negocio (para propietarios de barberías):
                        </h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                          <li>Información comercial (nombre, descripción, dirección)</li>
                          <li>Datos de contacto del negocio</li>
                          <li>Galería de fotos del establecimiento</li>
                          <li>Horarios de atención</li>
                          <li>Información de servicios y precios</li>
                          <li>Datos de barberos y empleados</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        1.2 Información Recopilada Automáticamente
                      </h3>

                      <div className="mb-6">
                        <h4 className="text-lg font-medium text-gray-800 mb-3">Datos de Uso:</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                          <li>Información sobre cómo utiliza la aplicación</li>
                          <li>Funciones que utiliza y tiempo de uso</li>
                          <li>Patrones de comportamiento</li>
                          <li>Historial de citas y reservas</li>
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-medium text-gray-800 mb-3">Información del Dispositivo:</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                          <li>Modelo del dispositivo y sistema operativo</li>
                          <li>Identificadores únicos del dispositivo</li>
                          <li>Dirección IP</li>
                          <li>Información del navegador</li>
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-medium text-gray-800 mb-3">Datos de Ubicación:</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                          <li>Ubicación geográfica precisa (con permisos)</li>
                          <li>Ubicación aproximada basada en IP</li>
                          <li>Datos de búsqueda de barberías cercanas</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        1.3 Contenido Generado por el Usuario
                      </h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Reseñas y calificaciones</li>
                        <li>Comentarios sobre servicios</li>
                        <li>Fotografías subidas para análisis de estilo</li>
                        <li>Notas y preferencias de citas</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div id="uso">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                    2. Cómo Utilizamos su Información
                  </h2>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">2.1 Propósitos Principales</h3>

                      <div className="mb-6">
                        <h4 className="text-lg font-medium text-gray-800 mb-3">Prestación del Servicio:</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                          <li>Crear y gestionar su cuenta de usuario</li>
                          <li>Facilitar reservas de citas</li>
                          <li>Conectar clientes con barberías y barberos</li>
                          <li>Procesar pagos y transacciones</li>
                          <li>Proporcionar atención al cliente</li>
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-medium text-gray-800 mb-3">Funcionalidades Avanzadas:</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                          <li>Análisis de estilo con inteligencia artificial</li>
                          <li>Predicciones de próximas citas y demanda</li>
                          <li>Geolocalización para mostrar barberías cercanas</li>
                          <li>Gestión del sistema de reseñas y calificaciones</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">2.2 Comunicación y Notificaciones</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Envío de confirmaciones de citas</li>
                        <li>Recordatorios de citas programadas</li>
                        <li>Notificaciones promocionales (con su consentimiento)</li>
                        <li>Mensajes personalizados basados en aprendizaje automático</li>
                        <li>Comunicaciones importantes sobre el servicio</li>
                        <li>Alertas de disponibilidad y cambios</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div id="compartir">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                    3. Compartir Información
                  </h2>

                  <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 No Vendemos sus Datos</h3>
                    <p className="text-gray-700">
                      <strong>
                        No vendemos, alquilamos ni comercializamos su información personal a terceros con fines
                        comerciales.
                      </strong>
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-gray-800 mb-3">Con Barberías y Barberos:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Información necesaria para la gestión de citas (nombre, contacto)</li>
                      <li>Preferencias y notas especiales</li>
                      <li>Historial de citas</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-gray-800 mb-3">Proveedores de Servicios:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Servicios de nube</li>
                      <li>Herramientas de analítica y métricas</li>
                      <li>Servicios de notificaciones push y correo electrónico</li>
                      <li>Procesadores de pagos seguros</li>
                      <li>Servicios de mapas y geolocalización</li>
                      <li>Plataformas de inteligencia artificial</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-gray-800 mb-3">Requerimientos Legales:</h4>
                    <p className="text-gray-700 mb-3">
                      Podemos divulgar su información si es requerido por ley o para:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Cumplir con procesos legales</li>
                      <li>Proteger nuestros derechos o los de terceros</li>
                      <li>Proteger la seguridad de los usuarios</li>
                      <li>Investigar posibles violaciones</li>
                    </ul>
                  </div>
                </div>

                {/* Section 4 */}
                <div id="seguridad">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                    4. Seguridad de los Datos
                  </h2>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">4.1 Medidas de Protección</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Cifrado seguro de contraseñas</li>
                      <li>Comunicación cifrada con HTTPS/SSL</li>
                      <li>Tokens JWT para autenticación de sesiones</li>
                      <li>Acceso restringido a datos personales</li>
                      <li>Monitoreo de actividad sospechosa</li>
                      <li>Auditorías de seguridad regulares</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-gray-800 mb-3">4.2 Limitaciones</h4>
                    <p className="text-gray-700">
                      Ningún sistema de seguridad es 100% infalible. Aunque tomamos medidas razonables, no podemos
                      garantizar la seguridad absoluta de su información.
                    </p>
                  </div>
                </div>

                {/* Section 5 */}
                <div id="derechos">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                    5. Sus Derechos y Opciones
                  </h2>

                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-gray-800 mb-3">5.1 Acceso y Control:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Derecho de acceso a sus datos</li>
                      <li>Derecho de rectificación de información incorrecta</li>
                      <li>Derecho de eliminación total de su cuenta</li>
                      <li>Derecho de oposición a ciertos tratamientos</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-gray-800 mb-3">5.2 Configuración de Privacidad:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Puede desactivar notificaciones desde la app</li>
                      <li>Puede revocar permisos de ubicación</li>
                      <li>Puede optar por no usar funciones de análisis facial</li>
                      <li>Puede rechazar recibir mensajes promocionales</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
                    <h4 className="text-lg font-medium text-gray-800 mb-3">5.3 Para Ejercer sus Derechos</h4>
                    <p className="text-gray-700">
                      Puede ejercer sus derechos enviando un correo a:{" "}
                      <strong className="text-gray-900">barber.trackk@gmail.com</strong>
                    </p>
                  </div>
                </div>

                {/* Section 6 */}
                <div id="ia">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                    6. Inteligencia Artificial y Machine Learning
                  </h2>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">6.1 Análisis de Estilo Facial</h3>
                    <p className="text-gray-700 mb-4">
                      Las imágenes que usted proporciona se utilizan exclusivamente para análisis de estilo y se
                      eliminan después del procesamiento.
                    </p>

                    <h4 className="text-lg font-medium text-gray-800 mb-3">Límites y Control:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Uso limitado por día (3 análisis gratuitos)</li>
                      <li>Procesamiento seguro y confidencial</li>
                      <li>Eliminación automática de imágenes</li>
                      <li>Sin almacenamiento permanente de fotos</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-gray-800 mb-3">6.2 Predicciones y Personalización</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Análisis de hábitos para predicción de citas</li>
                      <li>Recomendaciones personalizadas</li>
                      <li>Comunicaciones automatizadas personalizadas</li>
                      <li>Optimización de experiencia de usuario</li>
                    </ul>
                  </div>
                </div>

                {/* Section 7 */}
                <div id="menores">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                    7. Menores de Edad
                  </h2>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">7.1 Restricción de Edad</h3>
                    <p className="text-gray-700 mb-4">
                      <strong>BarberTrack está destinado a mayores de 14 años.</strong> No recopilamos conscientemente
                      información de menores.
                    </p>

                    <h4 className="text-lg font-medium text-gray-800 mb-3">7.2 Notificación de Uso por Menores</h4>
                    <p className="text-gray-700">
                      Si detectamos el uso por menores, eliminaremos la información de forma inmediata. Si es padre o
                      tutor, puede contactarnos para solicitar la eliminación.
                    </p>
                  </div>
                </div>

                {/* Section 8 */}
                <div id="contacto">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                    8. Información de Contacto
                  </h2>

                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-gray-800 mb-3">8.1 Empresa:</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>More Code</strong>
                    </p>
                    <p className="text-gray-700">Correo: barber.trackk@gmail.com</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-gray-800 mb-3">8.2 Consultas sobre Privacidad:</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Correo electrónico:</strong> barber.trackk@gmail.com
                    </p>
                    <p className="text-gray-700 mb-4">
                      <strong>Asunto sugerido:</strong> Consulta de Privacidad - BarberTrack
                    </p>
                    <p className="text-gray-700">
                      <strong>Tiempo de Respuesta:</strong> Nos comprometemos a responder en un plazo máximo de 30 días
                      naturales.
                    </p>
                  </div>
                </div>

                {/* Summary Section */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                    Resumen de Datos Recopilados
                  </h2>

                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-gray-800 mb-3">Datos Personales:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Nombre, correo electrónico, teléfono</li>
                      <li>Fotografía de perfil</li>
                      <li>Dirección</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-gray-800 mb-3">Datos de Uso:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Historial de citas</li>
                      <li>Preferencias de servicios</li>
                      <li>Patrones de comportamiento</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-gray-800 mb-3">Datos Técnicos:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>IP, sistema operativo, modelo de dispositivo</li>
                      <li>Agente de usuario, zona horaria</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-gray-800 mb-3">Contenido del Usuario:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Reseñas, comentarios, fotos</li>
                      <li>Preferencias guardadas</li>
                      <li>Búsquedas de barberías cercanas</li>
                    </ul>
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
