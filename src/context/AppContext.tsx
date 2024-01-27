import { Locale } from "antd/es/locale";
import enUS from "antd/lib/locale/en_US";
import esES from "antd/lib/locale/es_ES";
import React, { createContext, useContext, useEffect, useState } from "react";

// Definir una interfaz para el contexto
interface AppContextProps {
  locale: Locale;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  changeLocale: () => void;
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

  console.log(locale.locale, 'locale');

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleDarkModeChange = (event: any) => {
      setIsDarkMode(event.matches);
    };

    handleDarkModeChange(darkModeMediaQuery);
    darkModeMediaQuery.addListener(handleDarkModeChange);
    
    document.body.classList.add('global_dark_mode');

    return () => {
      darkModeMediaQuery.removeListener(handleDarkModeChange);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle('global_dark_mode');

  };

  const changeLocale = () => {
    const newLocale = locale === esES ? enUS : esES;
    setLocale(newLocale);
  };

  const contextValues: AppContextProps = {
    locale,
    isDarkMode,
    toggleDarkMode,
    changeLocale,
  };

  return (
    <AppContext.Provider value={contextValues}>
      {children}
    </AppContext.Provider>
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
