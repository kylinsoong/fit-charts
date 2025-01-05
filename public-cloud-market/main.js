
var app = {};

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

const posList = [
  'left',
  'right',
  'top',
  'bottom',
  'inside',
  'insideTop',
  'insideLeft',
  'insideRight',
  'insideBottom',
  'insideTopLeft',
  'insideTopRight',
  'insideBottomLeft',
  'insideBottomRight'
];
app.configParameters = {
  rotate: {
    min: -90,
    max: 90
  },
  align: {
    options: {
      left: 'left',
      center: 'center',
      right: 'right'
    }
  },
  verticalAlign: {
    options: {
      top: 'top',
      middle: 'middle',
      bottom: 'bottom'
    }
  },
  position: {
    options: posList.reduce(function (map, pos) {
      map[pos] = pos;
      return map;
    }, {})
  },
  distance: {
    min: 0,
    max: 100
  }
};
app.config = {
  rotate: 90,
  align: 'left',
  verticalAlign: 'middle',
  position: 'insideBottom',
  distance: 15,
  onChange: function () {
    const labelOption = {
      rotate: app.config.rotate,
      align: app.config.align,
      verticalAlign: app.config.verticalAlign,
      position: app.config.position,
      distance: app.config.distance
    };
    myChart.setOption({
      series: [
        {
          label: labelOption
        },
        {
          label: labelOption
        },
        {
          label: labelOption
        },
        {
          label: labelOption
        }
      ]
    });
  }
};
const labelOption = {
  show: true,
  position: app.config.position,
  distance: app.config.distance,
  align: app.config.align,
  verticalAlign: app.config.verticalAlign,
  rotate: app.config.rotate,
  formatter: '{c}  {name|{a}}',
  fontSize: 16,
  rich: {
    name: {}
  }
};
option = {
  title: {
        text: '头部公有云厂商历年营收（单位：亿元人民币）'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    orient: 'horizontal',
    bottom: 0,
    data: ['AWS', 'Azure', 'GCP', '阿里云']
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar', 'stack'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  xAxis: [
    {
      type: 'category',
      axisTick: { show: false },
      data: ['2022', '2023', '2024(Predict)']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'AWS',
      type: 'bar',
      barGap: 0,
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [5850, 6600, 8085]
    },
    {
      name: 'Azure',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [5490, 7000, 8780]
    },
    {
      name: 'GCP',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [1900, 2400, 3300]
    },
    {
      name: '阿里云',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [776, 994, 1100]
    }
  ]
};

option && myChart.setOption(option);

