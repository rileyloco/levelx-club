import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/trainers")({
  beforeLoad: () => {
    throw redirect({ to: "/locations/$slug", params: { slug: "toowong" } });
  },
  component: () => null,
});
