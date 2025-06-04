'use client';

import React from "react";
import ProductsClient from "./ProductsClient";

export default function ProductsPage() {
  return (
    <main className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <ProductsClient />
    </main>
  );
}
