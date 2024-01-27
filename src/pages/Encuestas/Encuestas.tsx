import { Button, Card, Col, Form, Input, Row, Select, Space, Tabs } from "antd";
import { HeaderPages } from "../../componentns/HeaderPages/HeaderPages";
import Title from "../../componentns/Title";
import React, { useState } from "react";
import { CustomModal } from "../../componentns/CustomModal/CustomModal";
import {
  EditFilled,
  EyeFilled,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { TabsProps } from "antd/lib";
 
interface CardEncuestasProps {
  onClickEdit?: () => void;
  onClickView?: () => void;
  isActive: boolean;
  startDate: string;
  endDate: string;
  title: string;
  responses: { response: string }[];
}

export const Encuestas = () => {
  const [openModal, setOpenModal] = useState(false);
  const [oepnModalEdit, setOepnModalEdit] = useState(false);
  const navigate = useNavigate();
  const [form] = Form.useForm();


  const [encuestas, setEncuestas] = useState([
    {
      isActive: true,
      startDate: "2024-01-25 10:00:00",
      endDate: "2024-01-25 14:00:00",
      title: "¿Cómo calificarías el servicio de atención al cliente?",
      responses: [
        { response: "Excelente" },
        { response: "Bueno" },
        { response: "Regular" },
        { response: "Malo" },
      ],
    },
    {
      isActive: false,
      startDate: "2024-01-26 15:30:00",
      endDate: "2024-01-26 18:30:00",
      title: "¿Cuál es tu platillo favorito?",
      responses: [
        { response: "Pizza" },
        { response: "Hamburguesa" },
        { response: "Ensalada" },
        { response: "Sushi" },
      ],
    },
    {
      isActive: true,
      startDate: "2024-01-27 20:00:00",
      endDate: "2024-01-27 22:00:00",
      title: "¿Qué tipo de actividades te gustaría tener en el evento?",
      responses: [
        { response: "Conciertos en vivo" },
        { response: "Actividades deportivas" },
        { response: "Talleres artísticos" },
        { response: "Juegos interactivos" },
      ],
    },
  ]);

  const [encuestasPlubicas, setEncuestasPublicas] = useState([
    {
      isActive: true,
      startDate: "2024-01-25 10:00:00",
      endDate: "2024-01-25 14:00:00",
      title: "¿Cómo calificarías el servicio de atención al cliente?",
      responses: [
        { response: "Excelente" },
        { response: "Bueno" },
        { response: "Regular" },
        { response: "Malo" },
      ],
    },
    {
      isActive: true,
      startDate: "2024-01-26 15:30:00",
      endDate: "2024-01-26 18:30:00",
      title: "¿Cuál es tu platillo favorito?",
      responses: [
        { response: "Pizza" },
        { response: "Hamburguesa" },
        { response: "Ensalada" },
        { response: "Sushi" },
      ],
    },
    {
      isActive: true,
      startDate: "2024-01-27 20:00:00",
      endDate: "2024-01-27 22:00:00",
      title: "¿Qué tipo de actividades te gustaría tener en el evento?",
      responses: [
        { response: "Conciertos en vivo" },
        { response: "Actividades deportivas" },
        { response: "Talleres artísticos" },
        { response: "Juegos interactivos" },
      ],
    },
  ]);



  //   const onFinish = () => {
  //     const values = form.getFieldsValue();
  //     console.log(values);
  //     addEncuesta(values);
  //     form.resetFields();
  //     setOpenModal(false);
  //   };

  const addEncuesta = () => {
    const formValues = form.getFieldsValue();
    console.log(formValues);
    setEncuestas([...encuestas, formValues]);
    // form.resetFields();
    setOpenModal(false);

    return 
    setEncuestasPublicas([])
    setItemsTabs([])
  };

  const [itemsTabs, setItemsTabs] = useState<TabsProps["items"]>([
    {
      key: "1",
      label: "Mis encuestas",
      children: (
        <>
          <CustomModal
            haveOnOK={false}
            haveOnCancel={true}
            title={"Agregar encuestas"}
            visible={openModal}
            onClose={() => setOpenModal(false)}
            content={
              <>
                <Form form={form} onFinish={addEncuesta}>
                  <Form.Item name="isActive" label="Activa">
                    <Select>
                      <Select.Option value={true}>Sí</Select.Option>
                      <Select.Option value={false}>No</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item name="startDate" label="Fecha de Inicio">
                    <Input type="datetime-local" />
                  </Form.Item>
                  <Form.Item name="endDate" label="Fecha de Fin">
                    <Input type="datetime-local" />
                  </Form.Item>
                  <Form.Item name="title" label="Pregunta">
                    <Input />
                  </Form.Item>
                  <Form.Item name="responses" label="Respuestas">
                    <Input.Group>
                      <Form.List name="responses">
                        {(fields, { add, remove }) => (
                          <>
                            {fields.map(({ key, name, ...restField }) => (
                              <Space
                                key={key}
                                style={{ display: "flex", marginBottom: 8 }}
                                align="baseline"
                              >
                                <Form.Item
                                  {...restField}
                                  name={[name, "response"]}
                                  fieldKey={[key + 1, "response"]}
                                  rules={[
                                    {
                                      required: true,
                                      message: "Ingrese una respuesta",
                                    },
                                  ]}
                                >
                                  <Input placeholder="Respuesta" />
                                </Form.Item>
                                <Button
                                  type="dashed"
                                  onClick={() => remove(name)}
                                  icon={<MinusOutlined />}
                                />
                              </Space>
                            ))}
                            <Button
                              type="dashed"
                              onClick={() => add()}
                              icon={<PlusOutlined />}
                              disabled={fields.length >= 5} // Limitar a 5 respuestas
                            >
                              Agregar Respuesta
                            </Button>
                          </>
                        )}
                      </Form.List>
                    </Input.Group>
                  </Form.Item>
                  {/* Aquí puedes agregar lógica para manejar las respuestas */}
                  <Form.Item>
                    <Space>
                      <Button type="primary" htmlType="submit">
                        Agregar Encuesta
                      </Button>
                      <Button onClick={() => setOpenModal(false)}>
                        Cancelar
                      </Button>
                    </Space>
                  </Form.Item>
                </Form>
              </>
            }
          />

          <CustomModal
            visible={oepnModalEdit}
            onClose={function (): void {
              throw new Error("Function not implemented.");
            }}
            content={<>
            AQUI
            </>}
          />

          <Row gutter={[16, 16]}>
            {encuestas.map((encuesta, index) => (
              <Col key={index} xs={24} sm={24} lg={12}>
                <CardEncuestas
                  {...encuesta}
                  onClickEdit={() => {
                    console.log("Hola");
                    setOepnModalEdit(true);
                  }}
                  onClickView={() => {
                    navigate(`/dashboard/encuestas/${index + 1}`);
                  }}
                />
              </Col>
            ))}
          </Row>
        </>
      ),
    },
    {
      key: "2",
      label: "Encuestas publicas",
      children: (
        <>
          <Row gutter={[16, 16]}>
            {encuestasPlubicas.map((encuesta, index) => (
              <Col
                key={index}
                xs={24}
                sm={24}
                lg={12}
                onClick={() => navigate(`/dashboard/encuestas/${index + 1}`)}
                style={{ cursor: "pointer" }}
              >
                <CardEncuestas {...encuesta} />
              </Col>
            ))}
          </Row>
        </>
      ),
    },
  ]);

  return (
    <div>
      <HeaderPages
        primaryButton={true}
        titlePrimaryButton={"Agregar encuesta"}
        metodoPrimaryButton={function (): void {
          setOpenModal(true);
        }}
        titlePage={"Encuestas"}
      />

      <Card style={{ marginTop: "30px" }}>
        <Tabs tabPosition={"top"} items={itemsTabs} />
      </Card>
    </div>
  );
};

const CardEncuestas: React.FC<CardEncuestasProps> = ({
  onClickEdit,
  onClickView,
  isActive,
  startDate,
  endDate,
  title,
  responses,
}) => {
  console.log(onClickEdit);

  return (
    <Card>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span
          style={{
            background: isActive ? "var(--priv-green)" : "var(--priv-primary)",
            padding: "4px",
            borderRadius: "12px",
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          {isActive ? "Activa" : "Desactiva"}
        </span>

        <span
          style={{
            padding: "4px",
            borderRadius: "12px",
            fontWeight: "bold",
          }}
        >
          {`${startDate} | ${endDate}`}
        </span>

        {onClickEdit && (
          <EditFilled onClick={onClickEdit} style={{ cursor: "pointer" }} />
        )}

        {onClickView && (
          <EyeFilled style={{ cursor: "pointer" }} onClick={onClickView} />
        )}
      </div>

      <div>
        <Title title={title} fontSize="1.4rem" />
      </div>

      <div>
        <fieldset
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <legend>Respuestas</legend>
          {responses.map((response, index) => (
            <span key={index}>
              {index + 1}. {response.response}
            </span>
          ))}
        </fieldset>
      </div>
    </Card>
  );
};

export default CardEncuestas;
