"use client";

import React, { ReactNode, useEffect } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Provider } from "react-redux";
import store from "@/redux/store";

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  useEffect(() => {
    const rootElement = document.getElementById("root");
    // You can perform actions with rootElement if necessary
    console.log(rootElement);
  }, []); // Runs only once after the initial render

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Provider store={store}>
        {children}
      </Provider>
    </ThemeProvider>
  );
};

export default MainLayout;
