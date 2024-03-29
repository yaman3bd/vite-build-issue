import { cn as cnBase } from "tailwind-variants";

export * from "./components";

export const cn = (...inputs: any) => cnBase(inputs)();
