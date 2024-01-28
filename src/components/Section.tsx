import React from "react"

type SectionProps = {
    children?: React.ReactNode
}
export const Section = ({ children }: SectionProps) => {
    return (
      <section className='flex flex-col gap-16 md:gap-20 py-12 px-8 md:py-24'>
        {children}
      </section>
    )
  }
  