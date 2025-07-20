import Image from "next/image";

export default function ComplianceCertifications() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-red-500">Compliance & Certifications</h1>

      <p className="mb-4">
        Maruthi Auto Components (MAC) is committed to maintaining the highest levels
        of quality, safety, and regulatory compliance in all our operations. We align
        with national and international standards to ensure reliability and trust in
        our manufacturing processes and final products.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-8 mb-2">Quality Certifications</h2>
      <p className="mb-4">
        MAC holds certifications that reflect our dedication to continuous improvement,
        customer satisfaction, and adherence to industrial best practices. Key certifications include:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>ISO 9001: Quality Management System</li>
        <li>Process Control & Traceability Standards</li>
        <li>Material Testing and Compliance Procedures</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-700 mt-8 mb-2">Environmental and Safety Standards</h2>
      <p className="mb-4">
        We are committed to responsible manufacturing practices that minimize environmental impact and ensure workplace safety.
        Our facility complies with:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Environmental Regulations (Pollution Control Board clearances)</li>
        <li>Fire & Electrical Safety Certifications</li>
        <li>Employee Health & Safety Compliance</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-700 mt-8 mb-2">Compliance Documents</h2>
      <p className="mb-4">
        Copies of our certifications and audit reports are available on request for business partners and regulatory authorities.
      </p>

      <div className="mt-8 mb-6">
        <Image
          src="/Images/certificate/certificate4.png"
          alt="MAC Compliance Certificate"
          width={600}
          height={400}
          className="rounded shadow-lg mx-auto"
        />
        <p className="text-sm text-center text-gray-500 mt-2">Sample Certificate – ISO 9001</p>
      </div>

      <h2 className="text-xl font-semibold text-gray-700 mt-8 mb-2">Contact</h2>
      <p className="mb-4">
        For compliance documentation, supplier registration, or audits, contact us at:{' '}
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
