import { z } from "zod";

export const schemaScores = z.object({
  points: z.number().int().min(0),
  game: z.string(),
  playerName: z.string(),
  level: z.number().int().positive().optional(),
  duration: z.number().int().positive().optional(),
});



export const schemaLeaderboar = z.object({
    game:z.enum(['Tetris','GTA'])
})










export function createMidle(schema,typeReq) {
  return (req, res, next) => {
    const result = schema.safeParse(req[typeReq]);
    if (!result.success) {
      return next(result.error)
    }
    req[typeReq] = result.data;
    next()
  };
}
