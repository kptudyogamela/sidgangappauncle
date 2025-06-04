
import { Building2, Settings, Warehouse, MonitorCheck, Factory } from 'lucide-react';

export default function InfrastructureMap() {
  const milestones = [
    {
      title: 'Initial Setup (2013)',
      icon: <Building2 className="w-8 h-8 text-red-600" />,
      desc: `Peenya 2nd Stage, Bangalore | 2,000 sq.ft | Manual lathes, threading, chamfering | 8 employees | Focus on auto-turned parts`
    },
    {
      title: 'Workflow Optimization (2015)',
      icon: <Warehouse className="w-8 h-8 text-blue-600" />,
      desc: `Warehouse layout for raw & finished goods | Quality bay with gauges, templates | ISO, 5S, Kaizen practices adopted`
    },
    {
      title: 'Process Enhancement (2018-2025)',
      icon: <Settings className="w-8 h-8 text-yellow-600" />,
      desc: `Added CNC Bending (110T) & 3kW Laser Cutter | In-house drilling, welding, fabrication | Job work services began `
    },
    {
      title: 'Digital Shift (2025)',
      icon: <MonitorCheck className="w-8 h-8 text-green-600" />,
      desc: `Digitally integrated machinery like CNC and laser machines installed, production for
 precision parts for EVs and smart vehicles.
Increased use of digital quality control and traceability systems.`
    },
    {
      title: 'Vision 2027 – Smart Factory',
      icon: <Factory className="w-8 h-8 text-indigo-600" />,
      desc: `Expand to 5000+ sq.ft | Supply to Tier-1 OEMs | CNC Tube Bending | Robotic Loading/Unloading | ESG & IATF 16949 compliance`
    }
  ];

  return (
    <section className="bg-gray-50 text-gray-800 body-font py-10">
      <div className="container px-5 mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-red-700">Infrastructure Expansion Timeline</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {milestones.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-white shadow rounded-lg border border-gray-200"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
