"use client"
import { cn } from "@/lib/utils"
import type React from "react"

export const FeaturesSectionDemo = () => {
  const features = [
    {
      title: "Búsqueda Inteligente",
      description:
        "Encuentra barberías cercanas con geolocalización precisa, filtros avanzados y recomendaciones personalizadas basadas en IA.",
      skeleton: <SkeletonOne />,
      className: "col-span-1 lg:col-span-4 border-b lg:border-r border-gray-700/60",
    },
    {
      title: "Reservas en Tiempo Real",
      description:
        "Agenda citas instantáneas con tu barbero favorito, selecciona servicios específicos y recibe confirmaciones automáticas.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 border-gray-700/60",
    },
    {
      title: "IA Consultor de Estilo",
      description:
        "Análisis facial inteligente que recomienda cortes personalizados basados en tu forma de rostro y preferencias de estilo.",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-3 lg:border-r border-gray-700/60",
    },
    {
      title: "Notificaciones Smart",
      description:
        "Recordatorios automáticos y confirmaciones, actualizaciones y cancelaciones de citas en tiempo real para nunca perder una cita.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ]
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white">
          Características que{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            transforman experiencias
          </span>
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-gray-200 text-center font-normal">
          Descubre las funcionalidades avanzadas que hacen de BarberTrack la plataforma líder en gestión de barberías
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md border-gray-700/60">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  )
}

const FeatureCard = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  return <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>{children}</div>
}

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  )
}

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-gray-200 text-center font-normal",
        "text-left max-w-sm mx-0 md:text-sm my-2",
      )}
    >
      {children}
    </p>
  )
}

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full max-w-[280px] mx-auto">
        <div className="bg-gray-900 rounded-[2rem] p-2 shadow-2xl border border-gray-700">
          <div className="bg-gray-800 rounded-[1.5rem] p-1">
            <div className="bg-black rounded-[1rem] overflow-hidden">
              <img
                src="/mapa.jpeg"
                alt="Búsqueda de barberías"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const SkeletonThree = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full max-w-[280px] mx-auto">
        <div className="bg-gray-900 rounded-[2rem] p-2 shadow-2xl border border-gray-700">
          <div className="bg-gray-800 rounded-[1.5rem] p-1">
            <div className="bg-black rounded-[1rem] overflow-hidden">
              <img
                src="/estiloIA.jpeg"
                alt="IA Análisis facial"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const SkeletonTwo = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full max-w-[280px] mx-auto">
        <div className="bg-gray-900 rounded-[2rem] p-2 shadow-2xl border border-gray-700">
          <div className="bg-gray-800 rounded-[1.5rem] p-1">
            <div className="bg-black rounded-[1rem] overflow-hidden">
              <img
                src="/citas.jpeg"
                alt="Calendario de reservas"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const SkeletonFour = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full max-w-[280px] mx-auto">
        <div className="bg-gray-900 rounded-[2rem] p-2 shadow-2xl border border-gray-700">
          <div className="bg-gray-800 rounded-[1.5rem] p-1">
            <div className="bg-black rounded-[1rem] overflow-hidden">
              <img
                src="/notificacion.jpeg"
                alt="Notificaciones"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
