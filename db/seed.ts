import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd());

async function seed() {
  const { db } = await import("./index");
  const { projects } = await import("./schema");
  await db
    .insert(projects)
    .values([
      {
        slug: "kawaii-count",
        title: "Kawaii Count",
        year: 2025,
        summary:
          "Kawaii count is a restaurant Inventory System application that is designed for cafes.",
      },
      {
        slug: "whack-a-whacker",
        title: "WhackaWhack",
        year: 2025,
        summary:
          "WhackAWhack is java game application that takes inspiration from Uncanny cat golf game and whack-a-mole.",
      },
      {
        slug: "aniyoka",
        title: "Aniyoka",
        year: 2026,
        summary:
          "AniYoka is an AniList tracker that helps you discover and organize the anime you watch.",
      },
    ])
    .onConflictDoNothing();
  console.log("Seeded projects");
  process.exit(0);
}
