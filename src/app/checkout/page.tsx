"use client";

import { Suspense } from "react";
import CheckoutPage from "./CheckoutContent"; // move your main logic here

export default function Checkout() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading checkout...</div>}>
      <CheckoutPage />
    </Suspense>
  );
}
