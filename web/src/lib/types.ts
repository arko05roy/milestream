export type FormationStatus = "mocked" | "formed";

export interface ContractorRecord {
  contractorId: string;
  role: string;
  skills?: string;
  mstrAmount: number;
  stackCostHac: number;
  formedAt: string;
  status: FormationStatus;
  explorerUrl?: string;
}

export interface Milestone {
  label: string;
  percent: number;
  amount: number;
  status: "pending" | "locked" | "released";
}

export interface GigRecord {
  id: string;
  contractorId: string;
  title: string;
  amount: number;
  milestones: Milestone[];
  createdAt: string;
  status: "demo";
}

export interface DemoStore {
  contractors: ContractorRecord[];
  gigs: GigRecord[];
}
