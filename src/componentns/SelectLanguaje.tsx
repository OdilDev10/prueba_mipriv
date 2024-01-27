import { Select } from "antd";
import { useAppContext } from "../context/AppContext";

export const SelectLanguaje = () => {

  const { locale, changeLocale } = useAppContext();

  return (
    <Select
      style={{
        // width: "20%",
        minWidth: '80px'
      }}
      defaultValue={locale.locale}
      onChange={changeLocale}
      options={[
        {
          value: "es",
          label: (
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "3px",
              }}
            >
              🇲🇽
              <span>ES</span>
            </p>
          ),
        },
        {
          value: "en",
          label: (
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "3px",
              }}
            >
              🇺🇸
              <span>EN</span>
            </p>
          ),
        },
        {
          value: "pt",
          label: (
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "3px",
              }}
            >
             🇧🇷
              <span>PT</span>
            </p>
          ),
        },
        {
          value: "ch",
          label: (
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "3px",
              }}
            >
             🇨🇳
              <span>CH</span>
            </p>
          ),
        },
        {
          value: "fr",
          label: (
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "3px",
              }}
            >
             🇫🇷
              <span>FR</span>
            </p>
          ),
        },
      ]}
    />
  );
};
