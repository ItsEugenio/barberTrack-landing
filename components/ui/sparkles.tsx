"use client"
import { useId } from "react"

export const SparklesCore = (props: {
  id?: string
  background?: string
  minSize?: number
  maxSize?: number
  particleDensity?: number
  className?: string
  particleColor?: string
}) => {
  const { id, background, minSize, maxSize, particleDensity, className, particleColor } = props
  const generateId = useId()
  return (
    <div className={className}>
      <svg
        className="animate-pulse"
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.8">
          <circle cx="100" cy="100" r="1" fill={particleColor || "#FCD34D"}>
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="150" r="1.5" fill={particleColor || "#FCD34D"}>
            <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="300" cy="80" r="1" fill={particleColor || "#FCD34D"}>
            <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="150" cy="250" r="2" fill={particleColor || "#FCD34D"}>
            <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="350" cy="200" r="1" fill={particleColor || "#FCD34D"}>
            <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  )
}
