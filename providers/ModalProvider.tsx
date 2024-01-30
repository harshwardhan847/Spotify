"use client";
import AuthModal from "@/components/AuthModal";
import Modal from "@/components/Modal";
import React from "react";

type Props = {};

const ModalProvider = (props: Props) => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return (
    <>
      <AuthModal/>
    </>
  );
};

export default ModalProvider;
