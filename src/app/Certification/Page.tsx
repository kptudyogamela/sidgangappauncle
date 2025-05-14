'use client';

const certificateData = [
  { title: "ISO 9001:2015 (Blank Template)", img: '/Images/certificate/certificate1.png' },
  { title: "Certificate of Appreciation - Rittal", img: '/Images/certificate/certificate2.png' },
  { title: "EGAC Accreditation Logo", img: '/Images/certificate/certificate3.png' },
  { title: "ISO 9001:2015 - Maruthi Auto Components", img: '/Images/certificate/certificate4.png' },
];

export default function Certification() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Certifications & Quality Commitment
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Discover our dedication to excellence through globally recognized certifications, ensuring unmatched quality and customer trust.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-5">
          {certificateData.map((cert, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-4">
              <h3 className="text-xl font-semibold text-center mb-2">{cert.title}</h3>
              <img
                src={cert.img}
                alt={cert.title}
                className="rounded-lg w-full object-contain max-h-[100px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
