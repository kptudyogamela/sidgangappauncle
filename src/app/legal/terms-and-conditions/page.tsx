import React from 'react';

export default function Page() {
  return (
    <div className="max-w-3xl px-4 sm:px-6 lg:px-8 py-24 mx-auto scroll-mt-24 text-gray-900 font-sans">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-red-600 mb-10 tracking-tight">
        Terms & Conditions
      </h1>

      <p className="mb-6 text-base sm:text-lg leading-relaxed">
        These Terms and Conditions govern the use of the website and the services provided by Maruthi Auto Components (MAC).
        By accessing or using our website, you agree to comply with and be bound by the following terms.
      </p>

      {[
        {
          title: '1. General Information',
          content:
            'All content provided on this website is for informational purposes only. While we strive to keep the information up to date and correct, MAC makes no representations or warranties regarding the accuracy, completeness, or reliability of any information on the site.',
        },
        {
          title: '2. Use of Website',
          content:
            'You may use our website for lawful purposes only. You are not permitted to use the site to distribute any content that is illegal, harmful, or offensive, or to attempt unauthorized access to the website or its servers.',
        },
        {
          title: '3. Intellectual Property',
          content:
            'All content on this website, including text, graphics, logos, and images, is the property of Maruthi Auto Components and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or use any part of this content without written permission.',
        },
        {
          title: '4. Product Information',
          content:
            'All product descriptions, specifications, and pricing are subject to change without notice. MAC reserves the right to make modifications to its products or services at any time.',
        },
        {
          title: '5. Limitation of Liability',
          content:
            'MAC shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the website or any content or services provided.',
        },
        {
          title: '6. Links to Other Websites',
          content:
            'Our website may contain links to third-party websites. These links are provided for convenience only. MAC does not control or endorse these websites and is not responsible for their content or practices.',
        },
        {
          title: '7. Governing Law',
          content:
            'These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the jurisdiction of the courts located in Bangalore, Karnataka.',
        },
        {
          title: '8. Changes to Terms',
          content:
            'Maruthi Auto Components reserves the right to update or modify these Terms and Conditions at any time without prior notice. Continued use of the website after changes are posted will constitute acceptance of the revised terms.',
        },
      ].map((section, index) => (
        <section key={index} className="mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
            {section.title}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            {section.content}
          </p>
        </section>
      ))}

      <section className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
          9. Contact Information
        </h2>
        <p className="text-base sm:text-lg text-gray-700">
          For any questions regarding these Terms and Conditions, please contact us at:{' '}
          <a
            href="mailto:maruthiautocomponents@gmail.com"
            className="text-red-600 underline hover:text-red-700"
          >
            maruthiautocomponents@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}
