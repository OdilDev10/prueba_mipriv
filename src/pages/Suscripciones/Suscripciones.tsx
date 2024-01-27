import { MailFilled, SearchOutlined } from "@ant-design/icons";
import { Button, Card, Col, Input, Row, TableColumnsType } from "antd";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { HeaderPages } from "../../componentns/HeaderPages/HeaderPages";
import { ResizeTables } from "../../componentns/ResizeTables/ResizeTables";
import { EditIcon } from "../../icons/EditIcon";
import { TrashIcon } from "../../icons/TrashIcon";
import { handleExportExcel } from "../../utils/exportExcel";
import { CustomModal } from "../../componentns/CustomModal/CustomModal";
import { useState } from "react";
import { CustomButton } from "../../componentns/CustomButton";
import FormItem from "antd/es/form/FormItem";
import { useAppContext } from "../../context/AppContext";
import APPTEXT from "../../utils/APPTEXT";

interface DataType {
  key: React.Key;
  name: string;
  date: string; // Puedes ajustar el tipo según tus necesidades
  quantity: number;
  image: string; // Puedes ajustar el tipo según tus necesidades
}

export const Suscripciones = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const { locale } = useAppContext();

  const translations =
    APPTEXT[locale.locale as keyof typeof APPTEXT] || APPTEXT.en;

  // const onChange: TableProps<DataType>["onChange"] = (
  //   pagination,
  //   filters,
  //   sorter,
  //   extra
  // ) => {
  //   console.log("params", pagination, filters, sorter, extra);
  // };

  const data: DataType[] = [
    {
      key: "1",
      name: "John",
      date: "2022-01-20",
      quantity: 30,
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      key: "2",
      name: "Jane",
      date: "2022-02-15",
      quantity: 45,
      image: "https://i.pravatar.cc/150?img=2",
    },
    {
      key: "3",
      name: "Alice",
      date: "2022-03-10",
      quantity: 60,
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      key: "4",
      name: "Bob",
      date: "2022-04-05",
      quantity: 20,
      image: "https://i.pravatar.cc/150?img=4",
    },
    {
      key: "5",
      name: "Charlie",
      date: "2022-05-01",
      quantity: 55,
      image: "https://i.pravatar.cc/150?img=5",
    },
    {
      key: "6",
      name: "David",
      date: "2022-06-25",
      quantity: 40,
      image: "https://i.pravatar.cc/150?img=6",
    },
    {
      key: "7",
      name: "Eva",
      date: "2022-07-20",
      quantity: 75,
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      key: "8",
      name: "Frank",
      date: "2022-08-15",
      quantity: 50,
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      key: "9",
      name: "Grace",
      date: "2022-09-10",
      quantity: 35,
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      key: "10",
      name: "Harry",
      date: "2022-10-05",
      quantity: 25,
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      key: "11",
      name: "Ivy",
      date: "2022-11-01",
      quantity: 65,
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      key: "12",
      name: "Jack",
      date: "2022-12-25",
      quantity: 42,
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      key: "13",
      name: "Karen",
      date: "2023-01-20",
      quantity: 58,
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      key: "14",
      name: "Leo",
      date: "2023-02-15",
      quantity: 22,
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      key: "15",
      name: "Mia",
      date: "2023-03-10",
      quantity: 47,
      image: "https://i.pravatar.cc/150?img=3",
    },
  ];

  const columns: TableColumnsType<DataType> = [
    {
      title: translations.subscriptions.columns.image,
      dataIndex: "image",
      render: (text, record) => (
        <img
          src={text}
          alt={`Image of ${record.name}`}
          style={{ width: 50, height: 50 }}
        />
      ),
    },
    {
      title: translations.subscriptions.columns.name,
      dataIndex: "name",
      sorter: {
        compare: (a, b) => a.name.localeCompare(b.name),
        multiple: 3,
      },
    },
    {
      title: translations.subscriptions.columns.date,
      dataIndex: "date",
      sorter: {
        compare: (a, b) => moment(a.date).unix() - moment(b.date).unix(),
        multiple: 2,
      },
    },
    {
      title: translations.subscriptions.columns.quantity,
      dataIndex: "quantity",
      sorter: {
        compare: (a, b) => a.quantity - b.quantity,
        multiple: 1,
      },
    },
    {
      title: translations.subscriptions.columns.actions,
      dataIndex: "accion",
      render: (__: any, record: any) => {
        return (
          <Row justify={"center"} style={{ gap: "10px" }}>
            <Button
              style={{
                padding: "8px 6px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                navigate(`/dashboard/suscripciones/${record.key}`);
              }}
            >
              <EditIcon />
            </Button>

            <Button
              style={{
                padding: "8px 6px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                Swal.fire({
                  title: translations.subscriptions.titleAlertModal,
                  text: translations.subscriptions.messageAlertModal,
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText:
                    translations.subscriptions.confirmButtonText,
                }).then((result) => {
                  if (result.isConfirmed) {
                    Swal.fire({
                      title: translations.subscriptions.titleModalConfirm,
                      text: translations.subscriptions.messageModalConfirm,
                      icon: "success",
                    });
                  }
                });
              }}
            >
              <TrashIcon />
            </Button>
          </Row>
        );
      },
    },
  ];

  return (
    <div>
      <CustomModal
        haveOnOK={false}
        haveOnCancel={true}
        title={translations.subscriptions.modal.title}
        visible={openModal}
        onClose={() => setOpenModal(false)}
        content={
          <>
            <Row gutter={[20, 20]} style={{ padding: "20px 0px" }}>
              <Col xs={24} lg={24}>
                <FormItem
                  name={"email"}
                  rules={[
                    {
                      type: "email",
                      required: true,
                      message:
                        translations.subscriptions.modal.messages.emailRequired,
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
                    {translations.subscriptions.modal.labels.email}
                  </label>

                  <Input
                    // value={provider.Name}
                    size="large"
                    style={{
                      width: "100%",
                    }}
                    placeholder={translations.subscriptions.modal.labels.email}
                  />
                </FormItem>
              </Col>

              <Col xs={24} lg={24}>
                <Row justify={"center"}>
                  <CustomButton
                    title={
                      <>
                        <MailFilled />{" "}
                        {
                          translations.subscriptions.modal.buttons
                            .giftSubscription
                        }
                      </>
                    }
                    type={"primary"}
                    onClick={() => {
                      Swal.fire({
                        title:
                          translations.subscriptions.modal.messages
                            .emailSentTitle,
                        text: translations.subscriptions.modal.messages
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
            }}
          >
            {translations.subscriptions.header.exportButton}
          </p>
        }
        primaryButton={true}
        metodoPrimaryButton={() => {
          handleExportExcel(data);
        }}
        titlePage={translations.subscriptions.header.title}
        giftSuscription={true}
        titleGiftSuscription={
          translations.subscriptions.header.titleGiftSubscription
        }
        metodoGiftSuscription={() => {
          setOpenModal(true);
        }}
      />

      <Card style={{ width: "100%", marginTop: "20px" }}>
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "12px" }}>
            <Input
              style={{
                minWidth: "40%",
                height: "40px",
              }}
              size="large"
              placeholder={translations.subscriptions.searchPlaceholder}
              prefix={<SearchOutlined />}
            />
          </div>

          <div
            style={{ display: "flex", gap: "12px", alignItems: "center" }}
          ></div>
        </section>

        <section style={{ marginTop: "30px" }}>
          {/* <Table columns={columns} dataSource={data} onChange={onChange} /> */}
          <ResizeTables columns={columns} data={data} isRowSelection={false} />
        </section>
      </Card>
    </div>
  );
};
