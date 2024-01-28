import { Col, Form, Input, Row, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import { ButtonLoginGoogle } from "../../componentns/ButtonLoginGoogle/ButtonLoginGoogle";
import { CustomButton } from "../../componentns/CustomButton";
import { SelectLanguaje } from "../../componentns/SelectLanguaje";
import { SwitchDarkMode } from "../../componentns/SwitchDarkMode/SwitchDarkMode";
import Title from "../../componentns/Title";
import { useAppContext } from "../../context/AppContext";
import { LogoApp } from "../../icons/LogoApp";
import APPTEXT from "../../utils/APPTEXT";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { authGlobalFirebase } from "../../firebase/firebase.config";
import { useState } from "react";

export const Login = () => {
  const [form] = Form.useForm();
  const { toggleDarkMode, locale } = useAppContext();
  const navigate = useNavigate();
  const [actualUser, setActualUser] = useState({});

  const translations =
    APPTEXT[locale.locale as keyof typeof APPTEXT] || APPTEXT.es;

  const onFinish = async () => {
    try {
      const values = form.getFieldsValue();
      const response = await signInWithEmailAndPassword(
        authGlobalFirebase,
        values.email,
        values.password
      );

      const idToken = await response.user.getIdToken();

      if (idToken) {
        localStorage.setItem("token_mipriv", idToken);
        localStorage.setItem(
          "name_mipriv",
          (response?.user?.email || "").split("@")[0]
        );
        message.success("Login successful");

        navigate("/dashboard");
      }
    } catch (error) {
      message.error(`Login error: ${error}`);
      console.error("Error en onFinish:", error);
    }
  };

  const loginWithGoogle = async () => {
    try {
      const response = new GoogleAuthProvider();
      const result = await signInWithPopup(authGlobalFirebase, response);
      setActualUser(result.user);

      const idToken = await result.user.getIdToken();

      if (idToken) {
        localStorage.setItem("token_mipriv", idToken);
        localStorage.setItem(
          "name_mipriv",
          (result?.user?.displayName || "").split(" ")[0]
        );
        localStorage.setItem("photo_mipriv", result.user.photoURL || "");
        message.success("Login successful");

        navigate("/dashboard");
      }

      return "Google login failed: idToken not available";
    } catch (error) {
      message.error(`Login error: ${error}`);
      console.error("Google login error:", error);
      return `Google login failed: ${error}`;
    }
  };

  console.log(actualUser);

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
        <Title title={translations.loginPage.loginButton} fontSize="2rem" />
      </div>

      <Form form={form}>
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
                  message: translations.loginPage.passwordLabel,
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
                type="password"
                size="large"
                style={{
                  width: "100%",
                }}
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
                  {translations.loginPage.loginButton}
                </span>
              </div>
            }
            type={"primary"}
            onClick={() => {
              // navigate("/dashboard");
              onFinish();
            }}
          />
          <ButtonLoginGoogle
            onClick={() => {
              loginWithGoogle();
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
              navigate("/register");
            }}
          >
            {translations.loginPage.signIn}
          </span>
        </p>
      </Form>
    </div>
  );
};
