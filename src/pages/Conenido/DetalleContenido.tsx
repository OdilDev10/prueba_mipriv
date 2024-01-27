import { Card, Col, Form, Input, Row } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
import { HeaderPages } from "../../componentns/HeaderPages/HeaderPages";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { CustomButton } from "../../componentns/CustomButton";
import { useAppContext } from "../../context/AppContext";
import APPTEXT from "../../utils/APPTEXT";

export const DetalleContenido = () => {
  const { locale } = useAppContext();
  const [status, setStatus] = useState<"Detalle" | "Editar">("Detalle");
  const [form] = Form.useForm();
  const [titleStatus, setTitleStatus] = useState<
    "Detalle" | "Editar" | "Crear" | "" | "Create" | "Details" | "Edit"
  >();
  const [statusCreate, setStatusCreate] = useState(false);

  const translations =
    APPTEXT[locale.locale as keyof typeof APPTEXT] || APPTEXT.en;

  useEffect(() => {
    setTitleStatus(
      status === "Detalle" ? "Detalle" : status === "Editar" ? "Editar" : ""
    );
  }, [status]);

  return (
    <div>
      <HeaderPages
        primaryButton={true}
        titlePrimaryButton={
          statusCreate
            ? translations.contentDetailPage.buttonCreate
            : status === translations.contentDetailPage.buttonDetails
            ? translations.contentDetailPage.buttonEdit
            : status === translations.contentDetailPage.buttonEdit
            ? translations.contentDetailPage.buttonDetails
            : translations.contentDetailPage.buttonCreate
        }
        metodoPrimaryButton={() => {
          if (statusCreate) {
            // Lógica para manejar la creación (crear)
            // setStatusCreate(false);
          } else {
            // Lógica para alternar entre "Detalle" y "Editar"
            setStatus(status === "Detalle" ? "Editar" : "Detalle");
          }
        }}
        titlePage={statusCreate ? "Creando" : titleStatus}
        giftSuscription={statusCreate ? false : true}
        titleGiftSuscription={translations.contentDetailPage.buttonCreate}
        metodoGiftSuscription={() => {
          if (!statusCreate && status === "Editar") {
            Swal.fire({
              title: "Estas seguro de crear?",
              text: "Lo que no hayas guardado se eliminara.",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Si, ir crear",
            }).then((result) => {
              if (result.isConfirmed) {
                setStatusCreate(true);
              }
            });
          } else {
            setStatusCreate(true);
          }
        }}
      />

      <Card style={{ marginTop: "20px" }}>
        <Row
          gutter={[16, 16]}
          justify={"center"}
          style={{ minHeight: "360px", display: statusCreate ? "none" : "" }}
        >
          <video
            controls
            style={{ minWidth: "200px", maxWidth: "60%", height: "auto" }}
          >
            <source
              src={"https://odilmartinez.com/img/video01.mp4"}
              type="video/mp4"
            />
            {translations.contentDetailPage.contentoNoSupport}
          </video>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginLeft: "10px",
            }}
          >
            <img
              src={"https://odilmartinez.com/img/playa01.jpg"}
              alt="Playa 01"
              title="Playa 01"
              style={{
                width: "150px",
              }}
            />
            <img
              src={"https://odilmartinez.com/img/playa02.jpg"}
              alt="Playa 02"
              title="Playa 02"
              style={{
                width: "150px",
              }}
            />

            <img
              src={"https://odilmartinez.com/img/playa02.jpg"}
              alt="Playa 02"
              title="Playa 02"
              style={{
                width: "150px",
              }}
            />
          </div>
        </Row>
        <Form form={form} style={{ marginTop: "20px" }}>
          <Row gutter={16}>
            <Col xs={24} sm={24}>
              <FormItem
                name={"nombre"}
                rules={[
                  {
                    type: "string",
                    required: true,
                    message:
                      translations.contentDetailPage.messageError.message,
                  },
                ]}
              >
                <label
                  htmlFor="nombre"
                  style={{
                    color: "#5A607F",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  {translations.contentDetailPage.inputs.name}
                </label>

                <Input
                  size="large"
                  style={{
                    width: "100%",
                  }}
                  placeholder={translations.contentDetailPage.inputs.name}
                  disabled={status === "Detalle"}
                />
              </FormItem>
            </Col>

            <Col xs={24} sm={24}>
              <FormItem
                name={"description"}
                rules={[
                  {
                    type: "string",
                    required: true,
                    message: translations.contentDetailPage.messageError.messageDescription,
                  },
                ]}
              >
                <label
                  htmlFor="description"
                  style={{
                    color: "#5A607F",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  {translations.contentDetailPage.inputs.description}
                </label>

                <TextArea

                  // value={'description'}
                  size="large"
                  style={{
                    width: "100%",
                  }}
                  placeholder={translations.contentDetailPage.inputs.description}
                  disabled={status == "Detalle"}
                />
              </FormItem>
            </Col>
          </Row>

          {status != "Detalle" && (
            <CustomButton
              title={translations.contentDetailPage.buttonSave}
              type={"primary"}
              onClick={() => {
                if (statusCreate) {
                  Swal.fire({
                    title: translations.contentDetailPage.alert.titleSecond,
                    text: translations.contentDetailPage.alert.contentSecond,
                    icon: "success",
                  });
                } else {
                  Swal.fire({
                    title: translations.contentDetailPage.alert.titleThird,
                    text: translations.contentDetailPage.alert.contentThird,
                    icon: "success",
                  });
                }
              }}
            />
          )}
        </Form>
      </Card>
    </div>
  );
};
