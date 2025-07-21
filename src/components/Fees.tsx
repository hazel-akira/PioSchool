// src/pages/Fees.tsx
import React from 'react'


const FeesPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
    

      <main className="flex-grow max-w-4xl mx-auto my-8 bg-white shadow-md rounded-lg overflow-hidden">
        {/* Logo & Contact Header */}
        <div className="flex flex-col items-center py-6 px-4 border-b">
          <img
            src="/images/ps.png"
            alt="Pioneer School Logo"
            className="h-20 mb-2"
          />
          <div className="text-center">
            <h1 className="text-2xl font-bold">PIONEER SCHOOL</h1>
            <p className="text-sm">P.O. Box 33421 ‑ 00600, Nairobi, Kenya</p>
            <p className="text-sm">
              Tel: +254 20 503 8065 | +254 700 372 350
            </p>
            <p className="text-sm">
              Email: admissions@pioneerschools.ac.ke |{' '}
              <a
                href="https://www.pioneerschools.ac.ke"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                www.pioneerschools.ac.ke
              </a>
            </p>
          </div>
        </div>

        {/* Annual Fees Table */}
        <section className="p-6">
          <h2 className="text-xl font-semibold text-center mb-4">
            ANNUAL FEES STRUCTURE
          </h2>
          <table className="w-full table-fixed border-collapse text-sm">
            <thead>
              <tr className="bg-[#0C356A] text-white">
                <th className="p-3 border">Form</th>
                <th className="p-3 border">Term 1</th>
                <th className="p-3 border">Term 2</th>
                <th className="p-3 border">Term 3</th>
              </tr>
            </thead>
            <tbody>
              {[
                { form: "FORM I", t1: "KES 105,000", t2: "KES 105,000", t3: "KES 105,000" },
                { form: "FORM II", t1: "KES 115,500", t2: "KES 115,500", t3: "KES 115,500" },
                { form: "FORM III", t1: "KES 126,000", t2: "KES 126,000", t3: "KES 126,000" },
                { form: "FORM IV", t1: "KES 136,500", t2: "KES 136,500", t3: "KES 136,500" },
              ].map((row) => (
                <tr
                  key={row.form}
                  className="even:bg-gray-50 odd:bg-white"
                >
                  <td className="p-3 border text-center">{row.form}</td>
                  <td className="p-3 border text-right">{row.t1}</td>
                  <td className="p-3 border text-right">{row.t2}</td>
                  <td className="p-3 border text-right">{row.t3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Numbered Notes */}
        <section className="px-6 pb-6">
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              Non‑refundable commitment fee of <strong>KES 20,000</strong> which
              is part of school fees.
            </li>
            <li>
              Extra charges for new admission in every form -{' '}
              <strong>KES 100,000</strong> together with the term’s fees to
              cater for uniforms, beddings and textbooks.
            </li>
            <li>
              For all new admissions, payment must be by Banker’s Cheque
              payable to Pioneer School. (Payment by cash, personal cheques &
              post‑dated cheques is not acceptable.)
            </li>
            <li>
              Money paid is not refundable or transferable to another account.
            </li>
            <li>
              The school offers a 7.5% sibling discount on tuition fee, and
              10% on tuition fee for former St Paul Thomas Academy students.
            </li>
            <li>
              Payment should be made to:
              <div className="mt-2 overflow-x-auto">
                <table className="w-full text-sm text-gray-800 border-collapse">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="p-2 border">BANK DEPOSIT</th>
                      <th className="p-2 border">OR</th>
                      <th className="p-2 border">M-PESA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="even:bg-white odd:bg-gray-50">
                      <td className="p-2 border">
                        <strong>Bank:</strong> Equity Bank (K) Ltd.<br/>
                        <strong>Account Name:</strong> Pioneer School<br/>
                        <strong>Acc. Number:</strong> 001010203805<br/>
                        <strong>Branch:</strong> Corporate
                      </td>
                      <td className="p-2 border text-center">OR</td>
                      <td className="p-2 border">
                        <strong>Paybill No:</strong> 247247<br/>
                        <strong>Account No:</strong> 254650#ADM NO.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
            <li>
              For account clarification, email{' '}
              <a
                href="mailto:finance.enquiries@pioneerschools.ac.ke"
                className="underline text-[#0C356A]"
              >
                finance.enquiries@pioneerschools.ac.ke
              </a>
              .
            </li>
          </ol>
        </section>
        <div className="text-center my-6">
          <a
            href="/Info"
            className="inline-block px-6 py-3 bg-[#093056] text-white font-semibold rounded-lg hover:bg-[#0a2747] transition"
          >
            Learn More
          </a>
        </div>
      </main>

     
    </div>
  )
}

export default FeesPage
