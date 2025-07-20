export default function ShippingPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-red-500">Shipping Policy</h1>

      <p className="mb-4">
        Maruthi Auto Components (MAC) employs industry-standard practices for handling,
        packaging, and shipping of industrial-grade products across regional and international
        destinations. This Shipping Policy ensures transparency and product safety during
        logistics operations.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-8 mb-2">Shipping Protocol</h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>All shipments are governed by Incoterms and terms listed in the Purchase Order or formal agreement.</li>
        <li>Orders are shipped using reliable logistics partners with proper documentation and labeling.</li>
        <li>Each item is packaged to industrial-grade safety standards to prevent damage in transit.</li>
        <li>Tracking details are provided post-dispatch where applicable.</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-700 mt-8 mb-2">Responsibilities</h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Delivery schedules are indicative and may be affected by customs, weather, or logistical delays.</li>
        <li>
          Risk of loss typically passes to the customer once the product is handed over to the carrier,
          unless otherwise agreed in writing.
        </li>
      </ul>

      <p className="mb-4">
        MAC maintains clear and responsible shipping practices to ensure customer satisfaction,
        timely delivery, and product integrity at every stage of the shipping process.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-8 mb-2">Contact Us</h2>
      <p className="mb-4">
        For shipping-related queries or assistance, please contact us at:{' '}
        <a
          href="mailto:maruthiautocomponents@gmail.com"
          className="text-red-500 underline"
        >
          maruthiautocomponents@gmail.com
        </a>
      </p>
    </div>
  );
}
