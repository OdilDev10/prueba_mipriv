import React from "react";
import { CustomButton } from "../CustomButton";
import Title from "../Title";
import './HeaderPages.css'


export const HeaderPages = ({
  primaryButton,
  secondButton,
  titlePrimaryButton,
  titleSecondButton,
  metodoPrimaryButton,
  metodoSecondButton,
  titlePage,
  giftSuscription,
  metodoGiftSuscription,
  titleGiftSuscription,
}: {
  primaryButton: boolean;
  secondButton?: boolean;
  titlePrimaryButton: string | React.ReactNode;
  titleSecondButton?: string | React.ReactNode;
  metodoPrimaryButton: () => void;
  metodoSecondButton?: () => void;
  titlePage: string | React.ReactNode;
  giftSuscription?: boolean;
  metodoGiftSuscription?: () => void;
  titleGiftSuscription?: string | React.ReactNode;
}) => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "auto",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      <Title title={titlePage} />

      <div style={{ display: "flex", gap: "12px", height: "auto" }}>
        {giftSuscription && metodoGiftSuscription && titleGiftSuscription && (
          <CustomButton
            type="primary"
            title={titleGiftSuscription}
            onClick={metodoGiftSuscription}
          />
        )}
        {secondButton && titleSecondButton && metodoSecondButton && (
          <CustomButton
            type="transparent"
            title={titleSecondButton}
            onClick={metodoSecondButton}
          />
        )}
        {primaryButton && (
          <CustomButton
            type="primary"
            title={titlePrimaryButton}
            onClick={metodoPrimaryButton}
          />
        )}
      </div>
    </section>
  );
};
