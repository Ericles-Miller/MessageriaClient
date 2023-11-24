import { PrismaClient } from "@prisma/client";

import { IMessageResponseDTO } from "../DTOs/IMessageResponseDTO";
import { IMessageRepository } from "./IMessageRepository";

export class MessageRepository implements IMessageRepository {
  private repository = new PrismaClient().message;

  async create({
    description,
    email,
    username,
  }: IMessageResponseDTO): Promise<void> {
    await this.repository.create({
      data: {
        description,
        email,
        username,
      },
    });
  }
}
