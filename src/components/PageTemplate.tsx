import { Callout } from "./Callout"
import { Hero } from "./Hero"
import { Section } from "./Section"

export const PageTemplate = () => {
  return (
    <main>
        <Section>
        <Hero title='Build high-performance composable applications' description='Equip your team with the industry’s leading native GraphQL Content APIs, Content Federation capabilities and rich set of developer tools, to build truly composable applications.' actionButtons={[{id:"1", text:'Get started'}]}/>
        </Section>
        <Section>
          <Callout title='Start your 30-day free trial' description='Join over 4,000+ startups already growing with us.' actionButton={{text: "Get started"}} />
        </Section>
    </main>
  )
}
