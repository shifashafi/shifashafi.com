/**
 * seed-content.ts
 *
 * Run this ONCE to populate your Supabase pgvector table with your
 * portfolio content (projects, experience, education, general info).
 *
 * Usage:
 *   npx tsx scripts/seed-content.ts
 *
 * Requires in .env.local:
 *   SUPABASE_URL=...
 *   SUPABASE_SERVICE_ROLE_KEY=...   (service role, NOT anon key - needed to insert)
 *   GEMINI_API_KEY=...
 */

import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import ws from "ws";

// Next.js convention uses .env.local, but plain dotenv defaults to .env —
// load .env.local explicitly so this script picks up the same vars Next.js uses.
dotenv.config({ path: ".env.local" });

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY!;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !GEMINI_API_KEY) {
  throw new Error(
    "Missing required env vars: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, GEMINI_API_KEY"
  );
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  realtime: {
    transport: ws as unknown as new (...args: unknown[]) => WebSocket,
  },
});

// ---- 1. Define your content chunks here ----
// Each chunk should be a focused, self-contained piece of info.
// Smaller, focused chunks retrieve better than one giant blob.

type Chunk = { content_type: string; title: string; content: string };

const chunks: Chunk[] = [
  {
    content_type: "general",
    title: "About Shifa",
    content:
      "Shifa Shafi is a Full-Stack AI Engineer based in Sharjah, UAE. She holds an M.Tech in Computer Science and Engineering from Government Engineering College Thrissur, Kerala, where she graduated as Batch Topper with a GPA of 3.73/4. She also holds a B.Tech in Electronics and Communication Engineering from Government Engineering College Palakkad, Kerala, with a GPA of 3.19/4. She is currently on a visitor visa in the UAE and is an immediate joiner. Contact: iamshifashafi@gmail.com.",
  },
  {
    content_type: "experience",
    title: "Full-Stack AI Engineer at StackMind",
    content:
      "Shifa works as a Full-Stack AI Engineer at StackMind (remote) since September 2025. She spearheads development of full-stack web applications with advanced AI integrations, manages the end-to-end project lifecycle from requirement gathering to cloud deployment, and architects secure backends with JWT authentication, React frontends, and optimized PostgreSQL databases for complex AI data flows.",
  },
  {
    content_type: "experience",
    title: "Programmer Analyst Trainee at Cognizant",
    content:
      "From May 2025 to July 2025, Shifa completed an intensive training program at Cognizant Technology Solutions in Chennai, Tamil Nadu, focused on ASP.NET Core Web API and enterprise-level software development. She applied .NET stack principles to internal projects within large-scale, service-oriented architectures.",
  },
  {
    content_type: "experience",
    title: "AI Research Intern at UL Research (ULCCS Group)",
    content:
      "From June 2024 to October 2024, Shifa worked as an AI Research Intern at UL Research (ULCCS Group) in Kozhikode, Kerala. She contributed to Bioinformatics R&D focused on AI-driven drug discovery and collaborated on multi-modal architectures to improve prediction reliability for healthcare applications.",
  },
  {
    content_type: "experience",
    title: "AI Intern at The VeganHut",
    content:
      "From November 2023 to April 2025, Shifa worked remotely as an AI Intern for The VeganHut, a company based in the Netherlands. She developed an AI-driven prototype for automated hydroponics using real-time sensor data, and built a deep learning model to predict nutrient uptake values, bridging hardware sensors with predictive software analysis.",
  },
  {
    content_type: "project",
    title: "License Plate Detection System (IEEE Published)",
    content:
      "Shifa built a high-accuracy, low-cost Computer Vision system for license plate detection and vehicle occupancy monitoring, in collaboration with Kerala Police Control. The system implements adversarial attack mitigation and environmental noise handling, achieving 92.79% accuracy. The work was published at the IEEE 4th International Conference on Advances in Computing, Communication, Embedded and Secure Systems, under the title 'Reinforcing License Plate Detection Against Adversarial Attacks and Environmental Disruptions'. Tech used: YOLO, OCR, Python, OpenCV, Deep Learning.",
  },
  {
    content_type: "project",
    title: "Car Wash Management Platform",
    content:
      "Shifa developed a comprehensive car wash management platform featuring an admin dashboard for task verification, staff tracking, and automated report generation. It integrates real-time availability and task management into a unified web interface, streamlining workshop operations end-to-end. Built with Node.js, Express.js, React.js, Vite, PostgreSQL, REST APIs, and JWT authentication.",
  },
  {
    content_type: "project",
    title: "AI Hydroponics System",
    content:
      "Built during her internship at The VeganHut, this AI-driven prototype automates hydroponics using real-time sensor data. It includes a deep learning model that predicts nutrient uptake values, bridging hardware sensors with predictive software analysis. Built with Python and TensorFlow.",
  },
  {
    content_type: "education",
    title: "M.Tech in Computer Science and Engineering",
    content:
      "Shifa completed her Master of Technology in Computer Science and Engineering at Government Engineering College Thrissur, Kerala (NBA Accredited), from September 2023 to June 2025. She graduated as Batch Topper with a GPA of 3.73/4. Relevant coursework included Machine Learning, DBMS, Data Structures, and Computer Networks.",
  },
  {
    content_type: "education",
    title: "B.Tech in Electronics and Communication Engineering",
    content:
      "Shifa completed her Bachelor of Technology in Electronics and Communication Engineering at Government Engineering College Palakkad, Kerala (NBA Accredited), from August 2019 to June 2023, with a GPA of 3.19/4. Relevant coursework included Digital System Design, Microwave and Antenna, Machine Learning, and Control Systems.",
  },
  {
    content_type: "general",
    title: "Technical Skills",
    content:
      "Shifa's technical skills include: Languages - Python, SQL, C#, JavaScript, C, HTML5, CSS3. Frameworks and Libraries - TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy, OpenCV, YOLO, OCR, LangChain, React.js, Node.js. Databases - PostgreSQL, SQL Server, MySQL, SQLite. Backend and APIs - ASP.NET Core Web API, Entity Framework, Dapper, JWT Authentication. DevOps - Docker, CI/CD, Microservices. Tools - Git, GitHub, VS Code, Postman, Figma, Canva, Jira, n8n, Jupyter Notebook, Google Colab.",
  },
  {
    content_type: "general",
    title: "Certifications and Achievements",
    content:
      "Shifa holds certifications in AI Programming with Python (AWS and Udacity), GenAI Powered Data Analytics (Tata), and GenAI Academy (Google Cloud's Gen AI Exchange Program, powered by Hack2skill). She is an AWS AI/ML Scholarship recipient. She served as Fine Arts Secretary of the College Union at GEC Palakkad and as Secretary of the ComSoc Chapter, IEEE Student Branch at GEC Palakkad. She has participated in the Akamai EmpowHer Codeathon 3.0 and the ET AI Hackathon 2.0.",
  },
];

