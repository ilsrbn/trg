import { IContractor } from "../contractor/interface";

export interface IReport {
  id: number;
  executor: IContractor;
  customer: IContractor;
  date: string;
  transactions: Array<IContractor>;
  status: "Submitted" | "Wait for submission" | "Draft";
  createdAt: string;
  updatedAt: string;
}
