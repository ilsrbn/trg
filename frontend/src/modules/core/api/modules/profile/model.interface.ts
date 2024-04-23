import { IContractor } from "../contractor/interface";

export interface IProfile extends IContractor {
  status: "active" | "draft";
  kveds: Array<string>
}