// ---- 2. Embed each chunk using Gemini's embedding API ----
// Note: gemini-embedding-001 only auto-normalizes at the full 3072 dimensions.
// Since we request 768 dimensions (for smaller/cheaper storage), we manually
// L2-normalize so cosine similarity behaves correctly and consistently.
function l2Normalize(vec: number[]): number[] {
  const magnitude = Math.sqrt(vec.reduce((sum, v) => sum + v * v, 0));
  return magnitude === 0 ? vec : vec.map((v) => v / magnitude);
}

async function embedText(text: string): Promise<number[]> {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "models/gemini-embedding-001",
        content: { parts: [{ text }] },
        outputDimensionality: 768, // must match the vector(768) column in Supabase
      }),
    }
  );

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Gemini embedding failed: ${err}`);
  }

  const data = await response.json();
  return l2Normalize(data.embedding.values as number[]);
}

// ---- 3. Insert into Supabase ----
async function seed() {
  console.log(`Seeding ${chunks.length} chunks...`);

  for (const chunk of chunks) {
    console.log(`Embedding: ${chunk.title}`);
    const embedding = await embedText(`${chunk.title}\n\n${chunk.content}`);

    const { error } = await supabase.from("portfolio_content").insert({
      content_type: chunk.content_type,
      title: chunk.title,
      content: chunk.content,
      embedding,
    });

    if (error) {
      console.error(`Failed to insert "${chunk.title}":`, error.message);
    } else {
      console.log(`Inserted: ${chunk.title}`);
    }

    // Small delay to respect rate limits
    await new Promise((r) => setTimeout(r, 300));
  }

  console.log("Done seeding!");
}

seed().catch(console.error);