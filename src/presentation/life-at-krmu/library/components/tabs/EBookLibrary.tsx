import Link from "next/link";
import { LibraryContentProps } from "@/features/life-at-krmu/library/types";

const EBookLibrary = ({
  libraryContent,
}: {
  libraryContent: LibraryContentProps;
}) => {
  if (!libraryContent.ebookLibrary) return null;
  const { title, subTitle, branches, krmu } = libraryContent.ebookLibrary;
  return (
    <div className="libcontent font-poppins text-white">
      <h4>{title}</h4>
      <h3>{subTitle}</h3>
      <div className="libtable">
        <table>
          <tbody>
            <tr>
              <td>S. No.</td>
              <td>Branch</td>
              <td>No. of Books</td>
              <td>View &amp; Download</td>
            </tr>
            {branches?.map((branch, idx) => {
              return (
                <tr key={idx}>
                  <td>{branch.id}</td>
                  <td>{branch.branch}</td>
                  <td>{branch.noOfBooks}</td>
                  <td>
                    <Link
                      href={branch.linkInfo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {branch.linkInfo.text}
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br />
        <h3>{krmu.heading}</h3>
      </div>
      <div className="libtable">
        <table>
          <tbody>
            <tr>
              <td>S. No.</td>
              <td>Branch</td>
              <td>No. of Books</td>
              <td>View &amp; Download</td>
            </tr>
            {krmu.branches?.map((branch) => {
              return (
                <tr key={branch.id}>
                  <td>{branch.id}</td>
                  <td>{branch.branch}</td>
                  <td>{branch.noOfBooks}</td>
                  <td>
                    <Link
                      href={branch.linkInfo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {branch.linkInfo.text}
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

export default EBookLibrary;
