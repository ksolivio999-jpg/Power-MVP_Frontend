# PowerMap Frontend - AI Coding Agent Instructions

## Project Overview
Next.js frontend application for PowerMap with TailwindCSS and shadcn/ui components. This is a fresh setup requiring initial scaffolding.

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: TailwindCSS + shadcn/ui component library
- **Language**: TypeScript
- **State Management**: React Context API + Custom Hooks
- **Authentication**: JWT (backend API)
- **Testing**: Playwright (E2E)

## Project Structure (To Be Created)
```
powermap-frontend/
├── app/
│   ├── layout.tsx              # Root layout with global navigation
│   ├── page.tsx                # Home/Landing page
│   ├── dashboard/              # Dashboard page
│   ├── location-detail/        # Location detail pages
│   ├── panel-builder/          # Panel builder interface
│   ├── qr-code/                # QR code management
│   ├── public-view/            # Public view pages (unauthenticated)
│   ├── auth/
│   │   ├── login/              # Login page
│   │   └── register/           # Registration page
│   └── profile/                # User profile page
├── components/
│   ├── ui/                     # shadcn/ui components
│   └── navigation/             # Navigation components
├── contexts/                   # React Context providers
│   └── AuthContext.tsx         # Authentication context
├── hooks/                      # Custom React hooks
│   └── useAuth.ts              # Auth hook wrapper
├── lib/
│   ├── api.ts                  # API client utilities
│   └── auth.ts                 # JWT token management
├── types/                      # TypeScript type definitions
├── public/                     # Static assets
└── e2e/                        # Playwright tests
```

## Setup Commands
```bash
# Initial project creation
npx create-next-app@latest . --typescript --tailwind --app --use-npm

# Install shadcn/ui
npx shadcn-ui@latest init

# Install Playwright
npm install -D @playwright/test
npx playwright install

# Add common shadcn/ui components
npx shadcn-ui@latest add button card input form label
```

## API Integration
- **Base URL**: `http://localhost:3000/api`
- **Authentication**: JWT tokens stored in localStorage/cookies
- **Pattern**: Create API client in `lib/api.ts` with interceptors for auth headers
- **Error handling**: Implement global error handling for 401/403 responses

## Authentication Flow
1. Login/Register sends credentials to `/api/auth/login` or `/api/auth/register`
2. Store JWT token in localStorage or httpOnly cookie
3. Use AuthContext to manage auth state globally
4. Protect routes using middleware or layout-level checks
5. Add token to all authenticated API requests via Authorization header

## State Management Pattern
- Use React Context for global state (auth, theme, user data)
- Custom hooks (`useAuth`, `useUser`) wrap context consumers
- Local state with `useState` for component-specific data
- Server state fetching in Server Components where possible

## Route Structure
- `/` - Landing/Home page
- `/dashboard` - Main dashboard (protected)
- `/location-detail/[id]` - Individual location details (protected)
- `/panel-builder` - Panel creation interface (protected)
- `/qr-code` - QR code management (protected)
- `/public-view/[id]` - Public-facing view (no auth required)
- `/auth/login` - Login page
- `/auth/register` - Registration page
- `/profile` - User profile (protected)

## Development Workflow
- **Dev server**: `npm run dev` (frontend on http://localhost:3000)
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Test**: `npx playwright test` (E2E tests)
- **Test UI**: `npx playwright test --ui` (interactive mode)

## Key Conventions
- Use **App Router** (`app/` directory), not Pages Router
- Server Components by default; add `"use client"` only when needed (forms, context, interactivity)
- Protected routes: Check auth in layout.tsx or use middleware
- API calls: Use `fetch` with try/catch, handle errors consistently
- Place shadcn/ui components in `components/ui/`
- Use TailwindCSS utility classes for styling
- Follow Next.js file-based routing conventions

## Navigation Structure
- Implement global navigation in `app/layout.tsx` or `components/navigation/`
- Show/hide nav items based on auth state from AuthContext
- Include links to: Dashboard, Panel Builder, QR Code, Profile
- Mobile-responsive hamburger menu pattern

## Testing Strategy
- **E2E tests** with Playwright in `e2e/` directory
- Test critical flows: login, registration, protected route access
- Test public vs authenticated views
- Mock API responses for consistent testing

## When Working on This Project
1. Always use TypeScript for type safety
2. Client Components (`"use client"`) needed for: forms, context providers/consumers, onClick handlers
3. Use shadcn/ui components before creating custom components
4. Wrap protected routes with auth checks (redirect to /auth/login if not authenticated)
5. Store JWT tokens securely (httpOnly cookies preferred over localStorage)
6. Handle API errors gracefully with user-friendly messages
7. Keep components small and composable
8. Use meaningful names: `useAuth()` not `useA()`, `LocationCard` not `Card1`
