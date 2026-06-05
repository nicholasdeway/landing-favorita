"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import "@/i18n/config";
import i18n from "i18next";

interface LanguageContextProps {
  language: string;
  changeLanguage: (lng: string) => void;
  isMounted: boolean;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState("es");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedLang = localStorage.getItem("language") || "es";
    setLanguage(savedLang);
    i18n.changeLanguage(savedLang);
  }, []);

  const changeLanguage = (lng: string) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, isMounted }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};