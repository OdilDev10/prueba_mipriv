import { CloseCircleFilled } from "@ant-design/icons";
import { Button, Card, Checkbox, Form, Input, Select, Space } from "antd";
import { useState } from "react";
import { CardPlans } from "../../componentns/CardPlans/CardPlans";
import { CustomModal } from "../../componentns/CustomModal/CustomModal";
import { HeaderPages } from "../../componentns/HeaderPages/HeaderPages";
import SelectMultiple from "../../componentns/SelectMultiple/SelectMultiple";

export const Planes = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalPaises, setOpenModalPaises] = useState(false);

  const [form] = Form.useForm();

  const [plans, setPlans] = useState([
    {
      id: 'USD_01',
      planName: "Basic",
      price: 5.6,
      currency: "USD 🇺🇸",
      monthlyPrice: 5.6,
      allowImages: true,
      allowVideos: false,
      allowChat: false,
      country: ""
    },
    {
      id: 'DOP_01',
      planName: "Pro",
      price: 15.6,
      currency: "DOP 🇩🇴",
      monthlyPrice: 15.6,
      allowImages: true,
      allowVideos: true,
      allowChat: false,
    },
    {
      id: 'USD_02',
      planName: "Premium",
      price: 25.6,
      currency: "USD 🇺🇸",
      monthlyPrice: 25.6,
      allowImages: true,
      allowVideos: true,
      allowChat: true,
    },
  ]);

  const addCard = (item: any) => {
    setPlans([
      ...plans,
      {
        ...item,
        price:
          typeof item.price === "string" ? parseFloat(item.price) : item.price,
        monthlyPrice:
          typeof item.monthlyPrice === "string"
            ? parseFloat(item.monthlyPrice)
            : item.monthlyPrice,
      },
    ]);
  };

  const removeCard = (index: number) => {
    const newPlans = [...plans];
    newPlans.splice(index, 1);
    setPlans(newPlans);
  };

  const handleChangeSelectMultiple = (value: string[]) => {
    console.log(`selected ${value}`);
  };

  const onFinish = () => {
    const values = form.getFieldsValue();
    console.log(values);
    addCard(values);
    form.resetFields();
    setOpenModal(false);
  };

  return (
    <div>
      {/* Modal paises */}
      <CustomModal
        visible={openModalPaises}
        onClose={() => setOpenModalPaises(!openModalPaises)}
        content={
          <>
            <SelectMultiple
              handleChangeSelectMultiple={handleChangeSelectMultiple}
            />
          </>
        }
        title="Agregar paises"
      />
      {/* Modal planes */}
      <CustomModal
        visible={openModal}
        onClose={() => setOpenModal(!openModal)}
        content={
          <>
            <Form form={form} onFinish={onFinish}>
              <Form.Item
                name="planName"
                label="Plan Name"
                rules={[
                  { required: true, message: "Please enter the plan name!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="price"
                label="Price"
                rules={[{ required: true, message: "Please enter the price!" }]}
              >
                <Input type="number" />
              </Form.Item>

              <Form.Item
                name="currency"
                label="Currency"
                rules={[
                  { required: true, message: "Please enter the currency!" },
                ]}
              >
                <Select
                  options={[
                    {
                      label: "🇩🇴 Dominican Republic",
                      value: "DOP 🇩🇴",
                    },

                    {
                      label: "🇨🇳 China",
                      value: "CNY 🇨🇳",
                    },
                    {
                      label: "🇺🇸 USA",
                      value: "USD 🇺🇸",
                    },
                    {
                      label: "🇯🇵 Japan",
                      value: "JPY 🇯🇵",
                    },
                    {
                      label: "🇰🇷 Korea",
                      value: "KPW 🇰🇷",
                    },
                    {
                      label: "🇦🇷 Argentina",
                      value: "ARS 🇦🇷",
                    },
                    {
                      label: "🇧🇷 Brazil",
                      value: "BRL 🇧🇷",
                    },
                    {
                      label: "🇨🇦 Canada",
                      value: "CAD 🇨🇦",
                    },
                    {
                      label: "🇲🇽 Mexico",
                      value: "MXN 🇲🇽",
                    },
                    {
                      label: "🇨🇴 Colombia",
                      value: "COP 🇨🇴",
                    },
                    {
                      label: "🇩🇪 Germany",
                      value: "EUR 🇩🇪",
                    },
                    {
                      label: "🇫🇷 France",
                      value: "EUR 🇫🇷",
                    },
                    {
                      label: "🇮🇹 Italy",
                      value: "EUR 🇮🇹",
                    },
                    {
                      label: "🇦🇺 Australia",
                      value: "AUD 🇦🇺",
                    },
                    {
                      label: "🇮🇳 India",
                      value: "INR 🇮🇳",
                    },
                  ]}
                />
              </Form.Item>

              <Form.Item
                name="allowImages"
                label="Allow Images"
                valuePropName="checked"
              >
                <Checkbox>Allow Images</Checkbox>
              </Form.Item>

              <Form.Item
                name="allowVideos"
                label="Allow Videos"
                valuePropName="checked"
              >
                <Checkbox>Allow Videos</Checkbox>
              </Form.Item>

              <Form.Item
                name="allowChat"
                label="Allow Chat"
                valuePropName="checked"
              >
                <Checkbox>Allow Chat</Checkbox>
              </Form.Item>

              <Form.Item>
                <Space>
                  <Button type="primary" htmlType="submit">
                    Add Plan
                  </Button>
                  <Button onClick={() => setOpenModal(!openModal)}>
                    Cancel
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </>
        }
        title="Agregar planes"
      />

      <HeaderPages
        primaryButton={true}
        titlePrimaryButton={"Agregar planes"}
        metodoPrimaryButton={() => setOpenModal(true)}
        titlePage={"Mis planes"}
        giftSuscription={true}
        titleGiftSuscription={"Paises permitidos"}
        metodoGiftSuscription={() => {
          setOpenModalPaises(true);
        }}
      />

      <Card style={{ marginTop: "30px" }}>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {plans.map((plan, index) => (
            <div key={plan.id}>
              <CloseCircleFilled onClick={() => removeCard(index)} />
              <CardPlans {...plan} />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
