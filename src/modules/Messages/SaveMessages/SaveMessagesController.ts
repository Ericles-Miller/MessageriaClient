import { container } from "tsyringe";

import { SaveMessageUseCase } from "./SaveMessagesUseCase";

export class SaveMessagesController {
  async handle(): Promise<void> {
    const saveMessageUseCase = container.resolve(SaveMessageUseCase);

    await saveMessageUseCase.execute();
  }
}
