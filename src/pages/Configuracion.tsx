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
import {
  Card,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Switch,
  Tabs
} from "antd";
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

type TabPosition = "left" | "right" | "top" | "bottom";

export const Configuracion = () => {
  const [form] = Form.useForm();
  const [ultimeAdded, setUltimeAdded] = useState(1);
  const navigate = useNavigate();
  const [tabPosition, setTabPosition] = useState<TabPosition>("right");

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
                  Tarjeta {(ultimeAdded + 1).toString()}{" "}
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
          preConfirm: async (login) => {
            try {
              console.log(login);
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
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
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
      label: "Perfil",
      children: (
        <>
          <Card>
            <Title title="Profile Details" fontSize="24px" />

            <span
              style={{
                color: "#5A607F",
                fontSize: "14px",
                fontWeight: "400",
                marginTop: "4px",
              }}
            >
              Enter your profile information
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
                Profile Image
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
                      First Name
                    </label>

                    <Input
                      // value={provider.Name}
                      size="large"
                      style={{
                        width: "95%",
                      }}
                      placeholder="First Name"
                    
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
                      Last Name
                    </label>

                    <Input
                      // value={provider.Name}
                      size="large"
                      style={{
                        width: "95%",
                      }}
                      placeholder="Last Name"
                     
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
                      Email Address
                    </label>

                    <Input
                      // value={provider.Name}
                      size="large"
                      style={{
                        width: "95%",
                      }}
                      placeholder="Email Address"
                   
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
                      Phone Number
                    </label>

                    <Input
                      // value={provider.Name}
                      size="large"
                      style={{
                        width: "95%",
                      }}
                      placeholder="Phone Number"
                   
                    />
                  </FormItem>
                </Col>
              </Row>

              <Divider style={{ borderWidth: "2px" }} />

              <Title title="Regional Settings" fontSize="24px" />

              <span
                style={{
                  color: "#5A607F",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "4px",
                }}
              >
                Set your language and timezone
              </span>

              <Row style={{ marginTop: "20px" }}>
                <Col xs={24} sm={24} lg={12}>
                  <FormItem
                    name={"languaje"}
                    rules={[
                      {
                        type: "string",
                        required: true,
                        message: "Por favor, ingresa tu nombre",
                      },
                    ]}
                  >
                    <label
                      htmlFor="languaje"
                      style={{
                        color: "#5A607F",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      Language
                    </label>

                    <Input
                      // value={provider.Name}
                      size="large"
                      style={{
                        width: "95%",
                      }}
                      placeholder="Language"
                   
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
                      Timezone
                    </label>

                    <Input
                      // value={provider.Name}
                      size="large"
                      style={{
                        width: "95%",
                      }}
                      placeholder="Timezone"
                    
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
      label: "Notificaciones",
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
              <Title title="Personalized Offers" fontSize="24px" />

              <span
                style={{
                  color: "#5A607F",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "4px",
                }}
              >
                Receive offers made special for you
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
              <Title title="Online Webinars" fontSize="24px" />

              <span
                style={{
                  color: "#5A607F",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "4px",
                }}
              >
                Get notified about upcoming webinars
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
              <Title title="New Features" fontSize="24px" />

              <span
                style={{
                  color: "#5A607F",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "4px",
                }}
              >
                Updates about new features and product releases
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
              <Title title="Security and Billing" fontSize="24px" />

              <span
                style={{
                  color: "#5A607F",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "4px",
                }}
              >
                Account security and notifications about billing
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
              <Title title="Marketing" fontSize="24px" />

              <span
                style={{
                  color: "#5A607F",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "4px",
                }}
              >
                Receive marketing newsletters about our new products.
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
      label: "Cuenta",
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
              <Title title="Darse de baja" fontSize="24px" />

              <span
                style={{
                  color: "#5A607F",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "4px",
                }}
              >
                Eliminar cuenta
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
      label: "Seguridad",
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
                Copia de seguridad
              </span>
            </div>

            <CustomButton
              title={
                <>
                  <DeleteOutlined /> Eliminar
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
      label: "Metodo de pago",
      children: (
        <>
          <Row justify={"end"} style={{ padding: "5px 0px " }}>
            <CustomButton
              type={"primary"}
              title={
                <>
                  <PlusCircleFilled /> Agregar
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

  const onChange = (key: string) => {
    console.log(key);
  };

  useEffect(() => {
    console.log(
      (itemsCreditCard!.length + 1).toString(),
      "(itemsCreditCard!.length + 1).toString()"
    );
  }, [itemsCreditCard]);

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
            <SaveFilled /> Guardar
          </p>
        }
        primaryButton={true}
        metodoPrimaryButton={function (): void {
          throw new Error("Function not implemented.");
        }}
        titlePage={"Configuracion"}
      />

      <Card style={{ width: "100%", marginTop: "20px" }}>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
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
                <BackwardOutlined /> Atras
              </>
            }
            type={"transparent"}
            onClick={() => {
              Swal.fire({
                title: "Estas seguro de volver?",
                text: "Se perderan los cambios no guardados",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, volver",
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
                <SaveFilled /> Guardar
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
