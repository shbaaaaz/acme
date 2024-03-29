import { gql } from 'graphql-request';

export const GET_SEO_DETAILS = gql`query seo($title: String!) {
  content: page(where: {title: $title}) {
    title
    metadata {
      pageTitle
      pageDescription
      ogImage {
        url
      }
    }
  }
}
`

export const GET_PAGE_DETAILS = gql`
  query Page($title: String!) {
    content: page(where: { title: $title }) {
      id
      title
      sections {
        id
        blocks {
          ... on Hero {
            id
            title
            description
            actionButtons {
              id
              text
              size
            }
            type
          }
          ... on Callout {
            id
            title
            description
            actionButton {
              id
              text
              size
            }
            type
          }
          ... on FeatureSection {
            id
            label
            title
            cta: actionButton {
              id
              text
              size
            }
            description
            type
            media {
              ... on Image {
                id
                altText
                image {
                  id
                  url
                  mimeType
                  width
                  height
                }
              }
              ... on Video {
                id
                youTubeVideoId
              }
            }
            mediaAlignment
          }
        }
      }
    }
  }
`
