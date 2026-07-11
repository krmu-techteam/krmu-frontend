import Link from "next/link";

const EBooks = () => {
  return (
    <div className="libcontent">
      <h4>E-Books</h4>
      <h3>Branch Wise E-Books</h3>
      <div className="libtable">
        <table>
          <tbody>
            <tr>
              <td>S. No.</td>
              <td>Branch</td>
              <td>No. of Books</td>
              <td>View &amp; Download</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Automobile Engineering</td>
              <td>16</td>
              <td>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  Download
                </Link>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Civil Engineering</td>
              <td>27</td>
              <td>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  Download
                </Link>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Computer Science Engineering/ IT</td>
              <td>27</td>
              <td>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  Download
                </Link>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Electronics &amp; Communication Engineering</td>
              <td>51</td>
              <td>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  Download
                </Link>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Mechanical Engineering</td>
              <td>34</td>
              <td>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  Download
                </Link>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Management</td>
              <td>04</td>
              <td>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  Download
                </Link>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>Applied Science &amp; Humanities</td>
              <td>0</td>
              <td>
                <Link href="#">Download</Link>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <h3>KRMU E-Books</h3>
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
            <tr>
              <td>1</td>
              <td>School of Law</td>
              <td>16</td>
              <td>
                <Link
                  href="https://www.krmangalam.edu.in/wp-content/uploads/2023/E-books/E-Books of School of Law, K.R. Mangalam University.pdf"
                  target="_blank" rel="noopener noreferrer"
                >
                  Download
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EBooks;
