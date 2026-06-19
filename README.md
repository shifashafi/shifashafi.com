# Shifa Shafi — Personal Portfolio

A clean, minimal portfolio website built with Next.js, Tailwind CSS, and Shadcn UI. Features an agentic AI chatbot, email contact form, and project showcase.

## Live Demo

🌐 **[shifashafi.com](https://shifashafi.com)**

## Features

- Minimal design with Shadcn UI
- Light/dark mode toggle
- AI chatbot (Shifa Support) — agentic RAG chatbot with Gemini function calling and pgvector retrieval
- Contact form with email integration
- Responsive mobile design
- Projects showcase

## Tech Stack

- Next.js
- Tailwind CSS
- Shadcn UI
- Google Gemini API (chat + embeddings)
- Netlify (hosting)
- Supabase + pgvector (vector storage)
- Resend (email)

## Getting Started

```bash
git clone https://github.com/shifashafi/shifashafi.com
cd shifashafi.com
npm install
cp .env.example .env.local
# add your API keys to .env.local
npm run dev
```

## Environment Variables

```env
GEMINI_API_KEY=your_gemini_key
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
RESEND_API_KEY=your_resend_key
```

## Customization

- Update personal info in `src/data/*.json`
- Replace projects in `src/data/projects.json`
- Replace your resume with `public/resume.pdf`
- Modify chatbot prompt in `src/app/api/chat/route.ts`
- Re-seed the vector database: `npx tsx scripts/seed-content.ts`

## Deployment

1. Push to GitHub
2. Connect repo to Netlify
3. Add environment variables in Netlify dashboard
4. Deploy 🎉

## Costs

- Gemini API: Free tier (1,500 requests/day)
- Supabase: Free tier
- Netlify: Free tier
- Domain: ~$20/year

## Credits

This portfolio is inspired by and built upon [tedawf.com](https://github.com/tedawf/tedawf.com) by [Ted](https://github.com/tedawf). Original design and structure by Ted — customized and extended by Shifa Shafi with a fully free-tier agentic RAG chatbot using Gemini and Supabase pgvector.

---

✨ Feel free to fork and make it your own!

— Shifa