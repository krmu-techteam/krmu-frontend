const KREEExaminationPattern = () => {
  return (
    <section className="py-[4%] px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <h4 className="text-xl md:text-5xl font-semibold text-center">
          KREE Pattern
        </h4>
        <p className="text-center mt-2.5 mb-5">
          The KREE consists of the following sections:
        </p>
        <div className="table-1 kree-toggles1">
          <table>
            <tbody>
              <tr>
                <td>
                  <ul>
                    <li>Arithmetic &amp; Logical Reasoning</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>General English</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li>General Awareness</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Questions Specific to the Chosen Programme</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default KREEExaminationPattern;
