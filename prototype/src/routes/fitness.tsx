import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/fitness")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "the-club" });
  },
  component: () => null,
});
