import { AndroidOutlined, BarChartOutlined, LineChartOutlined, PieChartOutlined, RadarChartOutlined } from "@ant-design/icons";
import { Card, Tabs } from "antd";
import { TabsProps } from "antd/lib";
import BarChartExample from "../componentns/Charts/BarChar";
import { BubbleChartComponent } from "../componentns/Charts/BubleChart";
import { LineChartComponent } from "../componentns/Charts/LineChart";
import { PieChartComponent } from "../componentns/Charts/PieChart";
import { RadarChartComponent } from "../componentns/Charts/RadarChart";
import { HeaderPages } from "../componentns/HeaderPages/HeaderPages";

export const Reportes = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Bar",
      children: (
        <>
          <BarChartExample />
        </>
      ),
      icon: <BarChartOutlined />,
    },
    {
      key: "2",
      label: "Pie",
      children: (
        <>
          <PieChartComponent />
        </>
      ),
      icon: <PieChartOutlined />,
    },
    {
      key: "3",
      label: "Line",
      children: (
        <>
          <LineChartComponent />
        </>
      ),
      icon: <LineChartOutlined />,
    },
    {
      key: "4",
      label: "Radar",
      children: (
        <>
          <RadarChartComponent />
        </>
      ),
      icon: <RadarChartOutlined />,
    },
    {
      key: "5",
      label: "Blubble",
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
        titlePage={"Reportes"}
      />

      <Card style={{ marginTop: "30px" }}>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </Card>
    </div>
  );
};
