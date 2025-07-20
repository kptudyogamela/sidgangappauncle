export default function ReturnRefundPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-red-500">Return & Refund Policy</h1>

      <p className="mb-4">
        At Maruthi Auto Components (MAC), our return and refund policy reflects
        international standards in B2B manufacturing and industrial supply. Due to the
        custom and precision nature of our products, returns are only accepted under
        specific conditions outlined below.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-8 mb-2">Eligibility for Returns</h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Products must be defective or not compliant with approved technical specifications.</li>
        <li>Return requests must be submitted in writing within 7 business days of receipt.</li>
        <li>Items must be unused, uninstalled, and returned in original packaging.</li>
        <li>MAC reserves the right to inspect the item before approving a return.</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-700 mt-8 mb-2">Refund Terms</h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Upon confirmation, MAC may issue a repair, replacement, or refund based on feasibility.</li>
        <li>Refunds, where applicable, are processed within 15 business days using the original payment method.</li>
        <li>Return shipping is the buyer’s responsibility unless the issue is caused by MACs error.</li>
      </ul>

      <p className="mb-4">
        This policy ensures fairness, accountability, and quality assurance in all
        commercial transactions with Maruthi Auto Components.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-8 mb-2">Contact Us</h2>
      <p className="mb-4">
        For any questions or return requests, please contact us at:{' '}
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
