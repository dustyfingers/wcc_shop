"use client";

import { PropsWithChildren } from "react";

import { CartProvider } from "@/app/context/Cart";

const ProviderWrapper = ({ children }: PropsWithChildren) => {
  return <CartProvider>{children}</CartProvider>;
};

export default ProviderWrapper;
