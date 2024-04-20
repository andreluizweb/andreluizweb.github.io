import { createContext } from "react";
import { PersonDataType } from "../types";

export const AppContext = createContext<PersonDataType | null>(null);
