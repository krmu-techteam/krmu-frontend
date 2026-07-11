import Link from "next/link";

const ResearchCenterTable = () => {
  return (
    <section className="py-[50px] px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="res-cen-table-container w-fulll overflow-x-auto">
          <table className="res-cen-table">
            <tbody>
              <tr>
                <td>
                  <Link
                    href="https://www.krmangalam.edu.in/centre-of-excellence-artificial-intelligence/"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <strong>
                      Centre of Excellence in Artificial Intelligence (CoE-AI)
                    </strong>
                  </Link>
                </td>
                <td>
                  <Link
                    href="https://krmangalam.edu.in/pdfs/coe-ai-annual-report-2024-25.pdf"
                    target="_blank" rel="noopener noreferrer"
                  >
                    View Report
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    href="https://www.krmangalam.edu.in/cif/"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <strong>
                      Centre of Excellence for Advanced Material Research
                      (CEAMR)
                    </strong>
                  </Link>
                </td>
                <td>
                  <Link
                    href="https://www.krmangalam.edu.in/pdfs/ceamr-annual-report-2024-25.pdf"
                    target="_blank" rel="noopener noreferrer"
                  >
                    View Report
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link href="" target="_blank" rel="noopener noreferrer">
                    <strong>
                      Centre of Excellence for Sustainable Development Goals
                      (CoE-SDG)
                    </strong>
                  </Link>
                </td>
                <td>
                  <Link
                    href="https://krmangalam.edu.in/pdfs/coe-sdg-annual-report-2024-25.pdf"
                    target="_blank" rel="noopener noreferrer"
                  >
                    View Report
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    href="https://www.krmangalam.edu.in/keic/"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <strong>
                      K.R. Mangalam Entrepreneurship and Incubation Centre
                      (KEIC)
                    </strong>
                  </Link>
                </td>
                <td>
                  <Link
                    href="https://krmangalam.edu.in/pdfs/keic-foundation-annual-report-2024-25.pdf"
                    target="_blank" rel="noopener noreferrer"
                  >
                    View Report
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ResearchCenterTable;
