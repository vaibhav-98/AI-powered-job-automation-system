# AI-powered Job Discovery & Application Assistant

An automated backend system designed for backend developer roles (Node.js ecosystem).

## Features
- Daily job discovery via node-cron, parsing career pages and web searches.
- AI matching to rank jobs based on stack, experience, role, and company.
- Telegram integration for daily digests and on-demand "apply" triggers.
- AI application generator (Resume + Cover Letter tailored to the JD).

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **AI/LLM:** OpenRouter API
- **Search/Fetch:** TinyFish API
- **Notifications:** Telegram Bot API
- **Scheduler:** node-cron

## Setup Instructions
1. Clone the repository and navigate into the folder.
2. Run `npm install`.
3. Copy `.env.example` to `.env` and fill in the required values (MongoDB URL, OpenRouter key, Telegram token, etc.).
4. Start the MongoDB service.
5. Run `npm run dev` to start the development server.

## Usage Guide
- The server will run the cron job daily at 9 AM IST.
- **REST APIs:**
  - `POST /api/v1/user/profile` - Save user resume and preferences.
  - `GET /api/v1/jobs` - Get latest discovered jobs.
  - `POST /api/v1/jobs/:jobId/apply` - Trigger application generation.
- **Telegram Bot:**
  - Start the bot and get your Chat ID.
  - The bot will send daily job matches.
  - Reply with `/apply <jobId>` to trigger document generation.

Generated applications are stored in `./job-applications/<company>-<date>/`.
