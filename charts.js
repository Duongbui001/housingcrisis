/*   */
var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var chart1;

chart1 = {
  title: {
    text: ''
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['England', 'London'],
    orient: 'vertical',
    right: 5,
    bottom: ''
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    interval: 5,
    data: [
      1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994,
      1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006,
      2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018,
      2019, 2020, 2021, 2022
    ]
  },
  yAxis: {
    type: 'value',
    name: ''
  },
  series: [
    {
      name: 'England',
      type: 'line',
      data: [
        2.7, 2.8, 2.9, 2.9, 3.1, 3.2, 3.8, 3.4, 2.8, 2.6, 2.4, 2.3, 2.2, 2.2,
        2.3, 2.5, 2.6, 2.9, 3.1, 4.92, 5.81, 6.46, 6.65, 6.92, 7.14, 6.93, 6.41,
        6.89, 6.79, 6.71, 6.72, 6.95, 7.33, 7.54, 7.74, 7.71, 7.59, 7.61, 8.9,
        8.28
      ]
    },
    {
      name: 'London',
      type: 'line',
      data: [
        3.7, 3.9, 4.2, 4.5, 5.1, 5.4, 5.6, 4.5, 3.8, 3.4, 2.8, 2.8, 2.6, 2.6, 3,
        3.3, 3.7, 4.3, 4.6, 6.74, 7.4, 7.95, 8, 8.32, 8.38, 8.52, 7.83, 8.87,
        9.26, 9.23, 9.77, 10.72, 11.69, 12.76, 12.96, 12.81, 12.35, 12.33,
        13.55, 13.33
      ]
    }
  ],
  dataZoom: []
};

chart1 && myChart.setOption(chart1);

window.onresize = function() {
    myChart.resize();
};

/*Stacked area chart*/
var chartDom2 = document.getElementById('main2');
var myChart2 = echarts.init(chartDom2);
var chart2;

chart2 = {
  title: {
    text: ''
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: [
      'Own outright',
      'Homeowners with mortgage',
      'Private renters',
      'Social renters'
    ]
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      show: true,
      data: [
        '2003-04',
        '2004-05',
        '2005-06',
        '2006-07',
        '2007-08',
        '2008-09',
        '2009-10',
        '2010-11',
        '2011-12',
        '2012-13',
        '2013-14',
        '2014-15',
        '2015-16',
        '2016-17',
        '2017-18',
        '2018-19',
        '2019-20',
        '2020-21',
        '2021-22'
      ]
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '',
      max: 100,
      axisLabel: {
        formatter: '{value} %'
      }
    }
  ],
  series: [
    {
      name: 'Own outright',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [
        3, 2.7, 3, 2.3, 2.2, 2.7, 2.4, 2.7, 2.8, 2.1, 2.2, 2.7, 3.5, 2.7, 4.1,
        3, 2.4, 3.2, 3.5
      ]
    },
    {
      name: 'Homeowners with mortgage',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [
        55.6, 54, 53, 54.2, 53, 48.7, 44.3, 40.4, 40, 37.4, 33.7, 34, 34.7,
        34.6, 33.6, 38.2, 38.6, 43.6, 37.9
      ]
    },
    {
      name: 'Private renters',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [
        21.4, 24.4, 24.2, 27.1, 28, 31, 36.4, 40.6, 40.9, 44.6, 48.2, 45.5,
        46.1, 45.7, 43.7, 40.9, 41.8, 36.8, 42.9
      ]
    },
    {
      name: 'Social renters',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [
        20, 18.9, 19.8, 16.4, 16.8, 17.5, 16.9, 16.3, 16.3, 15.8, 15.9, 17.8,
        15.7, 17, 18.6, 17.9, 17.3, 16.4, 15.7
      ]
    }
  ]
};

chart2 && myChart2.setOption(chart2);
window.onresize = function() {
    myChart2.resize();
};

/* Bar chart horizontal */
var chartDom3  = document.getElementById('main3');
var myChart3 = echarts.init(chartDom3);
var chart3;

chart3 = {
  dataset: {
    source: [
      ['region', 'ratio'],
      ['London', 27.5],
      ['West Midlands', 40.5],
      ['North West', 40.9],
      ['North East', 41.2],
      ['Yorkshire and Humber', 42],
      ['South West', 42],
      ['South East', 42.6],
      ['East of England', 43.3],
      ['East Midlands', 44.3]
    ]
  },
  grid: { containLabel: true },
  xAxis: {
    name: 'Percentage of households',
    nameLocation:'middle',
    nameGap: 30,
    axisLabel: {
      formatter: '{value} %'
    },
    max: 100
  },
  yAxis: {
    type: 'category',
    inverse: true
  },
  series: [
    {
      realtimeSort: true,
      showBackground: true,
      label: {
        show: true,
        position: '',
        color: 'white'
      },

      name: 'Home ownership',
      type: 'bar',
      encode: {
        tooltip: ['region', 'ratio'],
        x: 'ratio',
        y: 'region'
      }
    }
  ],
  legend: {
    show: true
  }
};

