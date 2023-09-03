import { z } from "zod";

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const teamRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  create: privateProcedure
    .input(
      z.object({
        name: z.string().min(1).max(1000),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const team = await ctx.prisma.team.create({
        data: {
          name: input.name,
        },
      });
      return team;
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.team.findMany();
  }),
});
