export default function PrivacyPolicy() {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-white min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto bg-white/90 rounded-2xl shadow-xl px-6 sm:px-10 py-12 sm:py-16 text-gray-800 scroll-mt-24">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-red-600 mb-10 tracking-tight">
          Privacy Policy
        </h1>

        <p className="mb-6 text-base sm:text-lg text-gray-700 leading-relaxed">
          This Privacy Policy outlines how Maruthi Auto Components (MAC) collects, uses, and protects
          any information that you provide when using our website or engaging with our services. We are
          committed to ensuring that your privacy is protected in accordance with applicable laws.
        </p>

        {[
          {
            title: '1. Information We Collect',
            body: `We may collect personal information such as your name, contact details, email address, 
            company name, and other relevant data when you fill out contact forms, request information, 
            or interact with our website.`,
          },
          {
            title: '2. How We Use the Information',
            body: `The information we collect is used to understand your needs and provide better service, 
            including:`,
            list: [
              'Responding to inquiries and requests',
              'Providing quotations and business correspondence',
              'Internal record keeping',
              'Improving our products and services',
              'Sending promotional emails (only if you have opted in)',
            ],
          },
          {
            title: '3. Data Security',
            body: `We are committed to ensuring that your information is secure. To prevent unauthorized access 
            or disclosure, we have appropriate physical, electronic, and managerial procedures in place.`,
          },
          {
            title: '4. Sharing of Information',
            body: `We do not sell, rent, or lease your personal information. Information may only be shared with 
            trusted partners essential for service delivery, such as logistics or tech providers.`,
          },
          {
            title: '5. Cookies',
            body: `Our website may use cookies to enhance your experience. You can manage your cookie preferences 
            through your browser settings.`,
          },
          {
            title: '6. Your Rights',
            body: `You have the right to request or correct personal information we hold about you. Please 
            contact us for any updates or concerns.`,
          },
          {
            title: '7. Third-Party Links',
            body: `Our site may link to external websites. We are not responsible for their content or privacy 
            practices. Use such links at your discretion.`,
          },
          {
            title: '8. Changes to this Policy',
            body: `MAC may update this policy from time to time. Please check this page regularly to ensure 
            you agree with any changes.`,
          },
          {
            title: '9. Contact Us',
            body: `If you have any questions about this Privacy Policy or the handling of your information, 
            please email us at: `,
            link: {
              label: 'maruthiautocomponents@gmail.com',
              href: 'mailto:maruthiautocomponents@gmail.com',
            },
          },
        ].map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">{section.title}</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {section.body}
              {section.link && (
                <>
                  {' '}
                  <a
                    href={section.link.href}
                    className="text-red-500 underline break-words"
                  >
                    {section.link.label}
                  </a>
                </>
              )}
            </p>
            {section.list && (
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 text-base sm:text-lg">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
