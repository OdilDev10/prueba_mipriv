import { Locale } from "antd/es/locale";
import enUS from "antd/lib/locale/en_US";
import esES from "antd/lib/locale/es_ES";
import frFR from "antd/lib/locale/fr_FR";
import ptBR from "antd/lib/locale/pt_BR";
import zhCN from "antd/lib/locale/zh_CN";
import { signOut } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { authGlobalFirebase } from "../firebase/firebase.config";

// Definir una interfaz para el contexto
interface AppContextProps {
  locale: Locale;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  changeLocale: (languaje: string) => void;
  logout: () => void;
}

// Crear el contexto
const AppContext = createContext<AppContextProps | undefined>(undefined);

// Crear un proveedor de contexto
export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [locale, setLocale] = useState<Locale>(esES); // Ajusta el valor inicial según tus necesidades
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    const handleDarkModeChange = (event: any) => {
      setIsDarkMode(event.matches);
    };

    handleDarkModeChange(darkModeMediaQuery);
    darkModeMediaQuery.addListener(handleDarkModeChange);

    document.body.classList.add("global_dark_mode");

    return () => {
      darkModeMediaQuery.removeListener(handleDarkModeChange);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("global_dark_mode");
  };

  const changeLocale = (languaje: string) => {
    if (languaje === "pt") {
      setLocale(ptBR);
    } else if (languaje === "ch") {
      setLocale(zhCN);
    } else if (languaje === "en") {
      setLocale(enUS);
    } else if (languaje === "fr") {
      setLocale(frFR);
    } else {
      setLocale(esES);
    }
  };

  const logout = async () => {
    const response = await signOut(authGlobalFirebase);


    return response;
  };

  const contextValues: AppContextProps = {
    locale,
    isDarkMode,
    toggleDarkMode,
    changeLocale,
    logout,
  };

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

// Crear un hook para usar el contexto
export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      "useAppContext debe ser utilizado dentro de AppContextProvider"
    );
  }

  return context;
};
