import { Card, Col, Form, Input, Row, Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import React, { useRef, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import "./CreditCard.css";

const CURRENT_YEAR = new Date().getFullYear();
// const CURRENT_MONTH = new Date().getMonth() + 1;

interface CreditCardState {
  sliderLocation: string;
  cardNumber: string;
  cardName: string;
  cardMonth: number;
  cardYear: number;
  cardCvv: string;
  cardType: string;
  toggleMonth: boolean;
  toggleYear: boolean;
  showCard: boolean;
  cardFlipped: boolean;
}

const MONTHS: Record<number, string> = {};
const YEARS: number[] = [CURRENT_YEAR];

for (let i = 1; i <= 12; i++) {
  MONTHS[i] = i.toString().length === 1 ? `0${i}` : i.toString();
  YEARS.push(CURRENT_YEAR + i);
}

const CreditCard: React.FC = () => {
  const {  isDarkMode } = useAppContext();

  const [state, setState] = useState<CreditCardState>({
    sliderLocation: "",
    cardNumber: "",
    cardName: "",
    cardMonth: 0,
    cardYear: 0,
    cardCvv: "",
    cardType: "visa",
    toggleMonth: true,
    toggleYear: true,
    showCard: false,
    cardFlipped: false,
  });

  const numberInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const monthInputRef = useRef<HTMLSelectElement>(null);
  const yearInputRef = useRef<HTMLSelectElement>(null);
  const cvvInputRef = useRef<HTMLInputElement>(null);

  // const handleChange = (
  //   // event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  //   // type: string
  // ) => {
  //   // let { value } = event.target;
  //   // if (type === "cardNumber") {
  //   //   value = value.replace(/ /gi, "");
  //   //   if (isNaN(Number(value))) {
  //   //     return;
  //   //   } else {
  //   //     const cardType = getCardType(value);
  //   //     setState({ ...state, [type]: value, cardType });
  //   //   }
  //   // } else if (type === "cardName") {
  //   //   const regName = /^[a-zA-Z\s]*$/;
  //   //   if (!regName.test(value)) {
  //   //   } else {
  //   //     setState({ ...state, [type]: value });
  //   //   }
  //   // } else if (type === "cardMonth") {
  //   //   value = value
  //   //   setState((prevState) => ({
  //   //     ...prevState,
  //   //     [type]: value,
  //   //     toggleMonth: !prevState.toggleMonth,
  //   //   }));
  //   // } else if (type === "cardYear") {
  //   //   value = value
  //   //   const { cardMonth } = state;
  //   //   if (value === CURRENT_YEAR && cardMonth <= CURRENT_MONTH) {
  //   //     setState((prevState) => ({
  //   //       ...prevState,
  //   //       cardMonth: 0,
  //   //       cardYear: value,
  //   //       toggleYear: !prevState.toggleYear,
  //   //       toggleMonth: !prevState.toggleMonth,
  //   //     }));
  //   //   } else {
  //   //     setState((prevState) => ({
  //   //       ...prevState,
  //   //       [type]: value,
  //   //       toggleYear: !prevState.toggleYear,
  //   //     }));
  //   //   }
  //   // } else if (type === "cardCvv") {
  //   //   value = value.replace(/ /gi, "");
  //   //   if (isNaN(Number(value))) {
  //   //     return;
  //   //   } else {
  //   //     setState({ ...state, [type]: value });
  //   //   }
  //   // }
  // };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const canSubmit = () => {
    const { cardNumber, cardName, cardMonth, cardYear, cardCvv } = state;

    return (
      cardNumber.length === 16 &&
      cardName.length > 4 &&
      cardCvv.length === 3 &&
      cardMonth !== 0 &&
      cardYear !== 0
    );
  };

  // const moveSlider = (
  //   // event: React.FocusEvent<HTMLSelectElement>,
  //   position: string
  // ) => {
  //   position = ["year", "month"].includes(position) ? "expiration" : position;
  //   setState({ ...state, sliderLocation: position });
  // };

  const setFocus = (event: React.MouseEvent<HTMLDivElement>, type: string) => {
    // let { sliderLocation } = state;

    if (event.currentTarget.className.includes("year")) {
      event.stopPropagation();
    }
    if (type === "number" && numberInputRef.current) {
      numberInputRef.current.focus();
    } else if (type === "name" && nameInputRef.current) {
      nameInputRef.current.focus();
    } else if (type === "month" && monthInputRef.current) {
      monthInputRef.current.focus();
    } else if (type === "year" && yearInputRef.current) {
      yearInputRef.current.focus();
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      !cvvInputRef.current ||
      !cvvInputRef.current.contains(event.target as Node)
    ) {
      setState({ ...state, cardFlipped: false });
    }
    if (
      (nameInputRef.current &&
        nameInputRef.current.contains(event.target as Node)) ||
      (numberInputRef.current &&
        numberInputRef.current.contains(event.target as Node)) ||
      (monthInputRef.current &&
        monthInputRef.current.contains(event.target as Node)) ||
      (yearInputRef.current &&
        yearInputRef.current.contains(event.target as Node))
    ) {
      return;
    }
    setState({ ...state, sliderLocation: "" });
  };

  // const formatCardNumber = (value: string) => {
  //   let v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  //   let matches = v.match(/\d{4,16}/g);
  //   let match = (matches && matches[0]) || "";
  //   let parts: string[] = [];
  //   for (let i = 0, len = match.length; i < len; i += 4) {
  //     parts.push(match.substring(i, i + 4));
  //   }
  //   if (parts.length) {
  //     return parts.join(" ");
  //   } else {
  //     return value;
  //   }
  // };

  // const getCardType = (number: string) => {
  //   let re = new RegExp("^4");
  //   if (number.match(re) != null) return "visa";
  //   re = new RegExp("^(34|37)");
  //   if (number.match(re) != null) return "amex";
  //   re = new RegExp("^5[1-5]");
  //   if (number.match(re) != null) return "mastercard";
  //   re = new RegExp("^6011");
  //   if (number.match(re) != null) return "discover";
  //   return "visa";
  // };

  const displayNumber: string[] = [];

  for (let i = 0; i < 16; i++) {
    let displayDigit = "#";
    if (typeof state.cardNumber[i] !== "undefined") {
      displayDigit = i > 3 && i < 12 ? "*" : state.cardNumber[i];
    }
    displayNumber.push(displayDigit);
  }

  const canSubmitValue = !canSubmit();

  return (
    <>
      <div className="custom_showcard card-form" onClick={handleClick}>
        <div className={`card container ${state.showCard ? "show" : ""}`}>
          <div className={` card inner ${state.cardFlipped ? "flipped" : ""}`}>
            <div className="front">
              <img
                className="card cover"
                src="https://source.unsplash.com/collection/8497941/430x270"
                onLoad={() => setState({ ...state, showCard: true })}
              />
              <div className="card overlay" />
              <div
                className={`card slider ${
                  state.sliderLocation.length > 0
                    ? `on-${state.sliderLocation}`
                    : ""
                }`}
              />
              <div className="card content">
                <div className="chip" />
                <div className={`type ${state.cardType}`} />
                <div
                  className="number"
                  onClick={(event) => setFocus(event, "number")}
                  ref={numberInputRef}
                >
                  {displayNumber.map((digit, index) => (
                    <div className="digit-wrapper" key={index}>
                      <div
                        className={
                          digit === "#" ? "digit shown" : "digit hidden"
                        }
                      >
                        #
                      </div>
                      <div
                        className={
                          digit === "#" ? "digit hidden" : "digit shown"
                        }
                      >
                        {digit === "#" ? "" : digit}
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="name"
                  onClick={(event) => setFocus(event, "name")}
                  ref={nameInputRef}
                >
                  <label
                    style={{
                      color: isDarkMode ? "#fff" : "#000",
                    }}
                    htmlFor="name"
                  >
                    Card Holder
                  </label>
                  <div id="name">
                    <div
                      className={`placeholder ${
                        state.cardName.length > 0 ? "hidden" : "shown"
                      }`}
                    >
                      FULL NAME
                    </div>
                    <div className="name-container">
                      {state.cardName.split("").map((char, index) => (
                        <div
                          className={`character ${
                            /\s/.test(char) ? "space" : ""
                          }`}
                          key={index}
                        >
                          {char}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className="expiration"
                  onClick={(event) => setFocus(event, "month")}
                  // ref={monthInputRef}
                >
                  <label
                    style={{
                      color: isDarkMode ? "#fff" : "#000",
                    }}
                    htmlFor="expiration"
                  >
                    Expires
                  </label>
                  <div id="expiration">
                    <div
                      className={`double-digit ${
                        state.toggleMonth ? "toggle1" : "toggle2"
                      }`}
                    >
                      {state.cardMonth === 0
                        ? "MM"
                        : `${state.cardMonth + 100}`.slice(-2)}
                    </div>
                    <div className="double-digit">/</div>
                    <div
                      className={`year double-digit ${
                        state.toggleYear ? "toggle1" : "toggle2"
                      }`}
                      onClick={(event) => setFocus(event, "year")}
                    >
                      {state.cardYear === 0
                        ? "YY"
                        : `${state.cardYear}`.slice(-2)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card cover back">
              <p>CVV</p>
            </div>
          </div>
        </div>
        <div className="card-inputs">
          <form onSubmit={handleSubmit}>
            <div className="lg-input">
              <label
                htmlFor="cardNumber"
                style={{
                  color: isDarkMode ? "#fff" : "#000",
                }}
              >
                Card Number
              </label>
              <Input
                style={{
                  color: isDarkMode ? "#fff" : "#000",
                }}
                className="number-input"
                id="cardNumber"
                type="text"
                // onChange={(event) => handleChange(event, "cardNumber")}
                //   onSelect={(event) => moveSlider(event, "number")}
                // value={formatCardNumber(state.cardNumber)}
                // ref={numberInputRef}
                maxLength={19}
              />
            </div>
            <div className="lg-input">
              <label
                htmlFor="cardName"
                style={{
                  color: isDarkMode ? "#fff" : "#000",
                }}
              >
                Card Holder's Name
              </label>
              <Input
                style={{
                  color: isDarkMode ? "#fff" : "#000",
                }}
                className="name-input"
                id="cardName"
                type="text"
                // onChange={(event) => handleChange(event, "cardName")}
                //   onSelect={(event) => moveSlider(event, "name")}
                // ref={nameInputRef}
                // value={state.cardName}
                maxLength={24}
              />
            </div>
            <div className="med-input">
              <label
                htmlFor="cardMonth"
                style={{
                  color: isDarkMode ? "#fff" : "#000",
                }}
              >
                Expiration Date
              </label>
              <Select
                style={{
                  color: isDarkMode ? "#fff" : "#000",
                }}
                size="large"
                className="month-input"
                id="cardMonth"
                value={state.cardMonth}
                // onChange={(value) =>
                //   handleChange({ target: { value } }, "cardMonth")
                // }
                // onFocus={(event) => moveSlider(event, "month")}
                // ref={monthInputRef}
              >
                {Object.keys(MONTHS).map((monthKey) => (
                  <Select.Option key={monthKey} value={parseInt(monthKey)}>
                    {MONTHS[parseInt(monthKey)]}
                  </Select.Option>
                ))}
              </Select>

              <Select
                size="large"
                style={{
                  color: isDarkMode ? "#fff" : "#000",
                }}
                className="year-input"
                id="cardYear"
                value={state.cardYear}
                // onChange={(event) => handleChange(event, "cardYear")}
                // onFocus={(event) => moveSlider(event, "year")}
                // ref={yearInputRef}
              >
                <Select.Option key={""} value={""}>
                  Selecciona
                </Select.Option>
                {Object.keys(YEARS).map((year) => (
                  <Select.Option key={year} value={parseInt(year)}>
                    {YEARS[parseInt(year)]}
                  </Select.Option>
                ))}
              </Select>
            </div>
            <div className="sm-input">
              <label
                style={{
                  color: isDarkMode ? "#fff" : "#000",
                }}
                htmlFor="cardCvv"
              >
                CVV
              </label>
              <Input
                style={{
                  color: isDarkMode ? "#fff" : "#000",
                }}
                className="cvv-input"
                id="cardCvv"
                value={state.cardCvv}
                // onChange={(event) => handleChange(event, "cardCvv")}
                // onSelect={() => setState({ ...state, cardFlipped: true })}
                // ref={cvvInputRef}
                maxLength={3}
              />
            </div>
            <button
              className={`lg-input ${canSubmitValue ? "disabled" : ""}`}
              disabled={canSubmitValue}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <Card className="no_custom_showcard">
        <Form>
          <Row gutter={16}>
            <Col xs={24} sm={24} lg={12}>
              <FormItem
                name={"card_number"}
                rules={[
                  {
                    type: "number",
                    required: true,
                    message: "Por favor, ingresa tu correo electrónico",
                  },
                ]}
              >
                <label
                  htmlFor="card_number"
                  style={{
                    color: "#5A607F",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  Numero de tarjeta
                </label>

                <Input
                  size="large"
                  style={{
                    width: "95%",
                  }}
                  placeholder="Numero de tarjeta"
                  // onChange={(e) => {}}
                />
              </FormItem>
            </Col>

            <Col xs={24} sm={24} lg={12}>
              <FormItem
                name={"propietario"}
                rules={[
                  {
                    required: true,
                    message: "Por favor, ingresa tu correo electrónico",
                  },
                ]}
              >
                <label
                  htmlFor="propietario"
                  style={{
                    color: "#5A607F",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  Propietario
                </label>

                <Input
                  size="large"
                  style={{
                    width: "95%",
                  }}
                  placeholder="Propietario"
                  // onChange={(e) => {}}
                />
              </FormItem>
            </Col>
          </Row>

          <Row className="med-input">
            <Col xs={24} sm={24} lg={12}>
              <label
                htmlFor="cardMonth"
                style={{
                  color: isDarkMode ? "#fff" : "#000",
                }}
              >
                Expiration Date
              </label>
              <Select
                style={{
                  color: isDarkMode ? "#fff" : "#000",
                }}
                size="large"
                className="month-input"
                id="cardMonth"
                value={state.cardMonth}
                // onChange={(value) =>
                //   handleChange({ target: { value } }, "cardMonth")
                // }
                // onFocus={(event) => moveSlider(event, "month")}
                // ref={monthInputRef}
              >
                {Object.keys(MONTHS).map((monthKey) => (
                  <Select.Option key={monthKey} value={parseInt(monthKey)}>
                    {MONTHS[parseInt(monthKey)]}
                  </Select.Option>
                ))}
              </Select>
            </Col>

            <Col xs={24} sm={24} lg={12}>
              <Select
                size="large"
                style={{
                  color: isDarkMode ? "#fff" : "#000",
                }}
                className="year-input"
                id="cardYear"
                value={state.cardYear}
                // onChange={(event) => handleChange(event, "cardYear")}
                // onFocus={(event) => moveSlider(event, "year")}
                // ref={yearInputRef}
              >
                <Select.Option key={""} value={""}>
                  Selecciona
                </Select.Option>
                {Object.keys(YEARS).map((year) => (
                  <Select.Option key={year} value={parseInt(year)}>
                    {YEARS[parseInt(year)]}
                  </Select.Option>
                ))}
              </Select>
            </Col>
          </Row>
          <div className="sm-input">
            <label
              style={{
                color: isDarkMode ? "#fff" : "#000",
              }}
              htmlFor="cardCvv"
            >
              CVV
            </label>
            <Input
              style={{
                color: isDarkMode ? "#fff" : "#000",
              }}
              className="cvv-input"
              id="cardCvv"
              value={state.cardCvv}
              // onChange={(event) => handleChange(event, "cardCvv")}
              onSelect={() => setState({ ...state, cardFlipped: true })}
              // ref={cvvInputRef}
              maxLength={3}
            />
          </div>
        </Form>
      </Card>
    </>
  );
};

export default CreditCard;
