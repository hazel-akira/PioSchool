// src/pages/Fees.tsx
import React from 'react'


const FeesPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
  

      <main className="flex-grow max-w-4xl mx-auto my-8 bg-white shadow-md rounded-lg overflow-hidden">
        {/* ... logo + table as before ... */}

    

        {/* Numbered Notes & Terms & Conditions */}
        <section id="terms" className="px-6 pb-6 scroll-mt-20">
          <h2 className="text-xl font-semibold text-center mb-4">
            SCHOOL FEE TERMS &amp; CONDITIONS
          </h2>

          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              School fees are annual and are billed on termly basis. Fees should
              be paid in full on or before the first day of the term. (Cash
              payments are not accepted.)
            </li>
            <li>
              Additional fees for other School Activities and Holiday Program
              activities will be billed separately.
            </li>
            <li>Fees once paid are not refundable.</li>
            <li>
              Where any fee or part of a fee remains unpaid after the due date,
              the school reserves the right to:
              <ol className="list-decimal list-inside ml-6 space-y-1 mt-2">
                <li>Demand payment in full of all fees outstanding to that date.</li>
                <li>Cease offering tuition services to the student.</li>
                <li>
                  The Senior Management Team reserves the right to terminate the
                  enrollment of a student if the account remains outstanding after
                  final reminder has been served.
                </li>
                <li>
                  The Parent shall pay all legal fees and other administrative
                  costs incurred in connection with the demand or enforcement of
                  the payment of money.
                </li>
              </ol>
            </li>
            <li>
              The school reserves the right to adjust the school fees as it
              deems fit, from time to time during the student's enrollment in
              the school. The Parent shall be given notification of any such
              adjustment, and the revised fee shall be payable effective from
              the date stipulated in the notification.
            </li>
            <li>
              In the event of some incident occurring within or affecting the
              school and it is required by the relevant authorities to close
              during the occurrence and/or aftermath of such incident or event,
              the school will not be obliged to refund all or any part of the
              fees.
            </li>
            <li>
              <strong>Fees Refund:</strong>
              <ol className="list-lower-roman list-inside ml-6 space-y-1 mt-2">
                <li>
                  Parents must give a full term’s notice in writing to the School
                  before withdrawing a student from the school. This is the only
                  case where parents are entitled to a refund.
                </li>
                <li>
                  Fees will not be refunded or waived for absence through
                  sickness or if a term is shortened or if a student is sent home
                  before the normal end of term or for any other reason.
                </li>
                <li>
                  No refunds will be given to students suspended from school due
                  to indiscipline cases at any point of the term.
                </li>
              </ol>
            </li>
            <li>
              In the case of an enrollment at any point into the term, the
              parent will pay the full admission fees as stipulated in the fees
              structure.
            </li>
            <li>
              Siblings will be eligible for a discount only for the period when
              they are in school concurrently. A parent should submit copies of
              their National IDs and the learner’s Birth Certificates to the
              Finance Office.
            </li>
            <li>
              Students from St. Paul Thomas Academy should submit copies of
              KCPE Result Slip and Birth Certificate to the Finance Office.
            </li>
          </ol>

          <p className="mt-6 text-center italic">Thank you for choosing Pioneer Group of Schools!!!</p>
        </section>
      </main>

     
    </div>
  )
}

export default FeesPage
