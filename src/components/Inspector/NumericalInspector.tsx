import React from "react";
import { Divider, Table, Tbody, Td, Text, Tr, VStack } from "@chakra-ui/react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type description = {
  mean?: number;
  std?: number;
  min?: number;
  p25?: number;
  p50?: number;
  p75?: number;
  max?: number;
  missing?: number;
  zeros?: number;
  negative?: number;
  infinite?: number;
  count: number;
  c_labels: string[];
  c_values: number[];
};

interface NumericalInspectorProps {
  columnName?: string;
  description?: description;
}

const descriptors: { name: string; value: keyof description }[] = [
  { name: "Count", value: "count" },
  { name: "Mean", value: "mean" },
  { name: "Std. dev.", value: "std" },
  { name: "Minimum", value: "min" },
  { name: "Maximum", value: "max" },
  { name: "25%", value: "p25" },
  { name: "50%", value: "p50" },
  { name: "75%", value: "p75" },
  { name: "Missing", value: "missing" },
  { name: "Zeros", value: "zeros" },
  { name: "Negative", value: "negative" },
  { name: "Infinite", value: "infinite" },
];

const NumericalInspector = ({
  columnName,
  description,
}: NumericalInspectorProps) => {
  return (
    <VStack>
      <Text fontWeight="semibold">{columnName}</Text>
      <Histogram
        labels={description!.c_labels}
        values={description!.c_values}
      />
      <Divider orientation="horizontal" />
      <Table>
        <Tbody>
          {descriptors.map((descriptor) => (
            <Tr>
              <Td>{descriptor.name}</Td>
              <Td isNumeric>
                {descriptor.value in description!
                  ? description![descriptor.value]
                  : "-"}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </VStack>
  );
};

interface HistogramProps {
  labels: string[];
  values: number[];
}
const histogramOptions = {
  responsive: true,
};

const Histogram = ({ labels, values }: HistogramProps) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Histogram",
        data: values,
        backgroundColor: "white",
      },
    ],
  };

  return <Bar options={histogramOptions} data={data} />;
};

export default NumericalInspector;
