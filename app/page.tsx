"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HeroParallax } from "@/components/ui/hero-parallax"
import { FeaturesSectionDemo } from "@/components/ui/feature-sections"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import {
  Calendar,
  Brain,
  BarChart3,
  Users,
  Scissors,
  Shield,
  Zap,
  Bot,
  Download,
  Monitor,
  Mail,
  Heart,
  Settings,
  Globe,
  Phone,
  CheckCircle2,
  Megaphone,
  ArrowRight,
  MapPin,
  Star,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function BarberTrackLanding() {
  // Hero Parallax Products - Barberías reales
  const products = [
    {
      title: "Barbería Elite Premium",
      link: "#",
      thumbnail: "/placeholder.svg?height=600&width=600&text=Barbería+Elite+Premium",
    },
    {
      title: "Style Masters Studio",
      link: "#",
      thumbnail: "/placeholder.svg?height=600&width=600&text=Style+Masters+Studio",
    },
    {
      title: "Classic Cuts & Shave",
      link: "#",
      thumbnail: "/placeholder.svg?height=600&width=600&text=Classic+Cuts+%26+Shave",
    },
    {
      title: "Modern Barber Co.",
      link: "#",
      thumbnail: "/placeholder.svg?height=600&width=600&text=Modern+Barber+Co",
    },
    {
      title: "Premium Cuts Salon",
      link: "#",
      thumbnail: "/placeholder.svg?height=600&width=600&text=Premium+Cuts+Salon",
    },
    {
      title: "Urban Style Lounge",
      link: "#",
      thumbnail: "/placeholder.svg?height=600&width=600&text=Urban+Style+Lounge",
    },
    {
      title: "Gentleman's Club",
      link: "#",
      thumbnail: "/placeholder.svg?height=600&width=600&text=Gentleman's+Club",
    },
    {
      title: "Fresh Cuts Studio",
      link: "#",
      thumbnail: "/placeholder.svg?height=600&width=600&text=Fresh+Cuts+Studio",
    },
    {
      title: "Royal Barber Shop",
      link: "#",
      thumbnail: "/placeholder.svg?height=600&width=600&text=Royal+Barber+Shop",
    },
    {
      title: "Trendy Styles Hub",
      link: "#",
      thumbnail: "/placeholder.svg?height=600&width=600&text=Trendy+Styles+Hub",
    },
    {
      title: "Master Cuts Pro",
      link: "#",
      thumbnail: "/placeholder.svg?height=600&width=600&text=Master+Cuts+Pro",
    },
    {
      title: "Signature Style Bar",
      link: "#",
      thumbnail: "/placeholder.svg?height=600&width=600&text=Signature+Style+Bar",
    },
    {
      title: "Pro Barber Academy",
      link: "#",
      thumbnail: "/placeholder.svg?height=600&width=600&text=Pro+Barber+Academy",
    },
    {
      title: "Elite Grooming Spa",
      link: "#",
      thumbnail: "/placeholder.svg?height=600&width=600&text=Elite+Grooming+Spa",
    },
    {
      title: "Luxury Cuts Palace",
      link: "#",
      thumbnail: "/placeholder.svg?height=600&width=600&text=Luxury+Cuts+Palace",
    },
  ]

  // Sticky Scroll Content para usuarios
  const userContent = [
    {
      title: "Búsqueda Inteligente de Barberías",
      description:
        "Encuentra las mejores barberías cerca de ti con nuestro sistema de geolocalización avanzado. Filtra por servicios, precios, calificaciones y disponibilidad en tiempo real. Nuestra IA aprende de tus preferencias para ofrecerte recomendaciones cada vez más precisas.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white rounded-lg">
          <div className="p-8 text-center">
            <MapPin className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Barberías Cercanas</h3>
            <p className="text-sm opacity-90">Encuentra la perfecta para ti</p>
            <div className="mt-4 space-y-2">
              <div className="bg-white/20 rounded-lg p-2 text-left">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-300" />
                  <span className="text-sm font-medium">Barbería Elite - 4.9★</span>
                </div>
              </div>
              <div className="bg-white/20 rounded-lg p-2 text-left">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-300" />
                  <span className="text-sm font-medium">Style Masters - 4.8★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Reservas Instantáneas",
      description:
        "Agenda tu cita en segundos con nuestro sistema de reservas en tiempo real. Selecciona tu barbero favorito, elige el servicio que necesitas y confirma tu reserva con un solo toque. Sin llamadas, sin esperas, sin complicaciones. Recibe confirmación inmediata y recordatorios automáticos.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white rounded-lg">
          <div className="p-8 text-center">
            <Calendar className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Reserva Fácil</h3>
            <p className="text-sm opacity-90">Tu cita en segundos</p>
            <div className="mt-4 bg-white/20 rounded-lg p-4">
              <div className="text-sm text-left space-y-2 font-medium">
                <div>📅 Hoy, 15:30</div>
                <div>✂️ Corte + Barba</div>
                <div>👨‍💼 Carlos Mendoza</div>
                <div className="bg-green-500 text-white rounded px-2 py-1 text-xs font-semibold">Confirmado</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "IA Consultor de Estilo Personal",
      description:
        "Nuestro sistema de inteligencia artificial analiza tu rostro y recomienda los mejores cortes para ti. Descubre nuevos estilos que realcen tu personalidad y se adapten a tu forma de cara. Tecnología de reconocimiento facial avanzada para recomendaciones precisas y personalizadas.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white rounded-lg">
          <div className="p-8 text-center">
            <Brain className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">IA Estilista</h3>
            <p className="text-sm opacity-90">Recomendaciones personalizadas</p>
            <div className="mt-4 space-y-2">
              <div className="bg-white/20 rounded-lg p-2">
                <div className="text-xs font-medium">Análisis facial completado</div>
                <div className="text-sm font-bold">Recomendación: Fade Clásico</div>
              </div>
              <div className="bg-white/20 rounded-lg p-2">
                <div className="text-xs font-medium">Compatibilidad: 95%</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Historial y Favoritos",
      description:
        "Mantén un registro completo de tus visitas, guarda tus barberías favoritas y accede rápidamente a tus barberos de confianza. Tu historial siempre disponible con fotos de resultados, calificaciones y notas personales para cada visita.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white rounded-lg">
          <div className="p-8 text-center">
            <Heart className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Tus Favoritos</h3>
            <p className="text-sm opacity-90">Siempre a tu alcance</p>
            <div className="mt-4 space-y-2">
              <div className="bg-white/20 rounded-lg p-2 text-left">
                <div className="text-sm font-bold">Barbería Elite ⭐</div>
                <div className="text-xs font-medium">Última visita: 15 Dic</div>
              </div>
              <div className="bg-white/20 rounded-lg p-2 text-left">
                <div className="text-sm font-bold">Style Masters ⭐</div>
                <div className="text-xs font-medium">Última visita: 8 Dic</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  const testimonials = [
    {
      quote:
        "BarberTrack revolucionó mi barbería. Las predicciones de IA me ayudan a optimizar mis horarios y aumentar mis ingresos un 40%. La plataforma es intuitiva y mis clientes están encantados.",
      name: "Carlos Mendoza",
      title: "Propietario - Barbería Elite",
    },
    {
      quote:
        "Nunca fue tan fácil encontrar y reservar citas. La app es intuitiva y el análisis de estilo con IA es increíble. Me ayudó a descubrir un corte que me queda perfecto.",
      name: "María González",
      title: "Cliente Frecuente",
    },
    {
      quote:
        "La gestión de mi equipo y las métricas en tiempo real me permiten tomar decisiones informadas. Excelente plataforma que realmente entiende las necesidades del negocio.",
      name: "Roberto Silva",
      title: "Gerente - Style Masters",
    },
    {
      quote:
        "El sistema de notificaciones inteligentes redujo las cancelaciones en un 60%. Altamente recomendado para cualquier barbería que quiera profesionalizarse.",
      name: "Ana Rodríguez",
      title: "Propietaria - Classic Cuts",
    },
    {
      quote:
        "Como barbero, me encanta poder gestionar mi agenda desde cualquier lugar. Los clientes llegan puntuales y preparados gracias a las notificaciones automáticas.",
      name: "Diego Martínez",
      title: "Barbero Senior - Urban Style",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/95 backdrop-blur-md border-b border-gray-800/50 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-2.5 rounded-xl shadow-lg">
                <Scissors className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">BarberTrack</span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-200 hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                Características
              </a>
              <a href="#users" className="text-gray-200 hover:text-blue-400 transition-colors duration-300 font-medium">
                Para Usuarios
              </a>
              <a href="#admin" className="text-gray-200 hover:text-blue-400 transition-colors duration-300 font-medium">
                Para Barberías
              </a>
              <Link
                href="/privacidad"
                className="text-gray-200 hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                Privacidad
              </Link>
              <a
                href="#contact"
                className="text-gray-200 hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                Contacto
              </a>
            </div>

            <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold px-6 py-2.5 shadow-lg transition-all duration-300">
              Comenzar Ahora
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Parallax */}
      <div className="pt-20">
        <HeroParallax products={products} />
      </div>

      {/* Features Section */}
      <section id="features" className="bg-gray-900 py-20">
        <FeaturesSectionDemo />
      </section>

      {/* Users Section con Sticky Scroll */}
      <section id="users" className="py-32 bg-gray-950">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-8 bg-blue-600/20 border border-blue-400/60 text-blue-200 text-sm font-semibold px-6 py-3">
              <Phone className="w-4 h-4 mr-2" />
              Aplicación Móvil
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
              Experiencia perfecta para{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                cada cliente
              </span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Descubre cómo nuestra aplicación móvil transforma la manera en que los clientes encuentran y reservan
              servicios de barbería
            </p>
          </motion.div>

          <div className="mt-16">
            <StickyScroll content={userContent} />
          </div>
        </div>
      </section>

      {/* Admin Section */}
      <section id="admin" className="bg-gray-900 py-32">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-8 bg-blue-600/20 border border-blue-400/60 text-blue-200 text-sm font-semibold px-6 py-3">
              <Monitor className="w-4 h-4 mr-2" />
              Panel Web Administrativo
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
              Panel Administrativo{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Profesional
              </span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Gestiona tu barbería con herramientas avanzadas de análisis, automatización y control total del negocio
            </p>
          </motion.div>

          {/* Admin Features Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              {
                title: "Analytics IA",
                description: "Métricas avanzadas con predicciones de demanda y análisis de tendencias",
                icon: BarChart3,
              },
              {
                title: "Gestión de Equipo",
                description: "Administra barberos, horarios y especialidades de forma integral",
                icon: Users,
              },
              {
                title: "Automatización",
                description: "Procesos automáticos para optimizar operaciones y reducir trabajo manual",
                icon: Settings,
              },
              {
                title: "Marketing Smart",
                description: "Campañas inteligentes y estrategias de retención de clientes",
                icon: Megaphone,
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700/60 text-center h-full hover:border-blue-500/60 transition-all duration-300 shadow-xl">
                  <CardHeader className="pb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white mb-3">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-200 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-32 bg-gray-950">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-8 bg-blue-600/20 border border-blue-400/60 text-blue-200 px-6 py-3">
              <Bot className="w-4 h-4 mr-2" />
              Tecnología de Vanguardia
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Construido para el futuro</h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Tecnologías avanzadas que garantizan seguridad, rendimiento y escalabilidad
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              {
                title: "Seguridad Avanzada",
                icon: Shield,
                features: [
                  "Cifrado end-to-end",
                  "Autenticación multifactor",
                  "Cumplimiento GDPR",
                  "Auditorías regulares",
                ],
              },
              {
                title: "Inteligencia Artificial",
                icon: Brain,
                features: ["ML predictivo", "Análisis facial", "Procesamiento NLP", "Personalización automática"],
              },
              {
                title: "Alto Rendimiento",
                icon: Zap,
                features: ["Tiempo real", "Microservicios", "Cache inteligente", "99.9% disponibilidad"],
              },
            ].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700/60 text-center h-full shadow-xl">
                  <CardHeader className="pb-6">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <tech.icon className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-white mb-4">{tech.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4 text-gray-200">
                      {tech.features.map((feature, j) => (
                        <li key={j} className="flex items-center space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                          <span className="text-left">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Casos de éxito reales</h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Descubre cómo BarberTrack ha transformado negocios y mejorado experiencias
            </p>
          </motion.div>

          <div className="mt-16">
            <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
              ¿Listo para{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                revolucionar
              </span>{" "}
              tu barbería?
            </h2>
            <p className="text-xl text-gray-200 mb-16 max-w-2xl mx-auto leading-relaxed">
              Únete a cientos de barberías que ya están transformando su negocio con BarberTrack
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold text-lg px-10 py-5 shadow-xl transition-all duration-300">
                <Download className="w-5 h-5 mr-2" />
                Comenzar Gratis
              </Button>
              <Button
                variant="outline"
                className="border-2 border-blue-400/60 text-blue-200 hover:bg-blue-500/10 hover:border-blue-300 font-semibold text-lg px-10 py-5 bg-transparent transition-all duration-300"
              >
                Agendar Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Contáctanos</h2>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                ¿Tienes preguntas? Nuestro equipo está aquí para ayudarte
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl border border-gray-700/60">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-xl shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white text-lg mb-1">Email</div>
                  <div className="text-gray-200">barber.trackk@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl border border-gray-700/60">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-xl shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white text-lg mb-1">Empresa</div>
                  <div className="text-gray-200">More Code</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-6">Certificaciones y Seguridad</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { icon: Shield, text: "Certificado de Seguridad" },
                  { icon: CheckCircle2, text: "Compatible GDPR" },
                  { icon: Globe, text: "ISO 27001" },
                ].map((cert, i) => (
                  <Badge key={i} className="bg-blue-600/20 border border-blue-400/60 text-blue-200 px-6 py-3 text-sm">
                    <cert.icon className="w-4 h-4 mr-2" />
                    {cert.text}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800/60 py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-2.5 rounded-xl shadow-lg">
                  <Scissors className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">BarberTrack</span>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Revolucionando la gestión de barberías con inteligencia artificial y tecnología de vanguardia.
              </p>
            </div>

            {[
              {
                title: "Producto",
                links: [
                  { name: "Características", href: "#features" },
                  { name: "Para Usuarios", href: "#users" },
                  { name: "Para Barberías", href: "#admin" },
                  { name: "Privacidad", href: "/privacidad", isLink: true },
                ],
              },
              {
                title: "Empresa",
                links: [
                  { name: "Sobre Nosotros", href: "#" },
                  { name: "Blog", href: "#" },
                  { name: "Carreras", href: "#" },
                  { name: "Contacto", href: "#contact" },
                ],
              },
              {
                title: "Legal",
                links: [
                  { name: "Política de Privacidad", href: "/privacidad", isLink: true },
                  { name: "Términos de Servicio", href: "#" },
                  { name: "Cookies", href: "#" },
                  { name: "Soporte", href: "#" },
                ],
              },
            ].map((section, i) => (
              <div key={i}>
                <h4 className="font-semibold text-white mb-6 text-lg">{section.title}</h4>
                <ul className="space-y-4 text-gray-200">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      {link.isLink ? (
                        <Link href={link.href} className="hover:text-blue-400 transition-colors duration-300">
                          {link.name}
                        </Link>
                      ) : (
                        <a href={link.href} className="hover:text-blue-400 transition-colors duration-300">
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800/60 pt-8 text-center">
            <p className="text-gray-300">&copy; 2024 BarberTrack by More Code. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
