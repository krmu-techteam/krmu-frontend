import { ChevronsRight } from "lucide-react";

const LateFine = () => {
  return (
    <div className="libtabcontent">
      <p>Maintaining Accountability</p>
      <br />
      <h2>Structured Late Fine System</h2>
      <p>
        The library implements a clear late fine policy to ensure the timely
        return of books. The fine structure is designed to maintain discipline
        among users, with different rates for the initial and extended late
        periods, reflecting the library’s commitment to resource availability
        for all.
      </p>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-1/2 p-5 bg-[#051630] text-white rounded-[20px]">
          <ul>
            <li className="flex gap-2.5 text-base pb-1.5">
              <div>
                <ChevronsRight color="#ffffff" size={20} />
              </div>
              <span>
                There is a provision of late fine @ Rs. 10/- per book per day
                for first 10 days, & 20/- (per day per book) after 10 days for
                students.
              </span>
            </li>
            <li className="flex gap-2.5 text-base pb-1.5">
              <div>
                <ChevronsRight color="#ffffff" size={20} />
              </div>
              <span>
                Rs. 10/- for staff (per day per book). From the date of
                announcement of the suspension of classes announced before
                University exams.
              </span>
            </li>
            <li className="flex gap-2.5 text-base pb-1.5">
              <div>
                <ChevronsRight color="#ffffff" size={20} />
              </div>
              <span>
                The amount of fine should be deposited in account section and
                one copy of the Receipt of the paid amount should be deposited
                in the library.
              </span>
            </li>
            <li className="flex gap-2.5 text-base pb-1.5">
              <div>
                <ChevronsRight color="#ffffff" size={20} />
              </div>
              <span>
                Library membership will remain closed till the dues remains
                unpaid, and they can not borrow any book.
              </span>
            </li>
            <li className="flex gap-2.5 text-base pb-1.5">
              <div>
                <ChevronsRight color="#ffffff" size={20} />
              </div>
              <span>
                University Librarian has the power of relaxation of fine up to
                100%.
              </span>
            </li>
            <li className="flex gap-2.5 text-base pb-1.5">
              <div>
                <ChevronsRight color="#ffffff" size={20} />
              </div>
              <span>
                Vice Chancellor has the power of relaxation of fine up to 100%.
              </span>
            </li>
            <li className="flex gap-2.5 text-base pb-1.5">
              <div>
                <ChevronsRight color="#ffffff" size={20} />
              </div>
              <span>
                Chancellor has the power of relaxation of fine up to 100%.
              </span>
            </li>
            <li className="flex gap-2.5 text-base pb-1.5">
              <div>
                <ChevronsRight color="#ffffff" size={20} />
              </div>
              <span>4MISSING/ LOST OF BOOK</span>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="w-full libtable">
            <table className="w-full">
              <tbody>
                <tr>
                  <td>Categories of Members</td>
                  <td>Maximum No. of Books</td>
                  <td>Maximum Period of Loan</td>
                  <td>Late Fine</td>
                </tr>
                <tr>
                  <td>All Teaching Staff</td>
                  <td>05</td>
                  <td>
                    <strong>Odd Semester:</strong>
                    <br />
                    1. 1st August to September end <br />
                    2. 1st October to November
                    <br />
                    end
                    <br />
                    <strong>Even Semester:</strong>
                    <br />
                    1.2nd January to February end
                    <br />
                    2.2nd March to 10th May
                  </td>
                  <td>Rs. 10 &amp; 20</td>
                </tr>
                <tr>
                  <td>Non Teaching Staff</td>
                  <td>02</td>
                  <td>Same as teaching staff</td>
                  <td>Rs. 10 &amp; 20</td>
                </tr>
                <tr>
                  <td>Regular Student</td>
                  <td>03</td>
                  <td>15 Days</td>
                  <td>Rs. 10 &amp; 20</td>
                </tr>
                <tr>
                  <td>Post Graduate Student</td>
                  <td>04</td>
                  <td>15 Days</td>
                  <td>Rs. 10 &amp; 20</td>
                </tr>
                <tr>
                  <td>Phd Students</td>
                  <td>05</td>
                  <td>15 Days</td>
                  <td>Rs. 10 &amp; 20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LateFine;
