export default function Disclaimer() {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-white min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto bg-white/90 rounded-2xl shadow-xl px-6 sm:px-10 py-12 sm:py-16 text-gray-800 scroll-mt-24">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-red-600 mb-10 tracking-tight">
          Disclaimer
        </h1>

        <p className="mb-6 text-base sm:text-lg text-gray-700 leading-relaxed">
          The information provided by Maruthi Auto Components (MAC) on this website is for
          general informational purposes only. While the content is provided in good faith,
          we make no warranties about the accuracy, completeness, or reliability of any
          material presented.
        </p>

        {[
          {
            title: 'Product Disclaimer',
            body: `Product descriptions and specifications on this website are subject to change without prior notice.
            MAC reserves the right to improve or modify its products. Users are encouraged to consult with us
            before making business decisions based on website information.`,
          },
          {
            title: 'Limitation of Liability',
            body: `Maruthi Auto Components shall not be held liable for any special, direct, indirect, incidental,
            or consequential damages resulting from the use of this website or its contents. Users access this site
            and its resources at their own risk.`,
          },
          {
            title: 'External Links',
            body: `Our website may include links to external third-party sites. MAC is not responsible for the content,
            privacy policies, or practices of any third-party websites linked here.`,
          },
          {
            title: 'No Professional Advice',
            body: `All information provided on this site is for general understanding and does not constitute professional,
            engineering, legal, or technical advice. Users should seek specialized consultation where necessary.`,
          },
          {
            title: 'Contact Us',
            body: `If you have questions about this disclaimer or need further clarification, please contact us at: `,
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
          </div>
        ))}
      </div>
    </div>
  );
}
