import { prisma } from "../lib/prisma";

async function main() {
  await prisma.list.createMany({
    data: [], // optional: clear via deleteMany below instead
  });

  // optional reset (safe for dev)
  await prisma.task.deleteMany();
  await prisma.list.deleteMany();

  await prisma.list.create({
    data: {
      title: "Frontend",
      description: "UI and client-side work",
      createdAt: new Date("2026-05-01T10:00:00.000Z"),
      tasks: {
        create: [
          {
            title: "Login page",
            description: "Build form + validation",
            status: "pendente",
            createdAt: new Date("2026-05-01T10:10:00.000Z"),
            finishedAt: new Date("2026-05-02T12:00:00.000Z"),
          },
          {
            title: "Dashboard",
            description: "Layout and widgets",
            status: "andamento",
            createdAt: new Date("2026-05-01T11:00:00.000Z"),
            finishedAt: new Date("2026-05-06T18:00:00.000Z"),
          },
          {
            title: "Navbar",
            description: "Responsive navigation",
            status: "concluida",
            createdAt: new Date("2026-05-01T12:00:00.000Z"),
            finishedAt: new Date("2026-05-01T15:00:00.000Z"),
          },
        ],
      },
    },
  });

  await prisma.list.create({
    data: {
      title: "Backend",
      description: "API and database",
      createdAt: new Date("2026-05-02T09:00:00.000Z"),
      tasks: {
        create: [
          {
            title: "Auth service",
            description: "JWT + refresh tokens",
            status: "andamento",
            createdAt: new Date("2026-05-02T09:30:00.000Z"),
            finishedAt: new Date("2026-05-07T17:00:00.000Z"),
          },
          {
            title: "CRUD tasks",
            description: "Endpoints with validation",
            status: "pendente",
            createdAt: new Date("2026-05-02T10:00:00.000Z"),
            finishedAt: new Date("2026-05-08T17:00:00.000Z"),
          },
          {
            title: "Prisma schema",
            description: "Models and relations",
            status: "concluida",
            createdAt: new Date("2026-05-02T11:00:00.000Z"),
            finishedAt: new Date("2026-05-02T13:00:00.000Z"),
          },
        ],
      },
    },
  });

  await prisma.list.create({
    data: {
      title: "DevOps",
      description: "Infra and delivery",
      createdAt: new Date("2026-05-03T08:00:00.000Z"),
      tasks: {
        create: [
          {
            title: "Dockerize API",
            description: "App + Postgres via compose",
            status: "andamento",
            createdAt: new Date("2026-05-03T08:30:00.000Z"),
            finishedAt: new Date("2026-05-06T20:00:00.000Z"),
          },
          {
            title: "CI pipeline",
            description: "Lint, test, build",
            status: "pendente",
            createdAt: new Date("2026-05-03T09:00:00.000Z"),
            finishedAt: new Date("2026-05-09T20:00:00.000Z"),
          },
          {
            title: "Deploy staging",
            description: "Provision and release",
            status: "concluida",
            createdAt: new Date("2026-05-03T10:00:00.000Z"),
            finishedAt: new Date("2026-05-04T14:00:00.000Z"),
          },
        ],
      },
    },
  });

  console.log("Seed completed");
}

export default main;
