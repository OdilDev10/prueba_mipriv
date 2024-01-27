import { Locale } from "antd/es/locale";
import enUS from "antd/lib/locale/en_US";
import esES from "antd/lib/locale/es_ES";
import zhCN from "antd/lib/locale/zh_CN";
import ptBR from "antd/lib/locale/pt_BR";
import frFR from "antd/lib/locale/fr_FR";
import React, { createContext, useContext, useEffect, useState } from "react";
import { authGlobalFirebase } from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Definir una interfaz para el contexto
interface AppContextProps {
  locale: Locale;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  changeLocale: (languaje: string) => void;
  register: (email: string, password: string) => void;
  login: (email: string, password: string) => void;
  loginWithGoogle: () => void;
  logout: () => void;
  actualUser: any;
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
  const [actualUser, setActualUser] = useState({});

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
  const register = async (email: string, password: string) => {
    try {
      const response = await createUserWithEmailAndPassword(
        authGlobalFirebase,
        email,
        password
      );

      const idToken = await response.user.getIdToken();

      if (idToken) {
        window.location.href = "/login";
        return true;
      } else {
        // Handle the case where idToken is not available
        return "Error in registration: idToken not available";
      }
    } catch (error) {
      // Handle the registration error
      console.error("Registration error:", error);
      return `Registration failed: ${error}`;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await signInWithEmailAndPassword(
        authGlobalFirebase,
        email,
        password
      );
      setActualUser(response.user);
      console.log(response.user);

      const idToken = await response.user.getIdToken();

      if (idToken) {
        localStorage.setItem("token_mipriv", idToken);
        localStorage.setItem(
          "email_mipriv",
          (response?.user?.email || "").split("@")[0]
        );
        window.location.href = "/dashboard";
      }

      return response;
    } catch (error) {
      // Handle the login error
      console.error("Login error:", error);
      return `Login failed: ${error}`;
    }
  };

  const loginWithGoogle = async () => {
    try {
      const response = new GoogleAuthProvider();
      const result = await signInWithPopup(authGlobalFirebase, response);
      setActualUser(result.user);
      console.log(
        result.user,
        "\n\n\n",
        (result?.user?.displayName || "").split(" ")[0]
      );

      const idToken = await result.user.getIdToken();

      if (idToken) {
        localStorage.setItem("token_mipriv", idToken);
        localStorage.setItem(
          "name_mipriv",
          (result?.user?.displayName || "").split(" ")[0]
        );
        localStorage.setItem("photo_mipriv", result.user.photoURL || "");
        window.location.href = "/dashboard";
      }
    } catch (error) {
      // Handle the Google login error
      console.error("Google login error:", error);
      return `Google login failed: ${error}`;
    }
  };

  const logout = async () => {
    const response = await signOut(authGlobalFirebase);
    localStorage.removeItem("token_mipriv");
    localStorage.removeItem("email_mipriv");
    localStorage.removeItem("name_mipriv");
    localStorage.removeItem("photo_mipriv");

    return response;
  };

  const contextValues: AppContextProps = {
    locale,
    isDarkMode,
    toggleDarkMode,
    changeLocale,
    loginWithGoogle,
    login,
    register,
    logout,
    actualUser,
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
