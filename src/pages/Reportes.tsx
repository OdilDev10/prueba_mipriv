import {
  AndroidOutlined,
  BarChartOutlined,
  LineChartOutlined,
  PieChartOutlined,
  RadarChartOutlined,
} from "@ant-design/icons";
import { Card, Tabs } from "antd";
import { TabsProps } from "antd/lib";
import BarChartExample from "../componentns/Charts/BarChar";
import { BubbleChartComponent } from "../componentns/Charts/BubleChart";
import { LineChartComponent } from "../componentns/Charts/LineChart";
import { PieChartComponent } from "../componentns/Charts/PieChart";
import { RadarChartComponent } from "../componentns/Charts/RadarChart";
import { HeaderPages } from "../componentns/HeaderPages/HeaderPages";
import APPTEXT from "../utils/APPTEXT";
import { useAppContext } from "../context/AppContext";

 const Reportes = () => {
  const { locale } = useAppContext();

  const translations =
    APPTEXT[locale.locale as keyof typeof APPTEXT] || APPTEXT.es;

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: translations.reportsPage.tabs.bar,
      children: (
        <>
          <BarChartExample />
        </>
      ),
      icon: <BarChartOutlined />,
    },
    {
      key: "2",
      label: translations.reportsPage.tabs.pie,
      children: (
        <>
          <PieChartComponent />
        </>
      ),
      icon: <PieChartOutlined />,
    },
    {
      key: "3",
      label: translations.reportsPage.tabs.line,
      children: (
        <>
          <LineChartComponent />
        </>
      ),
      icon: <LineChartOutlined />,
    },
    {
      key: "4",
      label: translations.reportsPage.tabs.radar,
      children: (
        <>
          <RadarChartComponent />
        </>
      ),
      icon: <RadarChartOutlined />,
    },
    {
      key: "5",
      label: translations.reportsPage.tabs.bubble,
      children: (
        <>
          <BubbleChartComponent />
        </>
      ),
      icon: <AndroidOutlined />,
    },
  ];

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <div>
      <HeaderPages
        primaryButton={false}
        titlePrimaryButton={undefined}
        metodoPrimaryButton={function (): void {
          throw new Error("Function not implemented.");
        }}
        titlePage={translations.reportsPage.title}
      />

      <Card style={{ marginTop: "30px" }}>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </Card>
    </div>
  );
};


export default Reportes