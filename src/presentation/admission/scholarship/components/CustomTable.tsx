import React from "react";
import { RowConfig } from "@/features/admission/scholarship";

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
            className={`w-full overflow-x-auto [scrollbar-width:thin] ${className || ""}`}
        >
            <table
                className={`w-full min-w-[620px] sm:min-w-[680px] ${tableClassName || ""}`}
            >
                {(headers || theadRows) && (
                    <thead>
                        {headers && (
                            <tr>
                                {headers.map((h, i) => (
                                    <th key={i}>{h}</th>
                                ))}
                            </tr>
                        )}
                        {theadRows?.map((row, rIdx) => (
                            <tr key={rIdx}>
                                {row.map((cell, cIdx) => (
                                    <th
                                        key={cIdx}
                                        rowSpan={cell.rowSpan}
                                        colSpan={cell.colSpan}
                                        id={cell.id}
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
                        <tr key={rIdx}>
                            {row.map((cell, cIdx) => {
                                const Tag = cell.isHeader ? "th" : "td";
                                return (
                                    <Tag
                                        key={cIdx}
                                        rowSpan={cell.rowSpan}
                                        colSpan={cell.colSpan}
                                        id={cell.id}
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
