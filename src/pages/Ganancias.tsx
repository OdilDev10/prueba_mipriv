import {
  DeleteOutlined,
  EyeFilled,
  MailFilled,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Input, Row, TableColumnsType } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { CustomButton } from "../componentns/CustomButton";
import { CustomModal } from "../componentns/CustomModal/CustomModal";
import { HeaderPages } from "../componentns/HeaderPages/HeaderPages";
import { ResizeTables } from "../componentns/ResizeTables/ResizeTables";
import { handleExportExcel } from "../utils/exportExcel";
import { handlePrintPDF } from "../utils/exportPDF";
import { useAppContext } from "../context/AppContext";
import APPTEXT from "../utils/APPTEXT";

interface DataType {
  key: React.Key;
  name: string;
  date: string;
  content: string;
  quantity: number;
  status: boolean;
}

export const Ganancias = () => {
  const { locale } = useAppContext();
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DataType>({
    key: "1",
    name: "test",
    date: "test",
    status: false,
    content: "test",
    quantity: 0,
  });

  const translations =
    APPTEXT[locale.locale as keyof typeof APPTEXT] || APPTEXT.en;

  const columns: TableColumnsType<DataType> = [
    {
      title: translations.earnings.columns.name,
      dataIndex: "name",
      sorter: {
        compare: (a: any, b: any) => a.name.localeCompare(b.name),
        multiple: 3,
      },
    },
    {
      title: translations.earnings.columns.date,
      dataIndex: "date",
      sorter: {
        compare: (a, b) => moment(a.date).unix() - moment(b.date).unix(),
        multiple: 3,
      },
    },
    {
      title: translations.earnings.columns.status,
      dataIndex: "status",
      sorter: {
        compare: (a: any, b: any) => a.status.localeCompare(b.status),
        multiple: 3,
      },
      render: (_: any, record: any) => {
        return (
          <span
            style={{
              background: !record.status
                ? "var(--priv-primary)"
                : "var(--priv-green)",
              padding: "4px",
              borderRadius: "12px",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            {record.status ? "Pagada" : "Pendiente"}
          </span>
        );
      },
    },
    {
      title: translations.earnings.columns.content,
      dataIndex: "content",
      sorter: {
        compare: (a: any, b: any) => a.content.localeCompare(b.content),
        multiple: 2,
      },
    },
    {
      title: translations.earnings.columns.quantity,
      dataIndex: "quantity",
      sorter: {
        compare: (a, b) => a.quantity - b.quantity,
        multiple: 1,
      },
      render: (__: any, record: any) => {
        return (
          <Row justify={"center"} style={{ gap: "10px" }}>
            $ {record.quantity}
          </Row>
        );
      },
    },
    {
      title: translations.earnings.columns.acctions,
      dataIndex: "accion",
      render: (_: any, record: any) => {
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
                setSelectedItem(record);
                setOpenModal(true);
              }}
            >
              <EyeFilled />
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
                  title: translations.earnings.titleAlertModal,
                  text: translations.earnings.messageAlertModal,
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: translations.earnings.confirmButtonText,
                }).then((result) => {
                  if (result.isConfirmed) {
                    Swal.fire({
                      title: translations.earnings.titleModalConfirm,
                      text: translations.earnings.messageModalConfirm,
                      icon: "success",
                    });
                  }
                });
              }}
            >
              <DeleteOutlined />
            </Button>
          </Row>
        );
      },
    },
  ];

  const specificDate = moment("2022-01-20");
  const formattedSpecificDate = specificDate.format("YYYY-MM-DD");

  const dataSource: DataType[] = [
    {
      key: "1",
      name: "income-001",
      date: formattedSpecificDate,
      status: true,
      content: "Content A",
      quantity: 30,
    },
    {
      key: "2",
      name: "income-002",
      date: formattedSpecificDate,
      status: true,
      content: "Content B",
      quantity: 45,
    },
    {
      key: "3",
      name: "income-003",
      date: formattedSpecificDate,
      status: false,
      content: "Content C",
      quantity: 60,
    },
    {
      key: "4",
      name: "income-001",
      date: formattedSpecificDate,
      status: false,
      content: "Content D",
      quantity: 20,
    },
    {
      key: "5",
      name: "income-001",
      date: formattedSpecificDate,
      status: false,
      content: "Content E",
      quantity: 55,
    },
    {
      key: "6",
      name: "income-001",
      date: formattedSpecificDate,
      status: false,
      content: "Content F",
      quantity: 40,
    },
    {
      key: "7",
      name: "income-001",
      date: formattedSpecificDate,
      status: false,
      content: "Content G",
      quantity: 75,
    },
    {
      key: "8",
      name: "income-001",
      date: formattedSpecificDate,
      status: false,
      content: "Content H",
      quantity: 50,
    },
    {
      key: "9",
      name: "income-001",
      date: formattedSpecificDate,
      status: true,
      content: "Content I",
      quantity: 35,
    },
    {
      key: "10",
      name: "income-001",
      date: formattedSpecificDate,
      status: true,
      content: "Content J",
      quantity: 25,
    },
    {
      key: "11",
      name: "income-001",
      date: formattedSpecificDate,
      status: true,
      content: "Content K",
      quantity: 65,
    },
    {
      key: "12",
      name: "income-001",
      date: formattedSpecificDate,
      status: true,
      content: "Content L",
      quantity: 42,
    },
    {
      key: "13",
      name: "income-001",
      date: formattedSpecificDate,
      status: true,
      content: "Content M",
      quantity: 58,
    },
    {
      key: "14",
      name: "income-001",
      date: formattedSpecificDate,
      status: true,
      content: "Content N",
      quantity: 22,
    },
    {
      key: "15",
      name: "income-001",
      date: formattedSpecificDate,
      status: true,
      content: "Content O",
      quantity: 47,
    },
  ];

  // const onChange: TableProps<DataType>["onChange"] = (
  //   pagination,
  //   filters,
  //   sorter,
  //   extra
  // ) => {
  //   console.log("params", pagination, filters, sorter, extra);
  // };

  useEffect(() => {
    translations;
  }, [translations]);

  return (
    <div>
      <CustomModal
        title={translations.earnings.titleModal}
        visible={openModal}
        onClose={() => setOpenModal(false)}
        content={
          <>
            <Row gutter={[20, 20]} style={{ padding: "20px 0px " }}>
              <Col xs={24} lg={12}>
                <span>
                  {translations.earnings.columns.name}:{" "}
                  {selectedItem && selectedItem.name}
                </span>
              </Col>

              <Col xs={24} lg={12}>
                <span>
                  {translations.earnings.columns.date}:{" "}
                  {selectedItem && selectedItem.date}
                </span>
              </Col>

              <Col xs={24} lg={12}>
                <span>
                  {translations.earnings.columns.status}:{" "}
                  {selectedItem && selectedItem.status && (
                    <span
                      style={{
                        background: !selectedItem.status
                          ? "var(--priv-primary)"
                          : "var(--priv-green)",
                        padding: "4px",
                        borderRadius: "12px",
                        fontWeight: "bold",
                        color: "#fff",
                      }}
                    >
                      {selectedItem.status ? "Pagada" : "Penging"}
                    </span>
                  )}
                </span>
              </Col>

              <Col xs={24} lg={12}>
                <span>
                  {translations.earnings.columns.content}:{" "}
                  {selectedItem && selectedItem.content}
                </span>
              </Col>

              <Col xs={24} lg={12}>
                <span>
                  {translations.earnings.columns.quantity}: ${" "}
                  {selectedItem && selectedItem.quantity}
                </span>
              </Col>
            </Row>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {selectedItem && !selectedItem.status && (
                <CustomButton
                  title={
                    <>
                      <MailFilled />{" "}
                      {translations.earnings.requestPaymentButton}
                    </>
                  }
                  type={"primary"}
                  onClick={() => {
                    Swal.fire({
                      title: translations.earnings.exportSuccessTitle,
                      text: translations.earnings.exportSuccessMessage,
                      icon: "success",
                    });
                  }}
                />
              )}

              <CustomButton
                title={translations.earnings.printButton}
                type={"transparent"}
                onClick={() => {
                  handlePrintPDF(selectedItem);
                }}
              />
            </div>
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
            {translations.earnings.exportButton}
          </p>
        }
        primaryButton={true}
        metodoPrimaryButton={() => {
          handleExportExcel(dataSource);
        }}
        titlePage={translations.earnings.title}
      />

      <Card style={{ width: "100%", marginTop: "20px" }}>
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "12px" }}>
            {/* <Select
              style={{
                minWidth: "180px",
                height: "40px",
              }}
              options={[
                {
                  label: "Nombre",
                  valeu: "nombre",
                },
              ]}
            /> */}

            <Input
              style={{
                minWidth: "40%",
                height: "40px",
              }}
              size="large"
              placeholder={translations.earnings.searchPlaceholder}
              prefix={<SearchOutlined />}
            />
          </div>

          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            
          </div>
        </section>

        <section style={{ marginTop: "30px" }}>
          {/* <Table
            columns={columns}
            dataSource={dataSource}
            onChange={onChange}
          /> */}
          <ResizeTables
            columns={columns}
            data={dataSource}
            isRowSelection={false}
          />
        </section>
      </Card>
    </div>
  );
};
