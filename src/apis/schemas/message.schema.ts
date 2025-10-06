import {z} from "zod";

export const messageRequestSchema = z.object({
  userId: z.string(),
  chat: z.string(),
});

export const messageResponseSchema = z.object({
  messageId: z.string(),
  userId: z.string(),
  nickName: z.string(),
  chat: z.string(),
});

export const messageListResponseSchema = z.array(messageResponseSchema);

export type MessageRequestDto = z.infer<typeof messageRequestSchema>;
export type MessageListResponseDto = z.infer<typeof messageListResponseSchema>;