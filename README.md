This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Stucture:
src/
├── app/
│ ├── (auth)/ # Route Group for Authentication Pages
│ │ ├── sign-in/
│ │ │ └── page.tsx # Login Page
│ │ ├── sign-up/
│ │ │ └── page.tsx # Registration Page
│ │ └── layout.tsx # Layout for authentication pages (optional - different look)
│ ├── main/ # Route Group for Main Application (After Login)
│ │ ├── page.tsx # The MainPage component
│ │ └── layout.tsx # Layout for the authenticated app
│ ├── page.tsx # Landing page (Sign-in/Sign-up options)
│ ├── layout.tsx # Root layout for the entire app
│ └── global.css # Global CSS styles
├── Components/
│ ├── HomePage/
│ │ └── HomePage.tsx
│ ├── Navigation/
│ │ └── NavigationMain.tsx
│ ├── Profiles/
│ │ └── Profiles.tsx
│ ├── Tables/
│ │ └── Tables.tsx
│ ├── Sakljucarstvo/
│ │ └── Sakljucarstvo.tsx
│ ├── Graphs/
│ │ └── Graphs.tsx
│ ├── Yearly/
│ │ └── Yearly.tsx
│ └── Help/
│ │ └── Help.tsx
├── stores/
│ ├── employeesStore.ts # Zustand store for employees data
│ ├── sakljucariStore.ts # Zustand store for sakljucari data
│ ├── ekspozitureSakljucariStore.ts # Zustand store for ekspozitureSakljucari data
│ ├── driversStore.ts # Zustand store for drivers data
│ └── commissionsStore.ts # Zustand store for commissions data
├── lib/
│ └── supabaseClient.ts
├── public/ # Static assets (images, fonts, etc.)
├── .env.local # Environment variables
├── next.config.js # Next.js configuration
├── package.json # Project dependencies
├── README.md # Project description
└── tsconfig.json # TypeScript configuration
