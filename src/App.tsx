import { ConfigProvider, theme } from "antd";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAppContext } from "./context/AppContext";
import { Contenido } from "./pages/Contenido";
import { Dashboard } from "./pages/Dashboard";
import { Ganancias } from "./pages/Ganancias";
import { Reportes } from "./pages/Reportes";
import { Suscripciones } from "./pages/Suscripciones/Suscripciones";

import "./App.css";
import { AuthLayout } from "./componentns/AuthLayout";
import { NoAuthLayout } from "./componentns/NoAuthLayout/NoAuthLayout";
import { Configuracion } from "./pages/Configuracion";
import { DetallesSuscripciones } from "./pages/DetallesSuscripciones";
import { Login } from "./pages/aurh/Login";
import { Error404 } from "./pages/error/Error404";
import { Perfil } from "./pages/perfil/Perfil";
import { DetalleContenido } from "./pages/Conenido/DetalleContenido";
import { Planes } from "./pages/Suscripciones/Planes";
import { Notificaciones } from "./pages/Notificaciones/Notificaciones";
import { Encuestas } from "./pages/Encuestas/Encuestas";
import { DetalleEncuestas } from "./pages/Encuestas/DetalleEncuestas";
import { Register } from "./pages/aurh/Register";

function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const { locale, isDarkMode } = useAppContext();

  return (
    <>
      <ConfigProvider
        locale={locale}
        theme={{
          algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
          token: {
            colorPrimary: "#ff004b",
            borderRadius: 2,
            colorBgContainer: isDarkMode ? "#27273b" : "#fffff7",
            colorBgTextHover: "#ff1c60",
          },
          components: {
            Button: {
              colorPrimary: "#ff004b",
              algorithm: true,
            },
            Input: {
              colorPrimary: "#eb2f96",
              algorithm: true,
            },
          },
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<AuthLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="ganancias" element={<Ganancias />} />
              <Route path="reportes" element={<Reportes />} />
              {/* SUSCRIPCIONES */}
              <Route path="suscripciones" element={<Suscripciones />} />
              <Route path="planes" element={<Planes />} />
              <Route
                path="suscripciones/:id"
                element={<DetallesSuscripciones />}
              />
              {/* CONTENIDO */}
              <Route path="contenido" element={<Contenido />} />
              <Route path="contenido/:id" element={<DetalleContenido />} />

              {/* NOTIFICACIONES */}
              <Route path="notificaciones" element={<Notificaciones />} />
              <Route path="encuestas" element={<Encuestas />} />
              <Route path="encuestas/:id" element={<DetalleEncuestas />} />

              <Route path="configuracion" element={<Configuracion />} />
              <Route path="perfil" element={<Perfil />} />
            </Route>

            <Route path="/" element={<NoAuthLayout />}>
            <Route  index element={<><Navigate to={"/login"}/></>} />

              <Route path="login" index element={<Login />} />
              <Route path="register" element={<Register />} />

            </Route>
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </>
  );
}

export default App;
