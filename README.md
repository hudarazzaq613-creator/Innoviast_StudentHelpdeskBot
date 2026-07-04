# Student Helpdesk AI

Student Helpdesk AI is a full-stack Next.js application that answers university helpdesk questions about admissions, fees, scholarships, attendance, examinations, departments, library, hostel, transport, and campus services.

## Tech Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Groq API

## Getting Started

Install dependencies:

```bash
npm install
```

Create `.env.local`:

```bash
GROQ_API_KEY=your_groq_api_key
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Features

- Responsive landing page
- AI chat interface
- Suggested questions
- Typing indicator
- Latest 10-message conversation context
- Server-side Groq API integration
- Local JSON knowledge base
- Scope enforcement for university-only queries
- Light and dark theme support

## API

`POST /api/chat`

Request:

```json
{
  "message": "What is the admission process?",
  "history": []
}
```

Success response:

```json
{
  "success": true,
  "reply": "The admission process consists of..."
}
```

## Deployment

Deploy on Vercel and add `GROQ_API_KEY` in project environment variables.
