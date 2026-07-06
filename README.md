# shinan.dev

Personal portfolio site for Mohamed Shinan, built with Next.js, React, TypeScript, and Tailwind CSS.

## Getting Started

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env.local
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

The contact form posts to `app/api/contact/route.ts` and sends email through Resend.

```bash
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
CV_ACCESS_SECRET=
CV_SITE_URL=https://shinan.dev
CV_REFERENCES_JSON=[]
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run typecheck
npm run cv:invite -- "Company Name" 7
```

`cv:invite` creates a signed CV invitation link that remains valid for the
specified number of days. Opening it creates a 30-minute secure viewing session.

## Project Structure

```text
app/
  api/contact/      Contact form API route
  components/       Shared UI sections and layout pieces
  */page.tsx        App Router pages
public/             Static assets
```
