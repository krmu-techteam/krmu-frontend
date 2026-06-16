import SectionDivider from "@/components/common/SectionDivider";

const ExaminationPatternSection = () => {
  return (
    <section className="relative z-4 py-[4%] px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <h4 className="heading-primary text-center">
          KREE Examination Pattern
        </h4>
        <p className="text-center text-white font-poppins mt-2.5 mb-5">
          The sections constituting the KREE Examinations are:
        </p>
        <div className="table-1 kree-toggles1 font-poppins">
          <table>
            <tbody>
              <tr>
                <td>
                  <ul>
                    <li className="text-white">Arithmetic &amp; Logical Reasoning;</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li className="text-white">General English</li>
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
                    <li>And some programme-specific questions</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default ExaminationPatternSection;
