import { Col, Form, Input, Row } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../componentns/CustomButton";
import { SelectLanguaje } from "../../componentns/SelectLanguaje";
import { SwitchDarkMode } from "../../componentns/SwitchDarkMode/SwitchDarkMode";
import Title from "../../componentns/Title";
import { useAppContext } from "../../context/AppContext";
import { LogoApp } from "../../icons/LogoApp";
import APPTEXT from "../../utils/APPTEXT";

export const Register = () => {
  const [form] = Form.useForm();
  const { toggleDarkMode, locale, register } = useAppContext();
  const navigate = useNavigate();

  const translations =
    APPTEXT[locale.locale as keyof typeof APPTEXT] || APPTEXT.es;

  const onFinish = () => {
    const values = form.getFieldsValue();
    register(values.email, values.password);
  };

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

      <div style={{ textAlign: "center" }}>
        <Title title={translations.loginPage.signIn} fontSize="2rem" />
      </div>

      <Form form={form} onFinish={onFinish}>
        <Row
          gutter={[16, 16]}
          style={{
            marginTop: "20px",
          }}
        >
          <Col xs={24} sm={24} lg={12}>
            <FormItem
              name={"email"}
              rules={[
                {
                  type: "string",
                  required: true,
                  message:
                    translations.subscriptions.modal.messages.emailInvalid,
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
                {translations.loginPage.emailLabel}
              </label>

              <Input
                // value={provider.Name}
                size="large"
                style={{
                  width: "100%",
                }}
                placeholder={translations.loginPage.emailPlaceholder}
                onChange={(e) => form.setFieldsValue({ email: e.target.value })}
              />
            </FormItem>
          </Col>

          <Col xs={24} sm={24} lg={12}>
            <FormItem
              name={"password"}
              rules={[
                {
                  type: "string",
                  required: true,
                  message: "Por favor, ingresa la clave",
                },
              ]}
            >
              <label
                htmlFor="password"
                style={{
                  color: "#5A607F",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                {translations.loginPage.passwordLabel}
              </label>

              <Input
                // value={provider.Name}
                size="large"
                style={{
                  width: "100%",
                }}
                type="password"
                placeholder={translations.loginPage.passwordPlaceholder}
                onChange={(e) =>
                  form.setFieldsValue({ password: e.target.value })
                }
              />
            </FormItem>
          </Col>
        </Row>

        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
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
                <LogoApp color={""} width={"30"} height={"20"} />{" "}
                <span
                  style={{
                    fontSize: ".8rem",
                  }}
                >
                  {translations.loginPage.signIn}
                </span>
              </div>
            }
            type={"primary"}
            onClick={() => {
              onFinish();
              //   navigate("/dashboard");
            }}
          />
        </div>

        <p
          style={{
            color: "#5A607F",
            fontSize: "16px",
            fontWeight: "400",
            marginTop: "10px",
            textAlign: "center",
          }}
        >
          {translations.loginPage.haveAccount}{" "}
          <span
            style={{
              color: "#1E5EFF",
              fontSize: "16px",
              fontWeight: "400",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/login");
            }}
          >
            {translations.loginPage.loginButton}
          </span>
        </p>
      </Form>
    </div>
  );
};