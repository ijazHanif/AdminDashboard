
"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { type ThemeProviderProps } from "next-themes/dist/types";

const NextThemesProvider = dynamic(
  () => import("next-themes").then((mod) => mod.ThemeProvider),
  { ssr: false }
);

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

// why we use dynamic for theme Provider because 
// in server side rendering. theme is client side rendering we use 'use client'
// another thing lazyloading async like concept server run it but client did not because (text+img)