import { Message } from "@prisma/client";

export interface IMessageConsumer {
  startConsuming(): Promise<Message[]>;
}
