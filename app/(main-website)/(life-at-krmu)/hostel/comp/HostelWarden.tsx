const HostelWarden = () => {
  return (
    <section className="py-10 px-4">
      <div className="max-w-[1664px] mx-auto w-full lg:flex gap-10 text-center lg:text-left">
        <div className="lg:w-1/2">
          <h4 className="text-3xl md:text-4xl lg:text-5xl mb-5 font-semibold">
            Connect with the Warden
          </h4>
          <p>
            The friendly and responsible wardens at our hostels ensure that
            discipline and decorum are maintained within the hostel premises.
            Moreover, the wardens organise recreational activities and events to
            create an engaging living environment and help students make the
            most of their hostel experience.
          </p>

          <h5 className="text-2xl my-5 text-center font-semibold">
            Hostel Fees
          </h5>
          <div className="overflow-x-auto flex justify-center">
            <table className="hosteltable-table">
              <thead>
                <tr>
                  <th>Description</th> <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hostel Fee (to be collected upfront)</td>
                  <td>Rs. 1,72,000/-</td>
                </tr>
                <tr>
                  <td>Hostel Security Deposit (Refundable)</td>
                  <td>Rs. 20,000/-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <div className="contact-card-container">
            <div className="hosteltable-card">
              <div className="hosteltable-title">Chief Warden</div>
              <div className="hosteltable-info">
                <span className="hosteltable-label">Mail Address:</span>
                chief.warden@krmangalam.edu.in
              </div>
              <div className="hosteltable-info">
                <span className="hosteltable-label">Contact No.:</span>
                9599812159
              </div>
            </div>
            <div className="hosteltable-card">
              <div className="hosteltable-title">Warden Boys</div>
              <div className="hosteltable-info">
                <span className="hosteltable-label">Mail Address:</span>
                warden.boys@krmangalam.edu.in
              </div>
              <div className="hosteltable-info">
                <span className="hosteltable-label">Contact No.:</span>
                8800697005
              </div>
            </div>
            <div className="hosteltable-card">
              <div className="hosteltable-title">Warden Girls</div>
              <div className="hosteltable-info">
                <span className="hosteltable-label">Mail Address:</span>
                warden.girls@krmangalam.edu.in
              </div>
              <div className="hosteltable-info">
                <span className="hosteltable-label">Contact No.:</span>
                8800697006
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostelWarden;
