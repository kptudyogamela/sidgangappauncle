export default function ShippingPolicy() {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-white min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto bg-white/90 rounded-2xl shadow-xl px-6 sm:px-10 py-12 sm:py-16 text-gray-800 scroll-mt-24">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-red-600 mb-10 tracking-tight">
          Shipping Policy
        </h1>

        <p className="mb-6 text-base sm:text-lg leading-relaxed">
          Maruthi Auto Components (MAC) employs industry-standard practices for handling,
          packaging, and shipping of industrial-grade products across regional and international
          destinations. This Shipping Policy ensures transparency and product safety during
          logistics operations.
        </p>

        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Shipping Protocol
          </h2>
          <ul className="list-disc list-inside space-y-3 text-base sm:text-lg text-gray-700 leading-relaxed">
            <li>
              All shipments are governed by Incoterms and terms listed in the Purchase Order
              or formal agreement.
            </li>
            <li>
              Orders are shipped using reliable logistics partners with proper documentation
              and labeling.
            </li>
            <li>
              Each item is packaged to industrial-grade safety standards to prevent damage in transit.
            </li>
            <li>Tracking details are provided post-dispatch where applicable.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Responsibilities
          </h2>
          <ul className="list-disc list-inside space-y-3 text-base sm:text-lg text-gray-700 leading-relaxed">
            <li>
              Delivery schedules are indicative and may be affected by customs, weather,
              or logistical delays.
            </li>
            <li>
              Risk of loss typically passes to the customer once the product is handed over
              to the carrier, unless otherwise agreed in writing.
            </li>
          </ul>
        </section>

        <p className="mb-10 text-base sm:text-lg leading-relaxed">
          MAC maintains clear and responsible shipping practices to ensure customer satisfaction,
          timely delivery, and product integrity at every stage of the shipping process.
        </p>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            For shipping-related queries or assistance, please contact us at:{' '}
            <a
              href="mailto:maruthiautocomponents@gmail.com"
              className="text-red-600 underline hover:text-red-700"
            >
              maruthiautocomponents@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
