import Image from 'next/image';

export default function Team() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Our Team</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Led by seasoned professionals with deep expertise in automotive manufacturing and quality systems, our team is committed to precision, performance, and continuous improvement.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-wrap -m-4">

          {[
            {
              name: 'Mr. Siddagangappa',
              role: 'CEO',
              desc: 'An industry veteran with 35+ years of experience in automotive manufacturing, specializing in Production, Quality, QMS, 5S, and New Product Development.',
              src: '/Images/team/team2.jpg',
              alt: 'Mr. Siddagangappa',
            },
            {
              name: 'Mr. Murali Krishna',
              role: 'Plant In-Charge',
              desc: '15 years of hands-on experience managing laser cutting and CNC bending operations with precision.',
              src: '/Images/team/team4.jpg',
              alt: 'Mr. Murali Krishna',
            },
            {
              name: 'V. S. Meghana',
              role: 'Engineer – QA & Accounts',
              desc: 'Bringing 2 years of experience in MR, quality systems, and financial processes to support operational excellence.',
              src: '/Images/team/team3.jpg',
              alt: 'V. S. Meghana',
            },
            {
              name: 'Santhipriya',
              role: 'Engineer – Systems',
              desc: 'Experienced systems engineer with MNC background, contributing to Purchase, Accounts and Operational System.',
              src: '/Images/team/team6.png',
              alt: 'Santhipriya',
            },
          ].map((member) => (
            <div key={member.name} className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-4">
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    <Image
                      src={member.src}
                      alt={member.alt}
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    />
                  </div>

                </div>
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">{member.name}</h2>
                  <h3 className="text-gray-500 mb-3">{member.role}</h3>
                  <p className="mb-4">{member.desc}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
