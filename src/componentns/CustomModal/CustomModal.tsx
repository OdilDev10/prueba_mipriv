import { Modal } from "antd";
import React, { useEffect } from "react";

export const CustomModal = ({
  visible,
  onClose,
  content,
  title,
  haveOnOK,
  haveOnCancel
}: {
  visible: boolean;
  onClose: () => void;
  content: React.ReactNode;
  title?: string;
  haveOnOK?: boolean;
  haveOnCancel?: boolean;
}) => {
  const handleOk = () => {
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  useEffect(() => {
    console.log(visible);
  }, [visible]);

  return (
    <Modal
      title={title || "Título del Modal"}
      open={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      okButtonProps={{ style: { display: haveOnOK ? undefined : "none" } }}
      cancelButtonProps={{ style: { display: haveOnCancel ? undefined : "none" } }}

    >
      {content}
    </Modal>
  );
};
