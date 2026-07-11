const FinancialSupport = () => {
  return (
    <section className="bg-[#f8fbff] border-y border-[#eef2f6] py-[50px] px-4">
      <div className="max-w-[1296px] mx-auto w-full flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-1/2 max-w-[540px] mx-auto">
          <span className="loan-tag">Financial Support</span>
          <h2 className="loan-heading">
            Study Now | <span className="highlight-text">Pay Later</span>
          </h2>
          <h3 className="loan-subheading">Finance Your Future At KRMU!</h3>
          <p className="loan-desc mt-6 mb-4">
            K.R. Mangalam University has partnered with top banks to offer
            Education Loans with a moratorium period. Repayment starts either
            one year after course completion or six months after securing a job
            (whichever is earlier), allowing you to focus on studies and repay
            when financially ready.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="loan-feature-card">
                <div className="loan-feature-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 384 512"
                    fill="currentColor"
                  >
                    <path d="M0 256L224 0V192h160L160 512V320H0V256z"></path>
                  </svg>
                </div>
                <div className="loan-feature-txt">
                  <strong>Quick Disbursal</strong>
                  <p>Instant Disbursal &amp; Pan-India Loan Availability</p>
                </div>
              </div>

              <div className="loan-feature-card">
                <div className="loan-feature-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 640 512"
                    fill="currentColor"
                  >
                    <path d="M623.1 136.9l-282.7-101.2c-13.7-4.9-28.8-4.9-42.5 0L16.9 136.9C6.8 140.5 0 150.1 0 160.8V352c0 10.6 6.8 20.2 16.9 23.8l282.7 101.2c13.7 4.9 28.8 4.9 42.5 0l282.7-101.2c10.1-3.6 16.9-13.2 16.9-23.8V160.8c0-10.6-6.8-20.2-16.9-23.8zM320 448L48 352V160.8l272-97.1 272 97.1V352L320 448zM128 200c0-13.3 10.7-24 24-24h336c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24z"></path>
                  </svg>
                </div>
                <div className="loan-feature-txt">
                  <strong>All-Inclusive</strong>
                  <p>Includes Tuition Fees, Books, Hostel, &amp; Airfare</p>
                </div>
              </div>

              <div className="loan-feature-card">
                <div className="loan-feature-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                  >
                    <path d="M160 160c0 44.2-35.8 80-80 80S0 204.2 0 160s35.8-80 80-80s80 35.8 80 80zm208 272c0 44.2-35.8 80-80 80s-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80zM448 64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32zM32 448c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-17.7 0-32-14.3-32-32z"></path>
                  </svg>
                </div>
                <div className="loan-feature-txt">
                  <strong>Lowest Rates</strong>
                  <p>Concessional Rates &amp; Zero Processing Fees</p>
                </div>
              </div>

              <div className="loan-feature-card">
                <div className="loan-feature-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                  >
                    <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zM329 297c-9.4-9.4-24.6-9.4-33.9 0l-95 95-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L329 331c9.4-9.4 9.4-24.6 0-33.9z"></path>
                  </svg>
                </div>
                <div className="loan-feature-txt">
                  <strong>Flexible Tenure</strong>
                  <p>Repayment Tenure Ranging from 5-15 years</p>
                </div>
              </div>
            </div>

            <div className="loan-offer-badge mt-6 flex items-center gap-5">
              <svg
                width="20"
                height="20"
                viewBox="0 0 576 512"
                fill="#ffd700"
                className="svg-m-end-8"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 47.7 171.5c-12.1 1.8-22.4 10.3-26.2 21.8s-.5 24.2 8.2 32.7l106.1 103.4L110.1 477.1c-2.4 11.9 2.6 23.9 12.4 30.7s22.8 6.8 32.6 1.8l132.9-69.7 132.9 69.7c9.8 5 22.7 4.9 32.6-1.8s14.8-18.8 12.4-30.7l-25.1-147.7L546.6 226c8.7-8.5 12-21.2 8.2-32.7s-14.1-20-26.2-21.8L380.9 150.3 316.9 18z"></path>
              </svg>
              Upto 100% loan with a Lower Interest Rate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialSupport;
