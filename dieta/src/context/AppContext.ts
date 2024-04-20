import { createContext } from "react";
import { AppDataType } from "../types";

export const AppContext = createContext<AppDataType | null>(null);
