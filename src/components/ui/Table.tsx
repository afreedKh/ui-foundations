import { cn } from "../../utils/cn";
import { Text } from "./Text";

type Column<T> = {
  key: keyof T;
  label: string;
};

type TableProps<T> = {
  title?: string;
  columns: Column<T>[];
  data: T[];
  className?: string;
};

export function Table<T extends Record<string, any>>({
  title,
  columns,
  data,
  className,
}: TableProps<T>) {
  return (
    <div className={cn("w-full", className)}>
      {title && (
        <Text as="h3" variant="subheading" className="mb-2">
          {title}
        </Text>
      )}

      <div className="overflow-x-auto border border-gray-200 rounded-md">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  className="px-4 py-2 text-left font-medium text-gray-600 border-b"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-4 py-6 text-center text-gray-500"
                >
                  No data available
                </td>
              </tr>
            ) : (
              data.map((row, index) => (
                <tr
                  key={index}
                  className="border-b last:border-b-0"
                >
                  {columns.map((col) => (
                    <td
                      key={String(col.key)}
                      className="px-4 py-2 text-gray-700"
                    >
                      {String(row[col.key] ?? "")}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
