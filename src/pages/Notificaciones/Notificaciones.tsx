import { Card } from "antd";
import { HeaderPages } from "../../componentns/HeaderPages/HeaderPages";
import Title from "../../componentns/Title";

export const Notificaciones = () => {
  return (
    <div>
      <HeaderPages
        primaryButton={false}
        titlePrimaryButton={""}
        metodoPrimaryButton={function (): void {
          throw new Error("Function not implemented.");
        }}
        titlePage={"Notificaciones"}
      />

      <Card
        style={{
          marginTop: "30px",
          minHeight: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Title title={"Listado vacio..."} fontSize="1.2rem" />
      </Card>
    </div>
  );
};
