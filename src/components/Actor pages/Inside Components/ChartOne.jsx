import React, {Component, useState} from 'react';
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

const ChartOne = ( {chartData} ) => {

  let allProjects = chartData.allProjects;
  let approvedProjects = chartData.approvedProjects;
  let completedProjects = chartData.completedProjects;
  let myProjects = chartData.myProjects;
  
  const [series, setSeries] = useState([
    (allProjects / allProjects) * 100,
    (approvedProjects / allProjects) * 100,
    (completedProjects / allProjects) * 100,
    (myProjects / allProjects) * 100
  ]);

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
                    return allProjects;
                  }
                }
              }
            }
        },
        labels: ['Total', 'Approved', 'Completed', 'Participated'],
    });


    return (
        <Chart  options={options} series={series} type="radialBar" />    
    )
}

export default ChartOne;
  

    