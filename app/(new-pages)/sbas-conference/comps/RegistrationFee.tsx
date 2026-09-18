const RegistrationFee = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <p className="text-xs font-bold text-[#A9812F]">REGISTRATION</p>
          <h4 className="text-3xl text-[#1c2822] font-bold font-lora">
            Registration Fees
          </h4>
          <p className="text-sm text-[#44504A]">
            Pay in INR (Indian nationals) or USD (non-Indian nationals & NRIs)
            only.
          </p>
        </div>
        <table>
          <thead>
            <tr>
              <th>CATEGORY</th>
              <th>NATIONAL</th>
              <th>INTERNATIONAL</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Students (UG/PG)</td>
              <td>₹700</td>
              <td>$30</td>
            </tr>

            <tr>
              <td>Research Scholar (PhD)</td>
              <td>₹1,500</td>
              <td>$50</td>
            </tr>

            <tr>
              <td>Faculty / Postdoc / Scientist</td>
              <td>₹3,500</td>
              <td>$100</td>
            </tr>

            <tr>
              <td>Industry Person</td>
              <td>₹4,000</td>
              <td>$150</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RegistrationFee;
