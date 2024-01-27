import { DeleteFilled, EyeFilled } from "@ant-design/icons";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { CustomButton } from "./CustomButton";
import APPTEXT from "../utils/APPTEXT";

export const CardContenido = ({
  data,
  removeCard,
}: {
  data: any;
  removeCard: (id: string) => void;
}) => {
  const { isDarkMode, locale } = useAppContext();
  const navigate = useNavigate();

  const specificDate = moment("2022-01-20");
  const formattedSpecificDate = specificDate.format("YYYY-MM-DD");


  const translations =
  APPTEXT[locale.locale as keyof typeof APPTEXT] || APPTEXT.en;
  
  return (
    <div
      style={{
        boxShadow: "0px 1px 4px 0px rgba(21, 34, 50, 0.08)",
        maxHeight: "330px",
        maxWidth: "350px",
        padding: "3px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",

        background: isDarkMode
          ? "var(--priv-black)"
          : "var(--priv-white-background)",
      }}
    >
      <img
        style={{ objectFit: "contain" }}
        src={data.image}
        alt={data.name}
        title={data.name}
      />
      <div
        style={{
          height: "20%",
          width: "100%",
          background: isDarkMode
            ? "var(--priv-black)"
            : "var(--priv-white-background)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: isDarkMode ? "#fff" : "#131523",
            fontWeight: "700",
            fontSize: "16px",
          }}
        >
          {data.name}
        </p>
        <p
          style={{
            color: "#5A607F",
            fontWeight: "400",
            fontSize: "14px",
          }}
        >
          {formattedSpecificDate}
        </p>

        <div
          style={{
            display: "flex",
            gap: "8px",
            justifyContent: "center",
          }}
        >
          <CustomButton
            title={
              <>
                <EyeFilled /> {translations.contentDetail.buttonDetails}
              </>
            }
            type={"primary"}
            onClick={() => {
              navigate(`/dashboard/contenido/${data.id}`);
            }}
          />

          <CustomButton
            title={
              <>
                <DeleteFilled /> {translations.contentDetail.buttonDelete} 
              </>
            }
            type={"primary"}
            onClick={() => {
              removeCard(data.id);
            }}
          />
        </div>
      </div>
    </div>
  );
};
