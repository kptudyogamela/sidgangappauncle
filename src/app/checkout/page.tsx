"use client";

import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const CheckoutPage = () => {
  const searchParams = useSearchParams();

  const product = {
    name: searchParams.get("product") || "Shoe Rack",
    price: Number(searchParams.get("price")) || 0,
    color: searchParams.get("color") || "Natural Wood",
    size: searchParams.get("size") || "3-Tier",
  };

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const isFormValid = formData.name && formData.address && formData.phone;

  // WhatsApp Order
  const handleWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    const message = `🛒 *New Shoe Rack Order Received!*\n
─────────────────────────────
👤 *Customer:* ${formData.name}
📞 *Phone:* ${formData.phone}
🏠 *Address:* ${formData.address}
─────────────────────────────
📦 *Product:* ${product.name}
🎨 *Color:* ${product.color}
📏 *Size:* ${product.size}
💰 *Price:* ₹${product.price}
─────────────────────────────
*Please confirm this order.*`;

    const whatsappNumber = "919008234224";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };
  const handleEmailOrder = () => {
    if (!isFormValid) return;

    alert("Opening your default email app. Please confirm and send the order email.");

    const subject = encodeURIComponent("New Shoe Rack Order");
    const body = encodeURIComponent(`🛒 New Shoe Rack Order Received!

Customer Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}

Product: ${product.name}
Color: ${product.color}
Size: ${product.size}
Price: ₹${product.price}

Please confirm the order.`);

    window.location.href = `mailto:mac@maruthiauto.com?subject=${subject}&body=${body}`;
  };



  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold mb-6">Checkout</h1>

      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
        <h2 className="text-xl font-medium mb-2">Order Summary</h2>
        <p>
          Product: <strong>{product.name}</strong>
        </p>
        <p>Color: {product.color}</p>
        <p>Size: {product.size}</p>
        <p className="text-red-600 font-semibold mt-2">Total: ₹{product.price}</p>
      </div>

      <form className="space-y-4 bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-xl font-medium mb-4">Shipping Details</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full border p-3 rounded-md"
          required
        />
        <textarea
          placeholder="Shipping Address"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
          className="w-full border p-3 rounded-md"
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full border p-3 rounded-md"
          required
        />

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button
            type="button"
            onClick={handleWhatsAppOrder}
            disabled={!isFormValid}
            className={`w-full py-3 font-medium rounded-md transition ${isFormValid ? "bg-green-600 text-white hover:bg-green-700" : "bg-green-300 text-white cursor-not-allowed"
              }`}
          >
            Send via WhatsApp
          </button>

          <button
            type="button"
            onClick={handleEmailOrder}
            disabled={!isFormValid}
            className={`w-full py-3 font-medium rounded-md transition ${isFormValid ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-300 text-white cursor-not-allowed"
              }`}
          >
            Send via Email
          </button>

        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
