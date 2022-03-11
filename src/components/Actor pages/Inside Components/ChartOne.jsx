import React, {Component, useState} from 'react';
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

const ChartOne = () => {

    const [series, setSeries] = useState([44, 55, 67, 83]);

    const [options, setOptions] = useState({
        chart: {
            height: 350,
            type: 'radialBar',
          },
        plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: '22px',
                },
                value: {
                  fontSize: '16px',
                },
                total: {
                  show: true,
                  label: 'Total',
                  formatter: function (w) {
                    return 249
                  }
                }
              }
            }
        },
        labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    });


    return (
        <Chart  options={options} series={series} type="radialBar" />    
    )
}

export default ChartOne;
  

    