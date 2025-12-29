import { useState } from "react";
import { Box } from "../components/layout/Box";
import { Stack } from "../components/layout/Stack";
import { Card } from "../components/ui/Card";
import { Text } from "../components/ui/Text";
import { Button } from "../components/ui/Button";
import { Table } from "../components/ui/Table";

type CsvRow = Record<string, string>;

export function CsvImportPage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<CsvRow[]>([]);

  // Handle file selection
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  }

  // Mock upload + CSV parsing
  function handleUpload() {
    if (!file) return;

    setLoading(true);

    setTimeout(() => {
      const reader = new FileReader();

      reader.onload = () => {
        const text = reader.result as string;
        const rows = text.trim().split("\n");
        const headers = rows[0].split(",");

        const parsedData: CsvRow[] = rows.slice(1).map((row) => {
          const values = row.split(",");
          const obj: CsvRow = {};
          headers.forEach((header, index) => {
            obj[header.trim()] = values[index]?.trim() || "";
          });
          return obj;
        });

        setData(parsedData);
        setLoading(false);
      };

      reader.readAsText(file);
    }, 1000); // mock delay
  }

  const columns =
    data.length > 0
      ? Object.keys(data[0]).map((key) => ({
          key,
          label: key,
        }))
      : [];

  return (
    <Box padding="lg" background="muted">
      <Stack gap="lg">
        {/* Header */}
        <Stack gap="sm">
          <Text as="h1" variant="heading">
            Import Billing Data
          </Text>
          <Text variant="muted">
            Upload a CSV file to import billing or invoice data.
          </Text>
        </Stack>

        {/* Upload Card */}
        <Card>
          <Stack gap="md" align="start">
            <input
              type="file"
              accept=".csv"
              onChange={handleFileChange}
            />

            {file && (
              <Text variant="muted">
                Selected file: {file.name}
              </Text>
            )}

            <Button
              onClick={handleUpload}
              loading={loading}
              disabled={!file}
            >
              Upload CSV
            </Button>
          </Stack>
        </Card>

        {/* Table Section */}
        {data.length > 0 && (
          <Card>
            <Table
              title={file?.name}
              columns={columns as any}
              data={data}
            />
          </Card>
        )}
      </Stack>
    </Box>
  );
}
