# Acme

Live link: [acme-hygraph.vercel.app](acme-hygraph.vercel.app)

## Description

This is a marketing website featuring a dynamically rendered landing page sourced from a GraphQL API first headless CMS - Hygraph. It serves as a showcase for content managed and delivered through a headless CMS.

## Technologies

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GraphQL](https://graphql.org/)
- [Hygraph (previously GraphCMS)](https://hygraph.com/)

## Setup

- **Clone the repository:**

  ```bash
    git clone https://github.com/shbaaaaz/acme.git
  ```

- **Add environment variables:**
  Create a .env file in the root of your project and add CMS API endpoint (GraphQL API):

  ```
    NEXT_PUBLIC_CMS_ENDPOINT=https://your-cms-endpoint
  ```

- **Install dependencies:**

  ```bash
    cd acme
    npm install
  ```

- **Run the development server:**

  ```bash
    npm run dev
  ```

Open http://localhost:3000 in your browser.

## Folder Structure

```
📦src
┣ 📂app
┃ ┣ 📜error.tsx
┃ ┣ 📜favicon.ico
┃ ┣ 📜globals.css
┃ ┣ 📜layout.tsx
┃ ┗ 📜page.tsx #entry point of the application
┣ 📂components # This folder contains all the components
┃ ┣ 📜Callout.tsx
┃ ┣ 📜Cta.tsx
┃ ┣ 📜FeatureSection.tsx
┃ ┣ 📜Footer.tsx
┃ ┣ 📜Header.tsx
┃ ┣ 📜Hero.tsx
┃ ┣ 📜PageTemplate.tsx
┃ ┣ 📜Section.tsx
┃ ┗ 📜YouTubePlayer.tsx
┣ 📂lib
┃ ┣ 📂queries
┃ ┃ ┗ 📜query.ts # This file contains all the GraphQL queries.
┃ ┗ 📜cmsData.ts # GraphQL API call are made in this file to fetch data from Hygraph CMS
┗ 📂utils
┃ ┣ 📜enums.ts # This file contains constant values
┃ ┗ 📜types.ts # This file contains inetrfaces / types used for the data across all the components.
```
