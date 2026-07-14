import Link from "next/link";
import { Journal, LibraryContentProps } from "@/features/life-at-krmu/library/types";

const JournalResources = ({
  libraryContent,
}: {
  libraryContent: LibraryContentProps;
}) => {
  if (!libraryContent.journalResources) return null;

  const { title, subTitle, journals, otherEJournals } =
    libraryContent.journalResources;
  return (
    <div className="libcontent text-white font-poppins">
      <h4>{title} </h4>
      <h3>{subTitle}</h3>
      <div className="libtable">
        <table>
          <tbody>
            <tr>
              <td>DELNET On-line Resources</td>
              <td>
                Login ID: hrkrmu
                <br />
                Password: krmu5455
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Sr. No.</td>
              <td>Name of e-journal/ resources/ database</td>
              <td>Total No. of e-journals</td>
              <td>Login ID &amp; Password</td>
            </tr>
            {journals?.map((item: Journal, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.resource}</td>
                <td>{item.totalJournals}</td>
                <td>
                  {item.loginInfo.url ? (
                    <>
                      <Link
                        href={item.loginInfo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.loginInfo.url}
                      </Link>
                      <br />
                      Password: {item.loginInfo.password}
                    </>
                  ) : (
                    item.loginInfo.text
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <br />
        <h3>E-Journals</h3>
      </div>
      <div className="libtable">
        <table>
          <tbody>
            <tr>
              <td>S. No.</td>
              <td>Branch</td>
              <td>No. of Journals</td>
              <td>View &amp; Download</td>
            </tr>
            {otherEJournals?.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.branch}</td>
                  <td>{item.noOfJournals}</td>
                  <td>
                    <Link
                      href={item.linkInfo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.linkInfo.text}
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JournalResources;
