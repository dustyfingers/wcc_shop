"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";

import ProviderWrapper from "../components/ProviderWrapper";
import CheckoutForm from "../components/CheckoutForm";
import Navbar from "../components/Navbar";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK || "");

export default function Checkout() {
  const [clientSecret, setClientSecret] = useState<string>();
  const fetchClientSecret = async () => {
    const res = await fetch("/api/get-secret");
    const jsonRes = await res.json();
    setClientSecret(jsonRes.clientSecret);
  };
  useEffect(() => {
    fetchClientSecret();
  }, []);
  const stripeOptions = {
    clientSecret,
  };
  return (
    <ProviderWrapper>
      <Navbar />
      <main className="content_wrapper">
        {clientSecret && (
          <Elements stripe={stripePromise} options={stripeOptions}>
            <CheckoutForm />
          </Elements>
        )}
      </main>
    </ProviderWrapper>
  );
}
