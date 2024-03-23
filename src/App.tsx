import { ConfigProvider, theme } from "antd";
import { lazy } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { useAppContext } from "./context/AppContext";
import { Error404 } from "./pages/error/Error404";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const AuthLayout = lazy(() => import("./componentns/AuthLayout"));
const NoAuthLayout = lazy(
  () => import("./componentns/NoAuthLayout/NoAuthLayout")
);

const DetalleContenido = lazy(
  () => import("./pages/Conenido/DetalleContenido")
);
const Configuracion = lazy(() => import("./pages/Configuracion"));
const Contenido = lazy(() => import("./pages/Contenido"));
const DetallesSuscripciones = lazy(
  () => import("./pages/DetallesSuscripciones")
);
const DetalleEncuestas = lazy(
  () => import("./pages/Encuestas/DetalleEncuestas")
);
const Encuestas = lazy(() => import("./pages/Encuestas/Encuestas"));
const Ganancias = lazy(() => import("./pages/Ganancias"));
const Notificaciones = lazy(
  () => import("./pages/Notificaciones/Notificaciones")
);
const Reportes = lazy(() => import("./pages/Reportes"));
const Planes = lazy(() => import("./pages/Suscripciones/Planes"));
const Suscripciones = lazy(() => import("./pages/Suscripciones/Suscripciones"));
const Login = lazy(() => import("./pages/aurh/Login"));
const Register = lazy(() => import("./pages/aurh/Register"));
const Perfil = lazy(() => import("./pages/perfil/Perfil"));

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
        <HashRouter>
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
              <Route
                index
                element={
                  <>
                    <Navigate to={"/login"} />
                  </>
                }
              />

              <Route path="login" index element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="*" element={<Error404 />} />
          </Routes>
        </HashRouter>
      </ConfigProvider>
    </>
  );
}

export default App;