chart3 && myChart3.setOption(chart3);
window.onresize = function() {
    myChart3.resize();
};
/* Line chart */
var chartDom4 = document.getElementById('main4');
var myChart4 = echarts.init(chartDom4);
var chart4;

chart4 = {
  title: {
    text: ''
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['England excluding London', 'London'],
    orient: 'vertical',
    right: 5,
    bottom: ''
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [
        '2003-04',
        '2004-05',
        '2005-06',
        '2006-07',
        '2007-08',
        '2008-09',
        '2009-10',
        '2010-11',
        '2011-12',
        '2012-13',
        '2013-14',
        '2014-15',
        '2015-16',
        '2016-17',
        '2017-18',
        '2018-19',
        '2019-20',
        '2020-21',
        '2021-22'
      ]
  },
  yAxis: {
    type: 'value',
    name: '',
    min: 28,
    max:38,
  },
  series: [
    {
      name: 'England excluding London',
      type: 'line',
      data: [31.2,31.1,30.6,29.7,30.5,31.3,31.7,31.9,31.6,32.4,31.8,32.5,32.3,33.1,32.6,32.1,31.8,32.1,33.4],
    },
    {
      name: 'London',
      type: 'line',
      data: [32,31,32,33,32.7,33.6,32.8,32.5,31.6,32.2,35.7,32.9,32.6,34.1,34.5,36.7,34.5,33.8,33.8],
    }
  ],
  dataZoom: []
};

chart4 && myChart4.setOption(chart4);

window.onresize = function() {
    myChart4.resize();
};
/* Stacked column chart */
var chartDom5 = document.getElementById('main5');
var myChart5 = echarts.init(chartDom5);
var chart5;

chart5 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  yAxis: {
    type: 'value',
    name: 'number of people'
  },
  xAxis: {
    type: 'category',
    data: ['Under 16', '16-24', '25-34', '35-49', '50 and over'],
  },
  series: [
    {
      name: 'Own outright',
      type: 'bar',
      stack: 'total',
      emphasis: {
        focus: 'series'
      },
      data: [85, 4642, 29998, 71572, 603755]
    },
    {
      name: 'Buying with mortgage',
      type: 'bar',
      stack: 'total',
      emphasis: {
        focus: 'series'
      },
      data: [85, 4117, 135074, 404167, 347547]
    },
    {
      name: 'Social renters',
      type: 'bar',
      stack: 'total',
      emphasis: {
        focus: 'series'
      },
      data: [85, 16883, 95527, 229967, 448495]
    },
    {
      name: 'Private renters',
      type: 'bar',
      stack: 'total',
      emphasis: {
        focus: 'series'
      },
      data: [259, 66057, 337742, 403301, 224531]
    }
  ]
};

chart5 && myChart5.setOption(chart5);
window.onresize = function() {
    myChart5.resize();
};
/* Bar chart - prices change */
var chartDom6  = document.getElementById('main6');
var myChart6 = echarts.init(chartDom6);
var chart6;

chart6 = {
  dataset: {
    source: [
      ['item', 'price change'],
      ['Average house prices', 58.4],
      ['Average wage', 30.7],
      ['Apples', 17.2],
      ['Bread', 10.7],
      ['Milk', 8.6],
      ['Bananas', 5.2],
    ]
  },
  title: {
    text: 'How much have prices increased over the last 50 years',
    textStyle: {
        fontSize: 16,
    },
    subtext: 'Price in Jan 2021 relative to Jan 1971 (Source: ONS, Land Registry)',


  },
  grid: { containLabel: true },
  xAxis: {
    axisLabel: {
        formatter: '{value} x'
      },
  },
  yAxis: {
    type: 'category',
    inverse: true
  },
  series: [
    {
      realtimeSort: true,
      label: {
        show: true,
        position: '',
        color: 'white'
      },
      colorBy: 'data',
      name: '',
      type: 'bar',
      encode: {
        tooltip: ['item', 'price change'],
        x: 'price change',
        y: 'item'
      }
    }
  ],
  legend: {
    show: true
  }
};

chart6 && myChart6.setOption(chart6);
window.onresize = function() {
    myChart6.resize();
};

