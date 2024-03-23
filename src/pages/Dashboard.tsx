import { Card, Col, Row } from "antd";
import BarChartExample from "../componentns/Charts/BarChar";
import { LineChartComponent } from "../componentns/Charts/LineChart";
import { PieChartComponent } from "../componentns/Charts/PieChart";
import { RadarChartComponent } from "../componentns/Charts/RadarChart";
import { HeaderPages } from "../componentns/HeaderPages/HeaderPages";
import { ArrowDown } from "../icons/ArrowDown";
import { ArrowUp } from "../icons/ArrowUp";
import { CartIcon } from "../icons/CartIcon";
import { MoneyIcon } from "../icons/MoneyIcon";
import { OnlyUserIcon } from "../icons/OnlyUserIcon";
import { SettingIcons } from "../icons/SettingIcons";
import { TwoUsersIcon } from "../icons/TwoUsersIcon";
import { useNavigate } from "react-router-dom";
import Title from "../componentns/Title";
import { useAppContext } from "../context/AppContext";
import APPTEXT from "../utils/APPTEXT";

const Dashboard = () => {
  const { locale } = useAppContext();
  const navigate = useNavigate();

  const translations =
    APPTEXT[locale.locale as keyof typeof APPTEXT] || APPTEXT.es;

  return (
    <div>
      <HeaderPages
        titlePrimaryButton={
          <p
            style={{
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => {
              navigate("/dashboard/configuracion");
            }}
          >
            <SettingIcons color={"#fff"} />
            {translations.dashboard.buttonManage}
          </p>
        }
        primaryButton={true}
        metodoPrimaryButton={function (): void {
          throw new Error("Function not implemented.");
        }}
        titlePage={translations.dashboard.title}
      />

      <div style={{ marginTop: "20px" }}>
        <Title
          title={
            translations.dashboard.welcomeMessage +
              " " +
              (localStorage.getItem("name_mipriv") ||
                localStorage.getItem("email_mipriv")) || "User"
          }
          fontSize="1.4rem"
        />
      </div>

      <Card style={{ width: "100%", marginTop: "20px" }}>
        <Row gutter={16} style={{}}>
          <Col xs={24} sm={12} lg={6} style={{ alignItems: "center" }}>
            <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
              <div
                style={{
                  minHeight: "80px",
                  minWidth: "96px",
                }}
              >
                <h4
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                >
                  $10.540
                </h4>
                <span
                  style={{
                    color: "#5A607F",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  {translations.dashboard.totalRevenue}
                </span>

                <p style={{ display: "flex", gap: "4px", marginTop: "10px" }}>
                  <span
                    style={{
                      color: "var(--priv-green)",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    22.45%
                  </span>
                  <ArrowUp />
                </p>
              </div>
              <div
                style={{
                  padding: "16px",
                  background: "#ECF2FF",
                  borderRadius: "50%",
                  height: "56px",
                  width: "56px",
                }}
              >
                <MoneyIcon color="#1E5EFF" />
              </div>
            </div>
            {/* <Divider
              type="vertical"
              style={{ height: "90px", borderLeft: "2px solid #E6E9F4" }}
            /> */}
          </Col>

          <Col xs={24} sm={12} lg={6} style={{}}>
            <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
              <div
                style={{
                  minHeight: "80px",
                  minWidth: "96px",
                }}
              >
                <h4
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                >
                  1,056
                </h4>
                <span
                  style={{
                    color: "#5A607F",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  {translations.dashboard.orders}
                </span>

                <p style={{ display: "flex", gap: "4px", marginTop: "10px" }}>
                  <span
                    style={{
                      color: "var(--priv-green)",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    15.34%
                  </span>
                  <ArrowUp />
                </p>
              </div>
              <div
                style={{
                  padding: "16px",
                  background: "#ECF2FF",
                  borderRadius: "50%",
                  height: "56px",
                  width: "56px",
                }}
              >
                <CartIcon color="" />
              </div>
            </div>
          </Col>

          <Col xs={24} sm={12} lg={6} style={{}}>
            <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
              <div
                style={{
                  minHeight: "80px",
                  minWidth: "96px",
                }}
              >
                <h4
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                >
                  48
                </h4>
                <span
                  style={{
                    color: "#5A607F",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  {translations.dashboard.activeSessions}
                </span>

                <p style={{ display: "flex", gap: "4px", marginTop: "10px" }}>
                  <span
                    style={{
                      color: "var(--priv-primary)",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    18.25%
                  </span>
                  <ArrowDown />
                </p>
              </div>
              <div
                style={{
                  padding: "16px",
                  background: "#ECF2FF",
                  borderRadius: "50%",
                  height: "56px",
                  width: "56px",
                }}
              >
                <OnlyUserIcon />
              </div>
            </div>
          </Col>

          <Col xs={24} sm={12} lg={6} style={{}}>
            <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
              <div
                style={{
                  minHeight: "80px",
                  minWidth: "96px",
                }}
              >
                <h4
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                >
                  5.420
                </h4>
                <span
                  style={{
                    color: "#5A607F",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  {translations.dashboard.totalSessions}
                </span>

                <p style={{ display: "flex", gap: "4px", marginTop: "10px" }}>
                  <span
                    style={{
                      color: "var(--priv-primary)",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    10.24%
                  </span>
                  <ArrowDown />
                </p>
              </div>
              <div
                style={{
                  padding: "16px",
                  background: "#ECF2FF",
                  borderRadius: "50%",
                  height: "56px",
                  width: "56px",
                }}
              >
                <TwoUsersIcon />
              </div>
            </div>
          </Col>
        </Row>
      </Card>

      <Row gutter={16} style={{ marginTop: "30px", minHeight: "469px" }}>
        <Col xs={24} lg={15}>
          <Card
            style={{
              height: "100%",
            }}
          >
            <BarChartExample />
          </Card>
        </Col>
        <Col xs={24} lg={9}>
          <Card
            style={{
              height: "100%",
            }}
          >
            <PieChartComponent />
          </Card>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: "30px", minHeight: "396px" }}>
        <Col xs={24} lg={12}>
          <Card
            style={{
              height: "100%",
            }}
          >
            <LineChartComponent />
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card
            style={{
              height: "100%",
            }}
          >
            <RadarChartComponent />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard