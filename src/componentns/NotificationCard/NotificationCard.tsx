import {
    NotificationFilled
} from "@ant-design/icons";
import type { NotificationArgsProps } from "antd";
import { notification } from "antd";
import React from "react";

type NotificationPlacement = NotificationArgsProps["placement"];

const NotificationCard: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Notification de prueba`,
      description:
        "Aqui ira el contenido de las notificaciones.",
      placement,
    });
  };

  return (
    <>
      {contextHolder}

      <NotificationFilled
        onClick={() => openNotification("bottomRight")}
        style={{
        }}
      />
    </>
  );
};

export default NotificationCard;
