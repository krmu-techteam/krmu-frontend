const KREEOnlineExam = () => {
  return (
    <section className="pt-[3%] pb-[2%] px-4">
      <div className="max-w-[1600px] mx-auto w-full">
        <h4 className="text-4xl md:text-5xl text-center font-semibold">
          Online Exam Format
        </h4>
        <div className="flex flex-col lg:flex-row gap-10 md:gap-20">
          <div className="lg:w-1/2">
            <h4 className="text-2xl font-semibold mt-2.5 mb-[15px]">
              Undergraduate Programmes
            </h4>
            <div className="online_exam_table">
              <table>
                <tbody>
                  <tr>
                    <th>Sections</th>
                    <th>Total Questions</th>
                  </tr>
                  <tr>
                    <td>Section A: Domain Specific Questions</td>
                    <td>25 Questions</td>
                  </tr>
                  <tr>
                    <td>Section B: Logical, Numerical, General Awareness Aptitude</td>
                    <td>25 Questions</td>
                  </tr>
                  {/* <tr>
                    <td>General Awareness</td>
                    <td>5 Questions</td>
                  </tr>
                  <tr>
                    <td>Course Specific</td>
                    <td>50 Questions</td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h4 className="text-2xl font-semibold mt-2.5 mb-[15px]">
              Postgraduate Programmes
            </h4>
            <div className="online_exam_table">
               <table>
                <tbody>
                  <tr>
                    <th>Sections</th>
                    <th>Total Questions</th>
                  </tr>
                  <tr>
                    <td>Section A: Domain Specific Questions</td>
                    <td>25 Questions</td>
                  </tr>
                  <tr>
                    <td>Section B: Logical, Numerical, General Awareness Aptitude</td>
                    <td>25 Questions</td>
                  </tr>
                  {/* <tr>
                    <td>General Awareness</td>
                    <td>5 Questions</td>
                  </tr>
                  <tr>
                    <td>Course Specific</td>
                    <td>50 Questions</td>
                  </tr> */}
                </tbody>
              </table>
              {/* <table>
                <tbody>
                  <tr>
                    <th>Sections</th>
                    <th>Total Questions</th>
                  </tr>
                  <tr>
                    <td>Arithmetic &amp; Logical Reasoning</td>
                    <td>5 Questions</td>
                  </tr>
                  <tr>
                    <td>General English/Verbal Ability</td>
                    <td>5 Questions</td>
                  </tr>
                  <tr>
                    <td>General Awareness</td>
                    <td>5 Questions</td>
                  </tr>
                  <tr>
                    <td>Course Specific</td>
                    <td>10 Questions</td>
                  </tr>
                </tbody>
              </table> */}
            </div>
          </div>
        </div>
        <p className="text-center mt-5"><strong>Note: There are no sectional time limit.</strong></p>
        <p className="text-center mt-5"><strong>The KREE will carry no negative marking. For each correct answer candidate will get 1 mark. You are free to use a pen and paper as when required.</strong></p>
        <div className="text-center my-10">
          <h4 className="text-xl md:text-5xl font-semibold mb-5">Declaration of Result</h4>
          <p>
            Results for the KREE will be declared within 48 hours of the
            examination via mail and <br />
            telephonic confirmation
          </p>
        </div>
      </div>
    </section>
  );
};

export default KREEOnlineExam;
