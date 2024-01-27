import { Form, Input, Row } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../componentns/CustomButton";
import { SelectLanguaje } from "../../componentns/SelectLanguaje";
import { SwitchDarkMode } from "../../componentns/SwitchDarkMode/SwitchDarkMode";
import Title from "../../componentns/Title";
import { useAppContext } from "../../context/AppContext";
import { LogoApp } from "../../icons/LogoApp";

export const Login = () => {
  const [form] = Form.useForm();
  const { toggleDarkMode } = useAppContext();
  const navigate = useNavigate();

  return (
    <div style={{}}>
      <Row
        justify={"center"}
        style={{
          gap: "10px",
          alignItems: "center",
        }}
      >
        <SwitchDarkMode handleDarkMode={toggleDarkMode} />

        <SelectLanguaje />
      </Row>

      <Title title={"Create an Account"} />
      <p
        style={{
          color: "#5A607F",
          fontSize: "16px",
          fontWeight: "400",
        }}
      >
        Have an Account?{" "}
        <span
          style={{
            color: "#1E5EFF",
            fontSize: "16px",
            fontWeight: "400",
          }}
        >
          Sign In
        </span>
      </p>

      <Form form={form}>
        <Row
          justify={"center"}
          style={{
            marginTop: "30px",
          }}
        >
          <FormItem
            name={"email"}
            rules={[
              {
                type: "string",
                required: true,
                message: "Por favor, ingresa tu nombre",
              },
            ]}
          >
            <label
              htmlFor="email"
              style={{
                color: "#5A607F",
                fontSize: "14px",
                fontWeight: "400",
              }}
            >
              Email
            </label>

            <Input
              // value={provider.Name}
              size="large"
              style={{
                width: "100%",
              }}
              placeholder="Email"
              
            />
          </FormItem>
        </Row>

        <Row
          justify={"center"}
          style={{
            marginTop: "10px",
          }}
        >
          <FormItem
            name={"Clave"}
            rules={[
              {
                type: "string",
                required: true,
                message: "Por favor, ingresa tu nombre",
              },
            ]}
          >
            <label
              htmlFor="Clave"
              style={{
                color: "#5A607F",
                fontSize: "14px",
                fontWeight: "400",
              }}
            >
              Clave
            </label>

            <Input
              // value={provider.Name}
              size="large"
              style={{
                width: "100%",
              }}
              placeholder="Clave"
          
            />
          </FormItem>
        </Row>

        <Row justify={"center"}>
          <CustomButton
            title={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <LogoApp color={""} width={"40"} height={"25"} />{" "}
                <span
                  style={{
                    fontSize: "20px",
                  }}
                >
                  Login
                </span>
              </div>
            }
            type={"primary"}
            onClick={() => {
              navigate("/dashboard");
            }}
          />
          Falta Google
        </Row>
      </Form>
    </div>
  );
};
