/* eslint-disable no-async-promise-executor */
import { Message } from "@prisma/client";
import * as amqp from "amqplib";

import { IMessageConsumer } from "./IMessageConsumer";

export class MessageConsumer implements IMessageConsumer {
  async startConsuming(): Promise<Message[]> {
    return new Promise(async (resolve) => {
      const rabbitMQUrl = "amqp://localhost";
      const queue = "message-queue";
      const messages: Message[] = [];

      const connection = await amqp.connect(rabbitMQUrl);
      const channel = await connection.createChannel();

      await channel.assertQueue(queue, { durable: false });

      console.log("[*] Waiting for messages. To exit press CTRL+C");

      // Define um callback para processar cada mensagem recebida
      channel.consume(
        queue,
        (msg) => {
          if (msg) {
            const message = JSON.parse(msg.content.toString()) as Message;
            messages.push(message);
          }
        },
        { noAck: true },
      );

      setTimeout(() => {
        connection.close();
        resolve(messages);
      }, 5000);
    });
  }
}
