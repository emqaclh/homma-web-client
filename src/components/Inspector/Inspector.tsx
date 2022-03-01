import React from "react";

import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Center, VStack, Text, Button, Container } from "@chakra-ui/react";

import CategoricalInspector from "./CategoricalInspector";
import NumericalInspector from "./NumericalInspector";

interface InspectorProps {
  described?: boolean;
  descriptionRequested?: boolean;
  columnName?: string;
  datatype?: "no-numerical" | "numerical";
  description?: {
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
    distinct?: number;
    c_labels: string[];
    c_values: number[];
  };
}

const Inspector = ({
  described = true,
  descriptionRequested = false,
  columnName,
  datatype,
  description,
}: InspectorProps) => {
  const beingDescribed = !described && descriptionRequested;

  return (
    <Container centerContent>
      {described ? (
        datatype == "numerical" ? (
          <NumericalInspector
            columnName={columnName}
            description={description}
          />
        ) : (
          <CategoricalInspector
            columnName={columnName}
            description={description}
          />
        )
      ) : (
        <VStack>
          <Text>This feature has not been described yet!</Text>
          <Button
            leftIcon={<InfoOutlineIcon />}
            isLoading={beingDescribed}
            loadingText="Description requested..."
            variant="solid"
          >
            Request description
          </Button>
        </VStack>
      )}
    </Container>
  );
};

export default Inspector;
