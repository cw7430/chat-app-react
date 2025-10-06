import {z} from "zod";

export const userRequestSchema = z.object({
  name: z.string().nonempty()
})

export const userResponseSchema = z.object({
  userId: z.string(),
  nickName: z.string(),
});

export type UserRequestDto = z.infer<typeof userRequestSchema>;

export type UserResponseDto = z.infer<typeof userResponseSchema>;