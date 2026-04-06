 
"use client";
import { createContext, useContext } from "react";
import { Lang } from "../types";




export const LangContext = createContext<Lang>("both");
export const useLang = () => useContext(LangContext);