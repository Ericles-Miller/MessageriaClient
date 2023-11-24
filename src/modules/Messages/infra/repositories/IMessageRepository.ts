import { IMessageResponseDTO } from "../DTOs/IMessageResponseDTO";

export interface IMessageRepository {
  create({ description, email, username }: IMessageResponseDTO): Promise<void>;
}
