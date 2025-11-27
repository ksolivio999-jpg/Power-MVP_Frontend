# PowerMap Frontend

Next.js frontend application for PowerMap with TailwindCSS and shadcn/ui components.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: TailwindCSS + shadcn/ui
- **Language**: TypeScript
- **State Management**: React Context API + Custom Hooks
- **Authentication**: JWT (backend API)
- **Testing**: Playwright (E2E)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Backend API running on `http://localhost:3000/api`

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run E2E tests
npx playwright test

# Run E2E tests with UI
npx playwright test --ui
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── auth/
│   │   ├── login/           # Login page
│   │   └── register/        # Registration page
│   ├── dashboard/           # Main dashboard
│   ├── location-detail/     # Location details
│   ├── panel-builder/       # Panel builder interface
│   ├── qr-code/             # QR code management
│   ├── public-view/         # Public view (no auth)
│   ├── profile/             # User profile
│   ├── layout.tsx           # Root layout with navigation
│   └── page.tsx             # Home/landing page
├── components/
│   ├── ui/                  # shadcn/ui components
│   └── navigation/          # Navigation components
├── contexts/
│   └── AuthContext.tsx      # Authentication context
├── hooks/
│   └── useAuth.ts           # Auth hook wrapper
├── lib/
│   ├── api.ts               # API client utilities
│   ├── auth.ts              # JWT token management
│   └── utils.ts             # Utility functions
└── types/
    └── auth.ts              # TypeScript type definitions

e2e/                         # Playwright E2E tests
```

## Routes

- `/` - Landing/Home page
- `/dashboard` - Main dashboard (protected)
- `/location-detail/[id]` - Individual location details (protected)
- `/panel-builder` - Panel creation interface (protected)
- `/qr-code` - QR code management (protected)
- `/public-view/[id]` - Public-facing view (no auth required)
- `/auth/login` - Login page
- `/auth/register` - Registration page
- `/profile` - User profile (protected)

## Authentication

The app uses JWT tokens stored in localStorage for authentication:

1. Login/Register sends credentials to `/api/auth/login` or `/api/auth/register`
2. JWT token is stored in localStorage
3. `AuthContext` manages auth state globally
4. Protected routes check auth status via `useAuth` hook
5. API client automatically adds Authorization header to requests

## API Integration

Base URL: `http://localhost:3000/api`

The API client (`src/lib/api.ts`) handles:
- Automatic JWT token inclusion in headers
- Global error handling (401/403 redirects)
- Type-safe request methods (GET, POST, PUT, DELETE)

## Development

### Adding shadcn/ui Components

```bash
npx shadcn@latest add [component-name]
```

### Key Conventions

- Use **App Router** (`app/` directory), not Pages Router
- Server Components by default; add `"use client"` only when needed
- Client Components required for: forms, context, interactivity, hooks
- Place shadcn/ui components in `components/ui/`
- Use TailwindCSS utility classes for styling
- Follow Next.js file-based routing conventions

## Testing

E2E tests are located in the `e2e/` directory using Playwright.

```bash
# Run all tests
npx playwright test

# Run tests in UI mode
npx playwright test --ui

# Run specific test file
npx playwright test e2e/auth.spec.ts
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [TailwindCSS Documentation](https://tailwindcss.com)
- [Playwright Documentation](https://playwright.dev)
