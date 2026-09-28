import React from "react";
import { RowConfig } from "@/features/admission/scholarship";
import styles from "./scholarship-table.module.css";

interface TableConfig {
    headers?: string[];
    theadRows?: RowConfig[];
    rows: RowConfig[];
    className?: string;
    tableClassName?: string;
}

const CustomTable: React.FC<TableConfig> = ({
    headers,
    theadRows,
    rows,
    className,
    tableClassName,
}) => {
    return (
        <div
            className={`${styles.tableContainer} krmu-scholarship-container ${className || ""}`}
        >
            <table
                className={`${styles.scholarshipTable} krmu-scholarship-table ${tableClassName || ""}`}
                style={{
                    border: "1px solid #BDC5D4",
                    borderCollapse: "collapse",
                    width: "100%",
                }}
            >
                {(headers || theadRows) && (
                    <thead>
                        {headers && (
                            <tr className={styles.tableRow}>
                                {headers.map((h, i) => (
                                    <th
                                        key={i}
                                        className={`${styles.tableHeaderCell} krmu-scholarship-th`}
                                        style={{
                                            border: "1px solid #BDC5D4",
                                            backgroundColor: "#051630",
                                            color: "#ffffff",
                                            padding: "16px 20px",
                                            textAlign: "left",
                                        }}
                                    >
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        )}
                        {theadRows?.map((row, rIdx) => (
                            <tr key={rIdx} className={styles.tableRow}>
                                {row.map((cell, cIdx) => (
                                    <th
                                        key={cIdx}
                                        rowSpan={cell.rowSpan}
                                        colSpan={cell.colSpan}
                                        id={cell.id}
                                        className={`${styles.tableHeaderCell} krmu-scholarship-th`}
                                        style={{
                                            border: "1px solid #BDC5D4",
                                            backgroundColor: "#051630",
                                            color: "#ffffff",
                                            padding: "16px 20px",
                                            textAlign: "left",
                                        }}
                                    >
                                        {cell.content}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                )}
                <tbody>
                    {rows.map((row, rIdx) => (
                        <tr key={rIdx} className={styles.tableRow}>
                            {row.map((cell, cIdx) => {
                                const Tag = cell.isHeader ? "th" : "td";
                                const isHead = cell.isHeader;
                                return (
                                    <Tag
                                        key={cIdx}
                                        rowSpan={cell.rowSpan}
                                        colSpan={cell.colSpan}
                                        id={cell.id}
                                        className={
                                            isHead
                                                ? `${styles.tableHeaderCell} krmu-scholarship-th`
                                                : `${styles.tableDataCell} krmu-scholarship-td`
                                        }
                                        style={{
                                            border: "1px solid #BDC5D4",
                                            padding: "12px 20px",
                                            backgroundColor: isHead
                                                ? "#051630"
                                                : "#ffffff",
                                            color: isHead
                                                ? "#ffffff"
                                                : "#000000",
                                            textAlign: "left",
                                            verticalAlign: "top",
                                        }}
                                    >
                                        {cell.content}
                                    </Tag>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomTable;
export type { TableConfig };
