import { Card } from "antd";
import { HeaderPages } from "../../componentns/HeaderPages/HeaderPages";
import Title from "../../componentns/Title";
import { useAppContext } from "../../context/AppContext";
import APPTEXT from "../../utils/APPTEXT";

const Notificaciones = () => {
  const { locale } = useAppContext();

  const translations =
    APPTEXT[locale.locale as keyof typeof APPTEXT] || APPTEXT.es;

  return (
    <div>
      <HeaderPages
        primaryButton={false}
        titlePrimaryButton={""}
        metodoPrimaryButton={function (): void {
          throw new Error("Function not implemented.");
        }}
        titlePage={translations.notificationsPage.title}
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
        <Title
          title={translations.notificationsPage.messageNotList}
          fontSize="1.2rem"
        />
      </Card>
    </div>
  );
};

export default Notificaciones;
