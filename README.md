<p align="center">
  <a href="https://nextjs.org">
    <img src="https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png" height="128">
    <h1 align="center">Next.js</h1>
  </a>
</p>

<p align="center">
  <a aria-label="Vercel logo" href="https://vercel.com">
    <img src="https://img.shields.io/badge/MADE%20BY%20Vercel-000000.svg?style=for-the-badge&logo=Vercel&labelColor=000">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/next">
    <img alt="" src="https://img.shields.io/npm/v/next.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a aria-label="License" href="https://github.com/vercel/next.js/blob/canary/license.md">
    <img alt="" src="https://img.shields.io/npm/l/next.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a aria-label="Join the community on GitHub" href="https://github.com/vercel/next.js/discussions">
    <img alt="" src="https://img.shields.io/badge/Join%20the%20community-blueviolet.svg?style=for-the-badge&logo=Next.js&labelColor=000000&logoWidth=20">
  </a>
</p>

# MeetUps Application

Web-application for sharing meetups

## Project Specifications

-   Full-stack framework built upon React
-   Persists data via [MongoDB](https://www.mongodb.com/)
-   User defined meetup details and images
-   API Routes for creating and fetching data
-   Server-side rendering
-   Deployed on Vercel

---

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
```

Next, implement a new MongoDB connection string to index.js, meetupID/index.js, and api/new-meetup

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

-   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

-   The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

---

## Deploy on Vercel

-   The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

-   Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
