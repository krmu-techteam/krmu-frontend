import { MemberLoanPolicy, LoanPeriod } from "@/features/life-at-krmu/library";

const MemberLoanPolicyTable = ({
  memberLoanPolicy,
}: {
  memberLoanPolicy?: MemberLoanPolicy;
}) => {
  if (!memberLoanPolicy) return null;

  const renderLoanPeriod = (loanPeriod: LoanPeriod) => {
    if (typeof loanPeriod === "string") {
      return loanPeriod;
    }
    return (
      <>
        <strong>{loanPeriod.Semester}</strong>
        <br />
        1. {loanPeriod.duration1}
        <br />
        2. {loanPeriod.duration2}
        <br />
        <strong>{loanPeriod.evenSemester}</strong>
        <br />
        1. {loanPeriod.evenDuration1}
        <br />
        2. {loanPeriod.evenDuration2}
      </>
    );
  };

  return (
    <div className="w-full libtable">
      <table className="w-full">
        <tbody>
          <tr>
            {memberLoanPolicy.headers.map((header, idx) => (
              <td key={idx}>{header}</td>
            ))}
          </tr>
          {memberLoanPolicy.rows.map((row, idx) => (
            <tr key={idx}>
              <td>{row.memberCategory}</td>
              <td>{row.maxBooks}</td>
              <td>{renderLoanPeriod(row.loanPeriod)}</td>
              <td>{row.lateFine}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberLoanPolicyTable;
