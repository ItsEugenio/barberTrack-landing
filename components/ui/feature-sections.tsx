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
        "Recordatorios automáticos, promociones personalizadas y alertas de disponibilidad en tiempo real para nunca perder una cita.",
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
      <div className="w-full  p-5  mx-auto bg-white dark:bg-gray-800 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-gray-200 dark:from-gray-900 dark:to-gray-800 to-gray-100">
          <img
            src="/placeholder.svg?height=300&width=400"
            alt="Búsqueda de barberías"
            className="h-full w-full object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-gray-900 dark:from-gray-950 via-gray-900 dark:via-gray-950 to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-gray-900 dark:from-gray-950 via-transparent to-transparent w-full pointer-events-none" />
    </div>
  )
}

export const SkeletonThree = () => {
  return (
    <div className="relative flex gap-10  h-full group/image">
      <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-gray-200 dark:from-gray-900 dark:to-gray-800 to-gray-100">
          <img
            src="/placeholder.svg?height=300&width=400"
            alt="IA Análisis facial"
            className="h-full w-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  )
}

export const SkeletonTwo = () => {
  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      <div className="flex flex-row -ml-20">
        <div className="h-24 w-24 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex-shrink-0" />
        <div className="h-24 w-24 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 flex-shrink-0 -ml-10" />
        <div className="h-24 w-24 rounded-full bg-gradient-to-r from-blue-300 to-blue-400 flex-shrink-0 -ml-10" />
      </div>
      <div className="h-40 w-full rounded-lg bg-gradient-to-br from-gray-200 dark:from-gray-900 dark:to-gray-800 to-gray-100">
        <img
          src="/placeholder.svg?height=200&width=300"
          alt="Calendario de reservas"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
    </div>
  )
}

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <div className="absolute top-0 inset-x-0  h-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-2xl" />
      <div className="flex flex-row justify-center relative z-20">
        <div className="h-40 w-40 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
          <img
            src="/placeholder.svg?height=150&width=150"
            alt="Notificaciones"
            className="h-32 w-32 object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  )
}
