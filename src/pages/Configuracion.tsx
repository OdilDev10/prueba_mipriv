import {
  AccountBookOutlined,
  BackwardOutlined,
  CloseCircleFilled,
  CreditCardOutlined,
  DeleteOutlined,
  NotificationOutlined,
  PlusCircleFilled,
  SaveFilled,
  SecurityScanOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Col, Divider, Form, Input, Row, Switch, Tabs } from "antd";
import FormItem from "antd/es/form/FormItem";
import { TabsProps } from "antd/lib";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import CreditCard from "../componentns/CreditCard/CreditCard";
import { CustomButton } from "../componentns/CustomButton";
import { HeaderPages } from "../componentns/HeaderPages/HeaderPages";
import Title from "../componentns/Title";
import UpaloadImage from "../componentns/UploadImage";
import { useAppContext } from "../context/AppContext";
import APPTEXT from "../utils/APPTEXT";

type TabPosition = "left" | "right" | "top" | "bottom";

export const Configuracion = () => {
  const [form] = Form.useForm();
  const [ultimeAdded, setUltimeAdded] = useState(1);
  const navigate = useNavigate();
  const [tabPosition, setTabPosition] = useState<TabPosition>("right");
  const { locale } = useAppContext();

  const translations =
    APPTEXT[locale.locale as keyof typeof APPTEXT] || APPTEXT.es;

  const addCreditCard = () => {
    setUltimeAdded(ultimeAdded + 1);
    setItemsCreditCard((prevItems) =>
      prevItems
        ? [
            ...prevItems,
            {
              key: (ultimeAdded + 1).toString(),
              label: (
                <>
                  {translations.configurationPage.creditCard}{" "}
                  {(ultimeAdded + 1).toString()}{" "}
                  <CloseCircleFilled
                    onClick={() => {
                      removeCreditCard((ultimeAdded + 1).toString());
                    }}
                  />
                </>
              ),
              children: (
                <>
                  <CreditCard />
                </>
              ),
            },
          ]
        : []
    );
  };

  const removeCreditCard = (id: string) => {
    const eliminarLocal = () => {
      setItemsCreditCard(
        (prev) => prev?.filter((item) => item.key !== id) || []
      );
      Swal.fire({
        title: "Eliminado!",
        text: "Fue eliminado exitosamente.",
        icon: "success",
      });
    };

    Swal.fire({
      title: "Eliminar registro",
      text: "Quieres eleminar este registro de forma permanente?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Ingresa tu clave",
          input: "text",
          inputAttributes: {
            autocapitalize: "off",
          },
          showCancelButton: true,
          confirmButtonText: "Look up",
          showLoaderOnConfirm: true,
          preConfirm: async () => {
            try {
              eliminarLocal();
            } catch (error) {
              Swal.showValidationMessage(`
                Request failed: ${error}
              `);
            }
          },
          allowOutsideClick: () => !Swal.isLoading(),
        });
      }
    });
  };

  const handleResize = () => {
    setTabPosition(window.innerWidth <= 768 ? "top" : "right");
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [itemsCreditCard, setItemsCreditCard] = useState<TabsProps["items"]>([
    {
      key: "1",
      label: (
        <>
          Tarjeta 1{" "}
          <CloseCircleFilled
            onClick={() => {
              removeCreditCard((ultimeAdded + 1).toString());
            }}
          />
        </>
      ),
      children: (
        <>
          <CreditCard />
        </>
      ),
    },
  ]);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: translations.configurationPage.tabs.perfil.title,
      children: (
        <>
          <Card>
            <Title
              title={translations.configurationPage.tabs.perfil.titlePage}
              fontSize="24px"
            />

            <span
              style={{
                color: "#5A607F",
                fontSize: "14px",
                fontWeight: "400",
                marginTop: "4px",
              }}
            >
              {translations.configurationPage.tabs.perfil.subTitlePage}
            </span>

            <div style={{ marginTop: "24px" }}>
              <label
                htmlFor="first_name"
                style={{
                  color: "#5A607F",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                {translations.configurationPage.tabs.perfil.profileImage}
              </label>

              <UpaloadImage />
            </div>

            <Form form={form}>
              <Row>
                <Col xs={24} sm={24} lg={12}>
                  <FormItem
                    name={"first_name"}
                    rules={[
                      {
                        type: "string",
                        required: true,
                        message: "Por favor, ingresa tu nombre",
                      },
                    ]}
                  >
                    <label
                      htmlFor="first_name"
                      style={{
                        color: "#5A607F",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      {translations.configurationPage.tabs.perfil.inputs.name}
                    </label>

                    <Input
                      // value={provider.Name}
                      size="large"
                      style={{
                        width: "95%",
                      }}
                      placeholder={
                        translations.configurationPage.tabs.perfil.inputs.name
                      }
                    />
                  </FormItem>
                </Col>

                <Col xs={24} sm={24} lg={12}>
                  <FormItem
                    name={"last_name"}
                    rules={[
                      {
                        type: "string",
                        required: true,
                        message: "Por favor, ingresa tu apellido",
                      },
                    ]}
                  >
                    <label
                      htmlFor="last_name"
                      style={{
                        color: "#5A607F",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      {
                        translations.configurationPage.tabs.perfil.inputs
                          .lastName
                      }
                    </label>

                    <Input
                      // value={provider.Name}
                      size="large"
                      style={{
                        width: "95%",
                      }}
                      placeholder={
                        translations.configurationPage.tabs.perfil.inputs
                          .lastName
                      }
                    />
                  </FormItem>
                </Col>

                <Col xs={24} sm={24} lg={12}>
                  <FormItem
                    name={"email"}
                    rules={[
                      {
                        type: "email",
                        required: true,
                        message: "Por favor, ingresa tu correo electrónico",
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
                      {translations.configurationPage.tabs.perfil.inputs.email}
                    </label>

                    <Input
                      // value={provider.Name}
                      size="large"
                      style={{
                        width: "95%",
                      }}
                      placeholder={
                        translations.configurationPage.tabs.perfil.inputs.email
                      }
                    />
                  </FormItem>
                </Col>

                <Col xs={24} sm={24} lg={12}>
                  <FormItem
                    name={"phone"}
                    rules={[
                      {
                        type: "string",
                        required: true,
                        message: "Por favor, ingresa tu apellido",
                      },
                    ]}
                  >
                    <label
                      htmlFor="phone"
                      style={{
                        color: "#5A607F",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      {translations.configurationPage.tabs.perfil.inputs.phone}
                    </label>

                    <Input
                      // value={provider.Name}
                      size="large"
                      style={{
                        width: "95%",
                      }}
                      placeholder={
                        translations.configurationPage.tabs.perfil.inputs.phone
                      }
                    />
                  </FormItem>
                </Col>
              </Row>

              <Divider style={{ borderWidth: "2px" }} />

              <Title
                title={
                  translations.configurationPage.tabs.perfil.regionalSettings
                }
                fontSize="24px"
              />

              <span
                style={{
                  color: "#5A607F",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "4px",
                }}
              >
                {translations.configurationPage.tabs.perfil.timeZone}
              </span>

              <Row style={{ marginTop: "20px" }}>
                <Col xs={24} sm={24} lg={12}>
                  <FormItem
                    name={"language"}
                    rules={[
                      {
                        type: "string",
                        required: true,
                        message: "Por favor, ingresa tu nombre",
                      },
                    ]}
                  >
                    <label
                      htmlFor="language"
                      style={{
                        color: "#5A607F",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      {translations.configurationPage.tabs.perfil.language}
                    </label>

                    <Input
                      // value={provider.Name}
                      size="large"
                      style={{
                        width: "95%",
                      }}
                      placeholder={
                        translations.configurationPage.tabs.perfil.language
                      }
                    />
                  </FormItem>
                </Col>

                <Col xs={24} sm={24} lg={12}>
                  <FormItem
                    name={"timezone"}
                    rules={[
                      {
                        type: "string",
                        required: true,
                        message: "Por favor, ingresa tu apellido",
                      },
                    ]}
                  >
                    <label
                      htmlFor="timezone"
                      style={{
                        color: "#5A607F",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      {translations.configurationPage.tabs.perfil.titleTimeZone}
                    </label>

                    <Input
                      // value={provider.Name}
                      size="large"
                      style={{
                        width: "95%",
                      }}
                      placeholder={
                        translations.configurationPage.tabs.perfil.titleTimeZone
                      }
                    />
                  </FormItem>
                </Col>
              </Row>
            </Form>
          </Card>
        </>
      ),
      icon: <UserOutlined />,
    },
    {
      key: "2",
      label: translations.configurationPage.tabs.notifications.title,
      children: (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <Title
                title={
                  translations.configurationPage.tabs.notifications
                    .personalizedOffers.title
                }
                fontSize="24px"
              />

              <span
                style={{
                  color: "#5A607F",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "4px",
                }}
              >
                {
                  translations.configurationPage.tabs.notifications
                    .personalizedOffers.description
                }
              </span>
            </div>
            <Switch />
          </div>

          <Divider />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <Title
                title={
                  translations.configurationPage.tabs.notifications
                    .onlineWebinars.title
                }
                fontSize="24px"
              />

              <span
                style={{
                  color: "#5A607F",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "4px",
                }}
              >
                {
                  translations.configurationPage.tabs.notifications
                    .onlineWebinars.description
                }
              </span>
            </div>
            <Switch />
          </div>

          <Divider />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <Title
                title={
                  translations.configurationPage.tabs.notifications.newFeatures
                    .title
                }
                fontSize="24px"
              />

              <span
                style={{
                  color: "#5A607F",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "4px",
                }}
              >
                {
                  translations.configurationPage.tabs.notifications.newFeatures
                    .description
                }
              </span>
            </div>
            <Switch />
          </div>

          <Divider />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <Title
                title={
                  translations.configurationPage.tabs.notifications
                    .securityBilling.title
                }
                fontSize="24px"
              />

              <span
                style={{
                  color: "#5A607F",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "4px",
                }}
              >
                {
                  translations.configurationPage.tabs.notifications
                    .securityBilling.description
                }
              </span>
            </div>
            <Switch />
          </div>

          <Divider />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <Title
                title={
                  translations.configurationPage.tabs.notifications.marketing
                    .title
                }
                fontSize="24px"
              />

              <span
                style={{
                  color: "#5A607F",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "4px",
                }}
              >
                {
                  translations.configurationPage.tabs.notifications.marketing
                    .description
                }
              </span>
            </div>
            <Switch />
          </div>

          <Divider />
        </>
      ),
      icon: <NotificationOutlined />,
    },
    {
      key: "3",
      label: translations.configurationPage.tabs.accountSecurityPage.title,
      children: (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <Title
                title={
                  translations.configurationPage.tabs.accountSecurityPage
                    .unsubscribe.title
                }
                fontSize="24px"
              />

              <span
                style={{
                  color: "#5A607F",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "4px",
                }}
              >
                {
                  translations.configurationPage.tabs.accountSecurityPage
                    .unsubscribe.description
                }
              </span>
            </div>
            <Switch />
          </div>

          <Divider />
        </>
      ),
      icon: <AccountBookOutlined />,
    },
    {
      key: "4",
      label:
        translations.configurationPage.tabs.accountSecurityPage.backup.title,
      children: (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <Title title="Copia de seguridad" fontSize="24px" />

              <span
                style={{
                  color: "#5A607F",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "4px",
                }}
              >
                {
                  translations.configurationPage.tabs.accountSecurityPage.backup
                    .description
                }
              </span>
            </div>

            <CustomButton
              title={
                <>
                  <DeleteOutlined />{" "}
                  {
                    translations.configurationPage.tabs.accountSecurityPage
                      .backup.deleteButton
                  }
                </>
              }
              type={"primary"}
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>

          <Divider />
        </>
      ),
      icon: <SecurityScanOutlined />,
    },
    {
      key: "5",
      label:
        translations.configurationPage.tabs.accountSecurityPage.paymentMethod
          .title,
      children: (
        <>
          <Row justify={"end"} style={{ padding: "5px 0px " }}>
            <CustomButton
              type={"primary"}
              title={
                <>
                  <PlusCircleFilled />{" "}
                  {
                    translations.configurationPage.tabs.accountSecurityPage
                      .paymentMethod.addButton
                  }
                </>
              }
              onClick={addCreditCard}
            />
          </Row>
          <Tabs tabPosition={tabPosition || "right"} items={itemsCreditCard} />
        </>
      ),
      icon: <CreditCardOutlined />,
    },
  ];

  useEffect(() => {}, [itemsCreditCard, translations]);

  return (
    <div>
      <HeaderPages
        titlePrimaryButton={
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <SaveFilled />{" "}
            {translations.configurationPage.content.header.saveButton}
          </p>
        }
        primaryButton={true}
        metodoPrimaryButton={function (): void {
          throw new Error("Function not implemented.");
        }}
        titlePage={translations.configurationPage.content.header.pageTitle}
      />

      <Card style={{ width: "100%", marginTop: "20px" }}>
        <Tabs defaultActiveKey="1" items={items} />
      </Card>

      <Card style={{ width: "100%", marginTop: "20px" }}>
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <CustomButton
            title={
              <>
                <BackwardOutlined />{" "}
                {
                  translations.configurationPage.content.navigationButtons
                    .backButton
                }
              </>
            }
            type={"transparent"}
            onClick={() => {
              Swal.fire({
                title:
                  translations.configurationPage.content.confirmationDialog
                    .title,
                text: translations.configurationPage.content.confirmationDialog
                  .text,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText:
                  translations.configurationPage.content.confirmationDialog
                    .confirmButtonText,
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate("/dashboard");
                }
              });
            }}
          />
          <CustomButton
            title={
              <>
                <SaveFilled />{" "}
                {translations.configurationPage.content.header.saveButton}
              </>
            }
            type={"primary"}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </Card>
    </div>
  );
};
