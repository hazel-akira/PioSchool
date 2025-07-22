// src/pages/CalendarOfEvents.tsx


const events = [
  {
    term: 'Term 1',
    opening: '8th January 2024',
    closing: '5th April 2024',
  },
  {
    term: 'Term 1 Half Term',
    opening: '29th February 2024',
    closing: '3rd March 2024',
  },
  {
    term: 'Term 1 April Holiday',
    opening: '8th April 2024',
    closing: '26th April 2024',
  },
  {
    term: 'Term 2',
    opening: '29th April2024',
    closing: '2nd August 2024',
  },
  {
    term: 'Term 2 Half Term',
    opening: '24th June 2024',
    closing: '1st July 2024',
  },
  {
    term: 'Term 2 August Holiday',
    opening: '5th August 2024',
    closing: '23rd August 2024',
  },
  {
    term: 'Term 3',
    opening: '26th August 2024',
    closing: '25th October 2024',
  },
  {
    term: 'Term 3 Half Term',
    opening: 'NIL',
    closing: 'NIL',
  },
  {
    term: 'Term 3 Christmas Holiday',
    opening: '28th October 2024',
    closing: '3rd January 2025',
  },
];

const otherDates = [
  { label: 'Form 4 Academic Clinic', date: '18th May 2024 • 9 AM-5 PM' },
  { label: 'Form 3 Academic Clinic', date: '13th July 2024 • 9 AM-5 PM' },
  { label: 'Form 2 Academic Clinic', date: '8th June 2024 • 9 AM-5 PM' },
  { label: 'KCSE 2024 Rehearsal Day', date: '18th October 2024 • 9 AM-5 PM' },
  { label: 'KCSE 2024 Start Date', date: '22nd October 2024 • 9 AM-5 PM' },
  { label: 'KCSE 2024 End Date', date: '22nd November 2024 • 9 AM-5 PM' },
];

const CalendarOfEvents: React.FC = () => (
  <div className="flex flex-col min-h-screen">
   

    {/* Hero */}
    <section
      className="relative h-[60vh] bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/calendar.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#093056]/70" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Calendar of Events
        </h1>
      </div>
    </section>

    {/* Events Table */}
    <main className="flex-grow container mx-auto px-4 py-12 space-y-12">
      {/* 2024 Terms */}
      <section>
        <h2 className="text-2xl font-semibold text-[#093056] mb-4">
          Year 2024: Term Dates
        </h2>
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full min-w-[600px] text-left">
            <thead className="bg-[#277291] text-white">
              <tr>
                <th className="px-4 py-2">Term / Holiday</th>
                <th className="px-4 py-2">Opening Date</th>
                <th className="px-4 py-2">Closing Date</th>
              </tr>
            </thead>
            <tbody>
              {events.map((e, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? 'bg-[#f9fafb]' : 'bg-white'}
                >
                  <td className="px-4 py-3">{e.term}</td>
                  <td className="px-4 py-3">{e.opening}</td>
                  <td className="px-4 py-3">{e.closing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Other Important Dates */}
      <section>
        <h2 className="text-2xl font-semibold text-[#093056] mb-4">
          Other Important Dates
        </h2>
        <ul className="space-y-3 pl-4 list-disc">
          {otherDates.map((d, i) => (
            <li key={i} className="text-gray-700">
              <span className="font-medium">{d.label}</span>: {d.date}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-gray-500 italic">
          *Dates may change. We will communicate any changes in advance.
        </p>
      </section>
    </main>

    
  </div>
);

export default CalendarOfEvents;
