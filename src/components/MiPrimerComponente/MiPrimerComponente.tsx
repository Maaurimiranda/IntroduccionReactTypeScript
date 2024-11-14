import { FC } from 'react'

//props son variables que se pueden pasar a un componente

interface IPropsMiPrimerComponente {
    text: string
    color: string
    fontSize?: number
}

export const MiPrimerComponente : 
    FC <IPropsMiPrimerComponente> = ({
        text, color, fontSize
    }) => {
  return (
    <div style = {{color: `${color}`, fontSize: `${fontSize}px`}}>
        <p></p>
        {text}
    </div>
  )
}
