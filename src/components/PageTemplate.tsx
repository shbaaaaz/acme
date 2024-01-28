import { Hero } from "./Hero"
import { Section } from "./Section"

export const PageTemplate = () => {
  return (
    <main>
        <Section>
        <Hero title='Build high-performance composable applications' description='Equip your team with the industry’s leading native GraphQL Content APIs, Content Federation capabilities and rich set of developer tools, to build truly composable applications.' actionButtons={[{id:"1", text:'Get started'}]}/>
        </Section>
    </main>
  )
}
