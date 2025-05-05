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

////////////////////////////////////////

## FORM:

Okay the form is built of 3 form sections, however in the 3 section there is a "incorect" use of labels
technically, and why is that, well users that are incapable of seing the data in the regular way might not understand why the label apears empty, although they can understand or figure out why that is based on the earlier span and checkbox, nonetheless the "issue" can be easily
fixed by adding a span to the labels that need it and conditional rendering instead of opacity change.
