import { Callout } from '@/components/Callout'
import { FeatureSection } from '@/components/FeatureSection'
import { Hero } from '@/components/Hero'
import { Section } from '@/components/Section'
import { CalloutType, FeatureSectionType, HeroType, PageProps } from '@/utils/types'


export const PageTemplate = ({ sections }: PageProps) => {
  return (
    <main>
      {sections.map((section) => (
        <Section key={section.id}>
          {section.blocks.map((block) => {
            switch (block.type) {
              case 'hero':
                return <Hero key={block.id} {...block as HeroType} />;
              case 'feature':
                return <FeatureSection key={block.id} {...block as FeatureSectionType} />
              case 'callout':
                return <Callout key={block.id} {...block as CalloutType} />
              default:
                return null
            }
          })}
        </Section>
      ))}
    </main>
  )
}
