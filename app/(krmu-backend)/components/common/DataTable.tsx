import { useState } from "react";
import { Search, Trash2, CalendarIcon } from "lucide-react";
import { format } from "date-fns";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { TableColumn } from "../types/table";

type DataTableProps<T extends { id: React.Key }> = {
  columns: TableColumn<T>[];
  data: T[];
};

const getNestedValue = (obj: unknown, path: string) => {
  return path.split(".").reduce((acc: any, key) => acc?.[key], obj);
};

const DataTable = <T extends { id: React.Key }>({
  columns,
  data,
}: DataTableProps<T>) => {
  return (
    <section className="overflow-hidden rounded-xl border bg-background">
      {/* ======================================
          HEADER
      ====================================== */}

      <div className="border-b px-6 py-4">
        {/* ----------------------------------
            Title + Actions
        ---------------------------------- */}

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Title */}

          <div>
            <h2 className="text-base font-semibold">Records</h2>

            <p className="text-sm text-muted-foreground">
              Overview of your records
            </p>
          </div>
        </div>
      </div>

      {/* ======================================
          TABLE
      ====================================== */}

      <div className="overflow-x-auto">
        <Table>
          {/* ----------------------------------
              HEADER
          ---------------------------------- */}

          <TableHeader>
            <TableRow>
              {/* Columns */}

              {columns.map((column, index) => (
                <TableHead
                  key={`${column.key}-${index}`}
                  className="whitespace-nowrap"
                >
                  {column.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          {/* ----------------------------------
              BODY
          ---------------------------------- */}

          <TableBody>
            {data.length > 0 ? (
              data.map((row) => {
                return (
                  <TableRow key={row.id}>
                    {/* Row Data */}

                    {columns.map((column, index) => (
                      <TableCell
                        key={`${column.key}-${index}`}
                        className="whitespace-nowrap"
                      >
                        {column.render
                          ? column.render(row)
                          : String(getNestedValue(row, column.key) ?? "") ||
                            "-"}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })
            ) : (
              /* Empty State */

              <TableRow>
                <TableCell
                  colSpan={columns.length + 1}
                  className="h-32 text-center"
                >
                  <div className="flex flex-col items-center justify-center gap-1">
                    <p className="font-medium">No records found</p>

                    <p className="text-sm text-muted-foreground">
                      Try changing your search or filters.
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default DataTable;
