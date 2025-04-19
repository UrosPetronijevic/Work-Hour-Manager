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
my-app/
├── src/
│ ├── app/
│ │ ├── layout.tsx # Root layout
│ │ ├── page.tsx # Landing page (static)
│ │ ├── (auth)/ # Route Group for Authentication
│ │ │ ├── login/
│ │ │ │ └── page.tsx # Login page
│ │ │ ├── signup/
│ │ │ │ └── page.tsx # Signup page
│ │ ├── main/
│ │ │ ├── page.tsx # Main page (conditional rendering)
│ │ │ ├── components/ # Components for main page
│ │ │ │ ├── HomePage.tsx
│ │ │ │ ├── Tables/
│ │ │ │ │ ├── Tables.tsx # Tables main page component
│ │ │ │ │ ├── Table1.tsx # Table 1 Component
│ │ │ │ │ ├── Table2.tsx # Table 2 Component
│ │ │ │ │ ├── Table3.tsx # Table 3 Component
│ │ │ │ │ ├── Table4.tsx # Table 4 Component
│ │ │ │ │ ├── Table5.tsx # Table 5 Component
│ │ │ │ │ ├── Table6.tsx # Table 6 Component
│ │ │ │ │ ├── Table7.tsx # Table 7 Component
│ │ │ │ │ └── Table8.tsx # Table 8 Component
│ │ │ │ ├── Profiles.tsx
│ │ │ │ ├── Graphs/ # Grouping graph components
│ │ │ │ │ ├── Graph1.tsx # First Graph
│ │ │ │ │ └── Graph2.tsx # Second Graph
│ │ │ │ ├── Sakljucarstvo.tsx
│ │ │ │ ├── Yearly.tsx
│ │ │ │ ├── Help.tsx
│ │ │ │ ├── navigation/ # New Navigation directory
│ │ │ │ │ ├── MainNavigation.tsx # Navigation for main page
│ │ │ │ │ └── TableNavigation.tsx # Navigation for tables
│ │ │ │ ├── Authentication/ # New Authentication directory
│ │ │ │ │ ├── LoginForm.tsx # Login Form Component
│ │ │ │ │ └── SignupForm.tsx # Signup Form Component
│ │ ├── styles/ # Styles specific to app
│ │ │ ├── globals.css
│ │ │ └── main.module.css # Example CSS Module
│ ├── classes/ # New Classes directory
│ │ ├── User.ts # Example User Class
│ │ ├── TableData.ts # Example Table Data Class
│ ├── lib/ # Reusable code modules
│ │ ├── api.ts # API client functions (using React Query)
│ │ ├── auth.ts # Authentication related functions
│ │ ├── data-fetching.ts # Configuration of React Query
│ │ └── react-query.ts # React Query setup (client, provider)
│ ├── stores/ # State management (e.g., Zustand)
│ │ ├── main-store.ts # Zustand store for main page state
│ │ └── table-store.ts # Zustand store for table state
│ ├── utils/ # Utility functions
│ │ ├── formatters.ts # Formatting functions (dates, numbers)
│ │ ├── helpers.ts # General helper functions
│ │ └── validators.ts # Validation functions
├── public/
│ └── ...
├── next.config.js
├── package.json
├── tsconfig.json
└── .gitignore
