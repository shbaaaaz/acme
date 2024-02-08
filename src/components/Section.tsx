import React from "react"

type SectionProps = {
    children?: React.ReactNode
}
export const Section = ({ children }: SectionProps) => {
    return (
      <section className='flex flex-col gap-16 md:gap-20 py-12 px-8 md:px-0 md:py-24'>
        <div className='md:px-20'>
          {children}
        </div>
      </section>
    )
  }
  