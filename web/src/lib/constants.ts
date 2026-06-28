export const HACD_PATTERN = /^[A-Z]{6}$/;
export const STACK_COST_HAC = 50;
export const MSTR_PER_LOT = 5000;
export const STORAGE_KEY = "milestream_demo";

export const STATS = [
  { value: "200", label: "HACD lots" },
  { value: "5,000", label: "MSTR per lot" },
  { value: "50", label: "HAC formation cost" },
  { value: "1M", label: "MSTR hard cap" },
] as const;

export const STREAM_STEPS = [
  { key: "form", label: "Form", desc: "Stack credential" },
  { key: "verify", label: "Verify", desc: "On-chain proof" },
  { key: "paid", label: "Get paid", desc: "Milestone stream" },
] as const;
