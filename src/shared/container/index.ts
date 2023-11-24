import { IMessageRepository } from "@modules/Messages/infra/repositories/IMessageRepository";
import { MessageRepository } from "@modules/Messages/infra/repositories/MessageRepository";
import { IMessageConsumer } from "jobs/IMessageConsumer";
import { MessageConsumer } from "jobs/MessageConsumer";
import { container } from "tsyringe";

container.registerSingleton<IMessageRepository>(
  "MessageRepository",
  MessageRepository,
);

container.registerSingleton<IMessageConsumer>(
  "MessageConsumer",
  MessageConsumer,
);
