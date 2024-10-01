import React from 'react';
import Chart from 'react-apexcharts';

const generateDayWiseTimeSeries = (baseDate, count, { min, max }) => {
  const series = [];
  let currentDate = baseDate;

  for (let i = 0; i < count; i++) {
    series.push([
      currentDate,
      Math.floor(Math.random() * (max - min + 1)) + min,
    ]);
    currentDate += 86400000; // Increment by one day in milliseconds
  }

  return series;
};

const MyLineChart = () => {
  const options = {
    series: [
      {
        name: 'South',
        data: generateDayWiseTimeSeries(
          new Date('11 Feb 2017 GMT').getTime(),
          20,
          { min: 10, max: 60 },
        ),
      },
      {
        name: 'North',
        data: generateDayWiseTimeSeries(
          new Date('11 Feb 2017 GMT').getTime(),
          20,
          { min: 10, max: 20 },
        ),
      },
      {
        name: 'Central',
        data: generateDayWiseTimeSeries(
          new Date('11 Feb 2017 GMT').getTime(),
          20,
          { min: 10, max: 15 },
        ),
      },
    ],
    chart: {
      type: 'area',
      height: 350,
      stacked: true,
      events: {
        selection: function (chart, e) {
          console.log(new Date(e.xaxis.min));
        },
      },
    },
    colors: ['#008FFB', '#00E396', '#2797bc'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'monotoneCubic',
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.8,
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
    },
    xaxis: {
      type: 'datetime',
    },
  };

  return (
    <div id="chart" className="w-[90%] mx-auto">
      <Chart
        options={options}
        series={options.series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default MyLineChart;
