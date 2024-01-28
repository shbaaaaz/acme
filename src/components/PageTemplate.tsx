import { Callout } from "./Callout"
import { FeatureSection } from "./FeatureSection"
import { Hero } from "./Hero"
import { Section } from "./Section"

export const PageTemplate = () => {
  return (
    <main>
        <Section>
        <Hero title='Build high-performance composable applications' description='Equip your team with the industry’s leading native GraphQL Content APIs, Content Federation capabilities and rich set of developer tools, to build truly composable applications.' actionButtons={[{id:"1", text:'Get started'}]}/>
        </Section>
        <Section>
          <FeatureSection label='VERSATILE' title="Works with all modern web technologies" description="As a composable and headless platform, Acme works with all your preferred frontend frameworks, existing systems, GraphQL and REST APIs." cta={{ text: "View GitHub repository"}} media={{image: {url: "https://media.graphassets.com/cktbkWehT4Cxof209pQv", width: 480, height: 320}, altText: "test"}}/>

          <FeatureSection title="Product roundup Q2 2023" description="Keep your customers in the flow by embedding help articles right on your website. With Beacon, they never have to leave the page to find an answer." cta={{ text: "View GitHub repository"}} media={{youTubeVideoId:"znkZ8X_7tLA"}} mediaAlignment="left"/>
        </Section>
        <Section>
          <Callout title='Start your 30-day free trial' description='Join over 4,000+ startups already growing with us.' actionButton={{text: "Get started"}} />
        </Section>
    </main>
  )
}
