import { IProfile } from "./model.interface";

export interface IProfileApi {
  get(): Promise<IProfile>;
  update(id: Pick<IProfile, 'id'>, payload: Omit<IProfile, 'id' | 'createdAt' | 'updatedAt' | 'valid' | 'kveds'>): Promise<IProfile>
  create(payload: Pick<IProfile, 'firstName' | "lastName" | "fathersName">): Promise<IProfile>
}
