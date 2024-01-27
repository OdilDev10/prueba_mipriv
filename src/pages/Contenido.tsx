import { CameraFilled, PlusCircleOutlined } from "@ant-design/icons";
import { Card, Col, Input, Pagination, Row } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { CardContenido } from "../componentns/CardContenido";
import { CustomButton } from "../componentns/CustomButton";
import { CustomModal } from "../componentns/CustomModal/CustomModal";
import { HeaderPages } from "../componentns/HeaderPages/HeaderPages";
import UpaloadImage from "../componentns/UploadImage";
import { useAppContext } from "../context/AppContext";
import APPTEXT from "../utils/APPTEXT";

export const Contenido = () => {
  const [openModal, setOpenModal] = useState(false);
  const { locale } = useAppContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [allContent, setAllContent] = useState(
    Array.from({ length: 20 }, (_, index) => ({
      id: String(index + 1),
      name: `Item ${index + 1}`,
      date: new Date(),
      quantity: Math.floor(Math.random() * 100),
      image: `https://picsum.photos/id/${index + 1}/200/300`,
    }))
  );

  const translations =
    APPTEXT[locale.locale as keyof typeof APPTEXT] || APPTEXT.es;

  const removeCard = (index: string) => {
    const newContent = allContent.filter((content) => content.id !== index);
    setAllContent(newContent);
  };

  useEffect(() => {
  }, [allContent]);

  return (
    <div>
      {" "}
      <CustomModal
        haveOnOK={false}
        haveOnCancel={true}
        title={translations.content.modal.title}
        visible={openModal}
        onClose={() => setOpenModal(false)}
        content={
          <>
            <Row gutter={[20, 20]} style={{ padding: "20px 0px " }}>
              <Col xs={24} lg={24}>
                <label
                  htmlFor="file"
                  style={{
                    color: "#5A607F",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  {translations.content.modal.labels.files}
                </label>
                <UpaloadImage />
              </Col>
              <Col xs={24} lg={24}>
                <FormItem
                  name={"name"}
                  rules={[
                    {
                      type: "string",
                      required: true,
                      message: "Por favor, ingresa el nombre",
                    },
                  ]}
                >
                  <label
                    htmlFor="name"
                    style={{
                      color: "#5A607F",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    {translations.content.modal.labels.name}
                  </label>

                  <Input
                    // value={provider.Name}
                    size="large"
                    style={{
                      width: "100%",
                    }}
                    placeholder={translations.content.modal.labels.name}
                  />
                </FormItem>
              </Col>

              <Col xs={24} lg={24}>
                <FormItem
                  name={"description"}
                  rules={[
                    {
                      type: "string",
                      required: true,
                      message: "Por favor, ingresa el nombre",
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
                    {translations.content.modal.labels.description}
                  </label>

                  <TextArea
                    // value={provider.Name}
                    size="large"
                    style={{
                      width: "100%",
                    }}
                    placeholder={translations.content.modal.labels.description}
                  />
                </FormItem>
              </Col>

              <Col xs={24} lg={24}>
                <Row justify={"center"}>
                  <CustomButton
                    title={
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "7px",
                        }}
                      >
                        <PlusCircleOutlined />{" "}
                        <span>
                          {translations.content.modal.buttons.createContent}
                        </span>
                      </div>
                    }
                    type={"primary"}
                    onClick={() => {
                      Swal.fire({
                        title:
                          translations.content.modal.messages.emailSentTitle,
                        text: translations.content.modal.messages
                          .emailSentMessage,
                        icon: "success",
                      });
                    }}
                  />
                </Row>
              </Col>
            </Row>
          </>
        }
      />
      <HeaderPages
        titlePrimaryButton={
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <CameraFilled /> {translations.content.header.uploadButton}
          </p>
        }
        primaryButton={true}
        metodoPrimaryButton={() => {
          setOpenModal(true);
        }}
        titlePage={translations.content.header.title}
      />
      <Card
        style={{
          width: "100%",
          marginTop: "50px",
          paddingTop: "30px",
        }}
      >
        <Row gutter={[16, 150]} style={{}}>
          {allContent
            .slice((currentPage - 1) * pageSize, currentPage * pageSize)
            .map((item) => (
              <Col xs={24} sm={8} lg={6} key={item.id}>
                <CardContenido data={item} removeCard={removeCard} />
              </Col>
            ))}
        </Row>
        <div style={{ marginTop: "70px" }}>
          <Pagination
            total={allContent.length}
            pageSize={pageSize}
            current={currentPage}
            onChange={(page, pageSize) => {
              setCurrentPage(page);
              setPageSize(pageSize || 10);
            }}
          />
        </div>
      </Card>
    </div>
  );
};
