import { type DynamicRoute } from "next-typesafe-url";
import { z } from "zod";

export const Route = {
  searchParams: z.object({
    query: z.string().optional(),
  }),
} satisfies DynamicRoute;

export type RouteType = typeof Route;
