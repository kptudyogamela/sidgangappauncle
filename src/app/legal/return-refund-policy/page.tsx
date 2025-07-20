export default function ReturnRefundPolicy() {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-white min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto bg-white/90 rounded-2xl shadow-xl px-6 sm:px-10 py-12 sm:py-16 text-gray-800 scroll-mt-24">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-red-600 mb-10 tracking-tight">
          Return & Refund Policy
        </h1>

        <p className="mb-6 text-base sm:text-lg leading-relaxed">
          At Maruthi Auto Components (MAC), our return and refund policy reflects
          international standards in B2B manufacturing and industrial supply. Due to the
          custom and precision nature of our products, returns are only accepted under
          specific conditions outlined below.
        </p>

        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Eligibility for Returns
          </h2>
          <ul className="list-disc list-inside space-y-3 text-base sm:text-lg text-gray-700 leading-relaxed">
            <li>Products must be defective or not compliant with approved technical specifications.</li>
            <li>Return requests must be submitted in writing within 7 business days of receipt.</li>
            <li>Items must be unused, uninstalled, and returned in original packaging.</li>
            <li>MAC reserves the right to inspect the item before approving a return.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Refund Terms
          </h2>
          <ul className="list-disc list-inside space-y-3 text-base sm:text-lg text-gray-700 leading-relaxed">
            <li>Upon confirmation, MAC may issue a repair, replacement, or refund based on feasibility.</li>
            <li>Refunds, where applicable, are processed within 15 business days using the original payment method.</li>
            <li>Return shipping is the buyer’s responsibility unless the issue is caused by MAC’s error.</li>
          </ul>
        </section>

        <p className="mb-10 text-base sm:text-lg leading-relaxed">
          This policy ensures fairness, accountability, and quality assurance in all
          commercial transactions with Maruthi Auto Components.
        </p>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            For any questions or return requests, please contact us at:{' '}
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
