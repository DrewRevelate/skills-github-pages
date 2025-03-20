# Full Throttle Revenue - Interactive Presentation

A dynamic, F1 racing-themed presentation on Revenue Operations (RevOps) and Automation designed for undergraduate business students.

## Features

- 🏎️ F1 racing-inspired visuals and animations
- 📊 Interactive polling system with Supabase integration
- ⏱️ Animated timeline for the evolution of sales tech
- 📱 Responsive design that works on multiple devices
- 🔄 Linear navigation that supports presentation flow
- 📝 Contact form with database integration

## Live Demo

Visit [revops-presentation.revelateops.com](https://revops-presentation.revelateops.com) to see the presentation in action.

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn
- Supabase account (optional, for polling and contact form)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DrewRevelate/full-throttle-presentation-nextjs.git
   cd full-throttle-presentation-nextjs
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file with your Supabase credentials (optional):
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the presentation.

## Supabase Setup (Optional)

To enable the interactive polling and contact form functionality:

1. Create a free Supabase account at [supabase.com](https://supabase.com)
2. Create a new project
3. Create the following tables:
   - `poll_results` with columns:
     - `id` (int8, primary key)
     - `poll_id` (text)
     - `option_id` (text)
     - `count` (int4)
   - `contacts` with columns:
     - `id` (int8, primary key)
     - `name` (text)
     - `email` (text)
     - `company` (text, nullable)
     - `message` (text, nullable)
     - `interest` (text)
     - `source` (text)
     - `created_at` (timestamptz, default: now())
4. Add your Supabase URL and anon key to the `.env.local` file

## Deployment

### Deploying to Vercel

1. Fork this repository
2. Connect to Vercel
3. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy

### Static Export

You can also generate a static export:

```bash
npm run build
# or
yarn build
```

The exported files will be in the `out` directory.

## Presentation Structure

1. **Introduction**: Main title slide with F1-themed animations
2. **Presenter Profile**: Information about the presenter
3. **Revenue Acceleration**: Overview of RevOps with interactive polling
4. **Sales Tech Evolution**: Interactive timeline of sales technology
5. **Automation Solutions**: Key automation opportunities
6. **Human vs Automation**: Balance between human and automated tasks
7. **Future of Sales Tech**: Emerging trends and predictions
8. **Contact Information**: Contact details and form

## Keyboard Navigation

Use the arrow keys to navigate between slides:
- Right arrow or Down arrow: Next slide
- Left arrow or Up arrow: Previous slide

## Mobile Navigation

Swipe left or right to navigate between slides.

## Customization

Edit the files in the `pages/slides` directory to modify content. Each slide is a separate file.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Created by Drew Lambert, Revelate Operations LLC
- Built with Next.js and Framer Motion
- Data stored with Supabase
