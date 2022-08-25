import React from 'react'
 type Props = {
  title:string
 }

export default function Title({ title }: Props) {
  return (
    <div>
      <h3 className="anime-slider-title">{title}</h3>
    </div>
  )
}
