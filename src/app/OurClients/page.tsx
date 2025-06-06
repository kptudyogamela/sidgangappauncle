import Image from 'next/image';

const clients = [
  {
    icon: '/Images/trusted/logo1.jpeg',
    name: 'Indo Autotech Ltd – Bangalore',
    description: 'Trusted partner in delivering tubuler parts, machining parts, bolts, nuts, collars and bars etc.',
  },
  {
    icon: '/Images/trusted/logo3.png',
    name: 'Badve Engineering Ltd – Bangalore',
    description: 'Supplied machined and tubular parts for mass automotive production lines.',
  },
  {
    icon: '/Images/trusted/logo2.png',
    name: 'Nahars Engineering Ltd – Narasapura',
    description: 'Collaborated on turned parts and rod-based assemblies for industrial use.',
  },
  {
    icon: '/Images/trusted/logo4.png',
    name: 'Surin Automotive – Bangalore',
    description: 'Delivered consistent quality in Tractor parts like Tubular, Laser Cutting and supplier of Machining Parts.',
  },
  {
    icon: '/Images/trusted/logo5.png',
    name: 'Rittal India Ltd – Doddaballapura',
    description: 'Trusted supplier of durable corner pieces for high-performance electrical enclosures.',
  },
  {
    icon: '/Images/trusted/logo77.png',
    name: 'MODUTEC READY PANELS PVT LTD',
    description: 'Job work supplier for laser cutting and CNC Bending parts.',
  },
  {
    icon: '/Images/trusted/logo9.png',
    name: 'MUNGO FIXINGS INDIA PRIVATE LIMITED',
    description: 'Supplier of Construction Bolts.',
  },
  {
    icon: '/Images/trusted/logo88.png',
    name: 'Synergy Punching',
    description: 'Job work supplier for laser cutting and CNC Bending parts.',
  },
  {
    icon: '/Images/trusted/logo6.png',
    name: 'Havells India Ltd – Tumkur',
    description: 'Supplier of MS-plates, M12 & M16 Tie Rods for Cable Drums ',
  },
];

const ClientsSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <h1 className="sm:text-3xl text-2xl title-font text-3xl font-bold mb-20 text-center text-red-700">
          Our Esteemed Clients
          <br className="hidden sm:block" />
          Built on Trust and Quality
        </h1>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {clients.map((client, index) => (
            <div className="p-4 md:w-1/3 flex" key={index}>
              <div className="w-12 h-12 relative rounded-full bg-red-100 text-red-500 mb-4 flex-shrink-0 overflow-hidden">
                <Image
                  alt={client.name}
                  src={client.icon}
                  fill className="object-cover object-center w-full h-full"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="48px"
                  priority={false}
                />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">{client.name}</h2>
                <p className="leading-relaxed text-base">{client.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
