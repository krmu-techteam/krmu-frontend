import { ProgramsRepository } from "./programs.repositories";
import { ProgramsService } from "./programs.services";
import { IProgramsService } from "./programs.interfaces";

let serviceInstance: IProgramsService | null = null;

export function getProgramsService(): IProgramsService {
  if (!serviceInstance) {
    const repository = new ProgramsRepository();
    serviceInstance = new ProgramsService(repository);
  }
  return serviceInstance;
}
