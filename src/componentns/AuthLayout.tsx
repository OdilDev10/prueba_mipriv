import {
  AreaChartOutlined,
  CreditCardOutlined,
  DollarOutlined,
  FileOutlined,
  HomeOutlined,
  NotificationOutlined,
  OrderedListOutlined,
  SettingOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown, Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import { MenuProps } from "antd/lib";
import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { LogoApp } from "../icons/LogoApp";
import CustomBreadCrumb from "./CustomBreadCrumb";
import { SelectLanguaje } from "./SelectLanguaje";
import { SwitchDarkMode } from "./SwitchDarkMode/SwitchDarkMode";
import Title from "./Title";
import APPTEXT from "../utils/APPTEXT";
import NotificationCard from "./NotificationCard/NotificationCard";

type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

export const AuthLayout = () => {
  const { isDarkMode, toggleDarkMode, locale } = useAppContext();
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const lastLocation = location.pathname.split("/");
  const actualLocation = lastLocation[lastLocation.length - 1];

  const translations =
    APPTEXT[locale.locale as keyof typeof APPTEXT] || APPTEXT.en;

  console.log(location.pathname, actualLocation);
  const items: MenuItem[] = [
    getItem(translations.authlayout.dashboard, "dashboard", <HomeOutlined />),
    getItem(translations.authlayout.earnings, "ganancias", <DollarOutlined />),
    getItem(translations.authlayout.suscriptions, "sub1", <TeamOutlined />, [
      getItem(
        translations.authlayout.suscriptionsList,
        "suscripciones",
        <OrderedListOutlined />
      ),
      getItem(
        translations.authlayout.suscriptionsPlans,
        "planes",
        <CreditCardOutlined />
      ),
    ]),
    getItem(translations.authlayout.content, "contenido", <FileOutlined />),
    getItem(
      translations.authlayout.notifications,
      "sub2",
      <NotificationOutlined />,
      [
        getItem(
          translations.authlayout.notificationsList,
          "notificaciones",
          <OrderedListOutlined />
        ),
        getItem(
          translations.authlayout.surveys,
          "encuestas",
          <CreditCardOutlined />
        ),
      ]
    ),

    getItem(translations.authlayout.reports, "reportes", <AreaChartOutlined />),
    getItem(
      translations.authlayout.configuration,
      "configuracion",
      <SettingOutlined />
    ),
  ];

  const itemsPerfil: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link to={"/dashboard/perfil"}>
          {translations.authlayout.goToProfile}
        </Link>
      ),
    },
    {
      key: "2",
      label: <Link to={"/login"}>{translations.authlayout.logOut}</Link>,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        theme={isDarkMode ? "dark" : "light"}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        breakpoint="lg"
        style={{
          background: isDarkMode
            ? "var(--priv-black)"
            : "var(--priv-white-background)",
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 100,
        }}
        // style={{
        //   position: 'fixed',
        //   zIndex: 1000, // Ajusta el valor según sea necesario para estar por encima del contenido
        //   height: '100%', // Ajusta la altura según sea necesario
        // }}
      >
        <div
          style={{
            height: "64px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <LogoApp color={isDarkMode ? "white" : "black"} />
        </div>

        <Menu
          className=""
          theme={isDarkMode ? "dark" : "light"}
          // selectedKeys={[location.pathname]}
          selectedKeys={["1"]}
          mode="inline"
          inlineCollapsed={true}
          items={items}
          onSelect={(e) => {
            if (e.key === "dashboard") {
              navigate(`/dashboard`);
              return;
            }
            navigate(`/dashboard/${e.key}`);
            console.log(e.key);
          }}
          style={{
            background: isDarkMode
              ? "var(--priv-black)"
              : "var(--priv-white-background)",
          }}
        />
      </Sider>

      <Layout className="site-layout" style={{}}>
        {/* Topbar */}

        <div
          style={{
            // minHeight: "100vh",
            // position: "fixed",
            // right: 0,
            // top: 0,
            // bottom: 0,
            // left: "18%",
            // overflow: "auto",
            // width: '80vw',
            transition: "all 0.3s ease",
            marginLeft: collapsed ? "80px" : "200px",
          }}
        >
          <Header
            style={{
              padding: 0,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: isDarkMode
                ? "var(--priv-black)"
                : "var(--priv-white-background)",
              minHeight: "70px",
              height: "auto",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                gap: "10px",
                paddingRight: "15px",
                flexWrap: "wrap",
              }}
            >
              <NotificationCard/>
              <SelectLanguaje />
              <SwitchDarkMode handleDarkMode={toggleDarkMode} />

              <Dropdown menu={{ items: itemsPerfil }} placement="bottomRight">
               <div style={{
                 display: "flex",
                 justifyContent: "center",
                 alignItems: "center",
                 gap: '4px'
               }}>
               <Title title={"Nombre"} fontSize=".8rem" />

<Avatar
  // size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
  icon={<img src="https://www.mipriv.com/favicon.svg" />}
/>
               </div>
              </Dropdown>
            </div>
          </Header>

          {/* Contenido */}
          <Content
            style={{
              margin: "16px",
            }}
          >
            <div style={{ marginBottom: "10px" }}>
              <CustomBreadCrumb />
            </div>

            <Outlet />
          </Content>
        </div>
      </Layout>
    </Layout>
  );
};
