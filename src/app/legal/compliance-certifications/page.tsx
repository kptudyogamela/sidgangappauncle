import Image from "next/image";

export default function ComplianceCertifications() {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-white min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto bg-white/90 rounded-2xl shadow-xl px-6 sm:px-10 py-12 sm:py-16 text-gray-800 scroll-mt-24">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-red-600 mb-10 tracking-tight">
          Compliance & Certifications
        </h1>

        <p className="mb-6 text-base sm:text-lg text-gray-700 leading-relaxed">
          Maruthi Auto Components (MAC) is committed to maintaining the highest levels of
          quality, safety, and regulatory compliance across all operations. We align with
          national and international standards to ensure trust and excellence in our
          manufacturing processes and final products.
        </p>

        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
            Quality Certifications
          </h2>
          <p className="mb-4 text-base sm:text-lg text-gray-700">
            MAC holds certifications that reflect our dedication to continuous improvement,
            customer satisfaction, and industrial best practices. Key certifications include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base sm:text-lg">
            <li>ISO 9001: Quality Management System</li>
            <li>Process Control & Traceability Standards</li>
            <li>Material Testing and Compliance Procedures</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
            Environmental and Safety Standards
          </h2>
          <p className="mb-4 text-base sm:text-lg text-gray-700">
            We are committed to responsible manufacturing that minimizes environmental
            impact and prioritizes employee safety. Our facility complies with:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base sm:text-lg">
            <li>Environmental Regulations (Pollution Control Board clearances)</li>
            <li>Fire & Electrical Safety Certifications</li>
            <li>Employee Health & Safety Compliance</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
            Compliance Documents
          </h2>
          <p className="mb-4 text-base sm:text-lg text-gray-700">
            Copies of our certifications and audit reports are available upon request
            for business partners and regulatory authorities.
          </p>

          <div className="mt-6 mb-2">
            <Image
              src="/Images/certificate/certificate4.jpg"
              alt="MAC Compliance Certificate"
              width={1200}
              height={800}
              className="w-full h-auto rounded-xl shadow-lg"
            />
            <p className="text-sm text-center text-gray-500 mt-2">
              Sample Certificate – ISO 9001
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
            Contact
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            For compliance documentation, supplier registration, or audits, contact us at:{' '}
            <a
              href="mailto:maruthiautocomponents@gmail.com"
              className="text-red-500 underline break-words"
            >
              maruthiautocomponents@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
