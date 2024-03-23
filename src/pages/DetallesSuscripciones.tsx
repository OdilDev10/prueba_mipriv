import { Card, Col, Form, Input, Row, Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import { HeaderPages } from "../componentns/HeaderPages/HeaderPages";
import { CustomButton } from "../componentns/CustomButton";
import Swal from "sweetalert2";
import { CustomModal } from "../componentns/CustomModal/CustomModal";
import { useState } from "react";

 const DetallesSuscripciones = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <HeaderPages
        primaryButton={false}
        titlePrimaryButton={"Guardar"}
        metodoPrimaryButton={function (): void {
          throw new Error("Function not implemented.");
        }}
        titlePage={"Editar Suscriptor"}
      />

      <Card style={{ width: "100%", marginTop: "20px" }}>
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Row justify={"center"} style={{ padding: "20px 0px" }}>
            <img
              src="https://i.pravatar.cc/150?img=3"
              alt="suscriptor"
              title="suscriptor"
              style={{
                borderRadius: "50%",
              }}
            />
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} lg={12}>
              <FormItem
                name={"Suscripcion"}
                rules={[
                  {
                    type: "string",
                    required: true,
                    message: "Por favor, ingresa la suscripcion",
                  },
                ]}
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
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

                <Input style={{}} value={"John"} disabled />
              </FormItem>
            </Col>

            <Col xs={24} sm={24} lg={12}>
              <FormItem
                name={"Suscripcion"}
                rules={[
                  {
                    type: "string",
                    required: true,
                    message: "Por favor, ingresa la suscripcion",
                  },
                ]}
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
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

                <Select
                  disabled
                  style={{}}
                  defaultValue={"Pro"}
                  options={[
                    {
                      value: "1",
                      label: "Premiun",
                    },
                    {
                      value: "2",
                      label: "Pro",
                    },
                    {
                      value: "3",
                      label: "Basico",
                    },
                  ]}
                />
              </FormItem>
            </Col>

            <Col xs={24} sm={24} lg={12}>
              <FormItem
                name={"Suscripcion"}
                rules={[
                  {
                    type: "string",
                    required: true,
                    message: "Por favor, ingresa la suscripcion",
                  },
                ]}
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
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

                <Input style={{}} value={"2022-01-20"} disabled />
              </FormItem>
            </Col>

            <Col xs={24} sm={24} lg={12}>
              <FormItem
                name={"Suscripcion"}
                rules={[
                  {
                    type: "string",
                    required: true,
                    message: "Por favor, ingresa la suscripcion",
                  },
                ]}
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
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

                <Input style={{}} value={"30"} disabled />
              </FormItem>
            </Col>
          </Row>
        </Form>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <CustomButton
            title={"Formas de contacto"}
            type={"primary"}
            onClick={() => {
              setOpenModal(true);
            }}
          />

          <CustomButton
            title={"Chat"}
            type={"transparent"}
            onClick={() => {
              Swal.fire({
                title: "Funcionalidad futura",
                text: "Esto desplegara un chat en la aplicación de priv",
                icon: "info",
              });
            }}
          />
        </div>
      </Card>

      <CustomModal
      title="Contatar suscriptor"
        visible={openModal}
        onClose={() => setOpenModal(false)}
        content={
          <>
            <Row>
              <Col xs={24} sm={24} lg={12}>
                +525-000-000-000
              </Col>
              <Col xs={24} sm={24} lg={12}>
                test@exaple.com
              </Col>
            </Row>
          </>
        }
      />
    </div>
  );
};
export default DetallesSuscripciones