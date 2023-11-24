import "reflect-metadata";
import { SaveMessagesController } from "@modules/Messages/SaveMessages/SaveMessagesController";

async function startScript() {
  console.log("Iniciando SeedConsumer.ts...");

  const saveMessagesController = new SaveMessagesController();

  console.log("aaaaaaaa");

  while (true) {
    try {
      console.log("Handling messages...");
      await saveMessagesController.handle();
      console.log("Handled messages successfully.");
    } catch (error) {
      console.error("Error handling messages:", error);
    }

    // Aguarde um intervalo de tempo antes de verificar novamente a fila
    await new Promise((resolve) => setTimeout(resolve, 5000)); // por exemplo, aguarde 5 segundos
  }
}

// Chame a função assíncrona para iniciar o script
startScript();
