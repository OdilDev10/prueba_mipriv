import React from 'react';
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";
import "./CardPlans.css";

interface CardProps {
  planName: string;
  price: number;
  currency: string;
  monthlyPrice: number;
  allowImages: boolean;
  allowVideos: boolean;
  allowChat: boolean;
}

export const CardPlans: React.FC<CardProps> = ({
  planName,
  price,
  currency,
  allowImages,
  allowVideos,
  allowChat,
}) => {

  const currencyLocal = currency.split(' ')[0]
  const flagLocal = currency.split(' ')[1]

  return (
    <div className="cardPlans">
      <section>
        <div className="cards">
          <div className="card">
            <span>{planName}</span>
            <h1>
              {`${price}${currencyLocal}`}
              <span>{flagLocal}</span>
            </h1>
            <p>
              {`${price}${currencyLocal}`}
              <span>/ mo</span>
            </p>

            <p>
              Imagenes{' '}
              <span>{allowImages ? <CheckCircleFilled /> : <CloseCircleFilled />}</span>
            </p>

            <p>
              Videos{' '}
              <span>{allowVideos ? <CheckCircleFilled /> : <CloseCircleFilled />}</span>
            </p>
            <p>
              Chat{' '}
              <span>{allowChat ? <CheckCircleFilled /> : <CloseCircleFilled />}</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
