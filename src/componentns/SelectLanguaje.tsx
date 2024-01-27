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
              <img
                style={{
                  height: "24px",
                }}
                src={'https://odilmartinez.com/img/mexico.png'}
                alt="Español"
                title="Español"
              />{" "}
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
              <img
                style={{
                  height: "19px",
                }}
                src={'https://odilmartinez.com/img/estados_unidos.png'}
                alt="Ingles"
                title="Ingles"
              />
              <span>EN</span>
            </p>
          ),
        },
      ]}
    />
  );
};
