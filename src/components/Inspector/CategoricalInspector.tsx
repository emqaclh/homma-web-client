import React from 'react';

import { Divider, Table, Tbody, Td, Text, Tr, VStack } from '@chakra-ui/react';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

type description = {
    missing?: number,
    count: number,
    distinct?: number,
    c_labels: string[],
    c_values: number[]
}

interface CategoricalInspectorProps {
    columnName?: string,
    description?: description
}

const descriptors: { name: string, value: keyof description}[] = [
    {name: 'Count', value: 'count'},
    {name: 'Distinct', value: 'distinct'},
    {name: 'Missing', value: 'missing'}
]

const CategoricalInspector = ({columnName, description}: CategoricalInspectorProps) => {
    return(
        <VStack>
            <Text fontWeight='semibold'>{columnName}</Text>
            <CategoricalPlot labels={description!.c_labels} values={description!.c_values}/>
            <Divider orientation='horizontal'/>
            <Table size='sm'>
                <Tbody>
                    {
                        descriptors.map(
                            (descriptor) => 
                            <Tr>
                                <Td>{descriptor.name}</Td>
                                <Td isNumeric>{descriptor.value in description! ? description![descriptor.value] : '-'}</Td>
                            </Tr>
                        )
                    }
                </Tbody>
            </Table>
        </VStack>
    )

}

interface CategoricalPlotProps { labels: string[], values: number[]}
const categoricalPlotOptions = {
    responsive: true,
}

const CategoricalPlot = ({labels, values}: CategoricalPlotProps) => {

    const data = {
        labels: labels,
        datasets: [{
            label: 'Categorical',
            data: values
        }]
    }

    return(
        <Doughnut options={categoricalPlotOptions} data={data}/>
    )

}

export default CategoricalInspector;