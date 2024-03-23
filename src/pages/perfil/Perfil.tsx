import { Card, Col, Divider, Row } from "antd";
import { CustomButton } from "../../componentns/CustomButton";
import { HeaderPages } from "../../componentns/HeaderPages/HeaderPages";
import Title from "../../componentns/Title";
import UpaloadImage from "../../componentns/UploadImage";
import "./Perfil.css";
import { useAppContext } from "../../context/AppContext";
import APPTEXT from "../../utils/APPTEXT";
import Swal from "sweetalert2";

 const Perfil = () => {
  const { locale } = useAppContext();

  const translations =
    APPTEXT[locale.locale as keyof typeof APPTEXT] || APPTEXT.es;

  return (
    <div>
      <HeaderPages
        primaryButton={true}
        titlePrimaryButton={translations.perfilPage.buttonSave}
        metodoPrimaryButton={function (): void {
          Swal.fire({
            title: translations.perfilPage.titleModalConfirm,
            text: translations.perfilPage.messageModalConfirm,
            icon: "success",
          });
        }}
        titlePage={translations.perfilPage.title}
      />
      <Card style={{ marginTop: "20px" }}>
        <Row justify={"center"}>
          <div
            style={{
              width: "70%",
              minHeight: "500px",
              margin: "auto",
              position: "relative",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                // background: "green",
                position: "relative",
                backgroundImage: `url('https://marketplace.canva.com/EAFYxMletq8/1/0/1600w/canva-fondo-de-pantalla-figuras-abstractas-rosa-LIgGZSYmuXE.jpg')`,
                borderRadius: "8px",
              }}
              className="custom_background_image_profile"
            >
              <div
                style={{
                  padding: "50px 0px",
                  textAlign: "center",
                }}
              >
                <img
                  src="https://yt3.googleusercontent.com/SUrsw-lQf4qvrRTxXnTBECIGgFL-P5Xh-ketlC8O90Sq6OPnN_YcmytiSWrp8bqnWEbe9UQonw=s900-c-k-c0x00ffffff-no-rj"
                  alt="user"
                  title="user"
                  style={{
                    borderRadius: "50%",
                    border: "solid 4px #fff",
                    height: "8rem",
                  }}
                />
                <p>
                  <Title title="Fernanda Jable" fontSize="2rem" />
                  <span style={{ fontWeight: "700" }}>@ferjable</span>
                </p>
              </div>
            </div>

            <Row
              gutter={16}
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <Col xs={24} lg={11}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Title
                    title={translations.perfilPage.principal}
                    fontSize="1.4rem"
                  />

                  <CustomButton
                    title={`${translations.perfilPage.suscribeFor} $25.52 USD ${translations.perfilPage.aMonth}`}
                    type={"primary"}
                    onClick={function (): void {
                      throw new Error("Function not implemented.");
                    }}
                  />
                </div>
              </Col>

              <Col xs={24} lg={11}>
                <Card style={{ border: "solid 2px lightgray" }}>
                  <Title
                    title={translations.perfilPage.chat}
                    fontSize="1.4rem"
                  />
                  <p
                    style={{
                      background: "var(--priv-green)",
                      borderRadius: "8px",
                      fontWeight: "800",
                      color: "#fff",
                      paddingLeft: "10px",
                    }}
                  >
                    {translations.perfilPage.hello}
                  </p>
                  <p
                    style={{
                      marginTop: "10px",
                      textAlign: "end",
                      background: "var(--priv-primary)",
                      borderRadius: "8px",
                      fontWeight: "800",
                      color: "#fff",
                      paddingRight: "10px",
                    }}
                  >
                    {translations.perfilPage.howAreYou}
                  </p>
                </Card>
              </Col>
            </Row>
            <section style={{ marginTop: "20px" }}>
              <Title title={translations.perfilPage.colors} fontSize="2rem" />
              <Row gutter={16}>
                <Col xs={24} lg={8}>
                  <fieldset style={{ padding: "5px" }}>
                    <legend>{translations.perfilPage.principalColor}</legend>
                    <input type="color" name="color1" id="color1" />
                  </fieldset>
                </Col>
                <Col xs={24} lg={8}>
                  <fieldset style={{ padding: "5px" }}>
                    <legend>{translations.perfilPage.colorTag}</legend>
                    <input type="color" name="color2" id="color2" />
                  </fieldset>
                </Col>

                <Col xs={24} lg={8}>
                  <fieldset style={{ padding: "5px" }}>
                    <legend>{translations.perfilPage.colorChat}</legend>
                    <input type="color" name="color3" id="color3" />
                  </fieldset>
                </Col>
              </Row>
            </section>

            <Divider
              style={{
                borderWidth: "4px",
              }}
            />
            <section style={{ marginTop: "20px" }}>
              <Title title={translations.perfilPage.images} fontSize="2rem" />

              <Row gutter={16}>
                <Col xs={24} lg={12}>
                  <fieldset style={{ padding: "5px" }}>
                    <legend>{translations.perfilPage.imageProfile}</legend>
                    <UpaloadImage />
                  </fieldset>
                </Col>
                <Col xs={24} lg={12}>
                  <fieldset style={{ padding: "5px" }}>
                    <legend>{translations.perfilPage.profileImage}</legend>
                    <UpaloadImage />
                  </fieldset>
                </Col>
              </Row>
            </section>
          </div>
        </Row>
      </Card>
    </div>
  );
};
export default Perfil