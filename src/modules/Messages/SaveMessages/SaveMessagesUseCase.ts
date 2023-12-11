import { IMessageConsumer } from "jobs/IMessageConsumer";
import { MessageConsumer } from "jobs/MessageConsumer";
import { inject, injectable } from "tsyringe";

import { IMessageRepository } from "../infra/repositories/IMessageRepository";
import { MessageRepository } from "../infra/repositories/MessageRepository";

@injectable()
export class SaveMessageUseCase {
  constructor(
    @inject(MessageRepository)
    private messageRepository: IMessageRepository,

    @inject(MessageConsumer)
    private messageConsumer: IMessageConsumer,
  ) {}

  async execute(): Promise<void> {
    const messages = await this.messageConsumer.startConsuming();
    console.log(messages.length);

    Promise.all(
      messages.map(async (message) => {
        const { email, username, description } = message;
        await this.messageRepository.create({ email, username, description });
      }),
    );
  }
}
