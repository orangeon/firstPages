var dom = document.getElementById("container1");
var myChart = echarts.init(dom);
var app = {};
option = null;

// Schema:
// date,AQIindex,PM2.5,PM10,CO,NO2,SO2
var dataBJ = [

    [0,0,0,0,0,0,0,0,0,21,32,0,0,0]
];

var dataGZ = [

    [0,0,0,0,0,0,0,0,0,0,0,18,34,85]
];

var dataSH = [

    [0,0,0,81,42,34,0,0,0,0,0,0,0,0]
];

var dataZJ = [
    [43,72,66,0,0,0,0,0,0,0,0,0,0,0]
];

var dataHN = [

    [0,0,0,0,0,0,19,42,52,0,0,0,0,0]
];

var lineStyle = {
    normal: {
        width: 1,
        opacity: 1
    }
};

option = {
    title: {
        text: '各种口味小龙虾消费第一省份占比图',
        left: 'center',
        textStyle: {
            color: '#000000'
        }
    },
    legend: {
        bottom: 5,
        data: ['上海','湖南','北京',  '广东','浙江'],
        itemGap: 20,
        textStyle: {
            color: '#000000',
            fontSize: 14
        },
        selectedMode: 'single'
    },
    /*visualMap: {
         show: true,
         min: 0,
         max: 20,
         dimension: 6,
         inRange: {
             colorLightness: [0.5, 0.8]
         }
     },*/
    radar: {
        indicator: [
            {name: '冰镇小龙虾', max: 100},
            {name: '红烧小龙虾', max: 100},
            {name: '清蒸小龙虾', max: 100},
            {name: '白灼小龙虾', max: 100},
            {name: '极盐小龙虾2', max: 100},
            {name: '十三香小龙虾', max: 100},
            {name: '麻辣小龙虾', max: 100},
            {name: '茶香小龙虾', max: 100},
            {name: '卤味小龙虾', max: 100},
            {name: '蒜蓉小龙虾', max: 100},
            {name: '咖喱小龙虾', max: 100},
            {name: '香辣小龙虾', max: 100},
            {name: '油焖小龙虾', max: 100},
            {name: '小龙虾粥', max: 100}
        ],
        shape: 'circle',
        splitNumber: 5,
        name: {
            textStyle: {
                color: '#000000'
            }
        },
        splitLine: {
            lineStyle: {
                color: [
                    'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                    'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                    'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)',
                    'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 22, 1)',
                    'rgba(238, 197, 102, 0.8)', 'rgba(238, 97, 22, 1)'
                ].reverse()
            }
        },
        splitArea: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(238, 197, 102, 0.5)'
            }
        }
    },
    series: [
        {
            name: '北京',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataBJ,
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#fa697c'
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.5
                }
            }
        },
        {
            name: '上海',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataSH,
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#e13a9d'
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.5
                }
            }
        },
        {
            name: '广东',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataGZ,
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#9b45e4'
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.5
                }
            }
        },
        {
            name: '浙江',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataZJ,
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#fcc169'
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.5
                }
            }
        },
        {
            name: '湖南',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataHN,
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: 'rgb(238, 97, 22)'
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.5
                }
            }
        }

    ]
};
myChart.setOption(option);

/*var myChart1=echarts.init(document.getElementById("myBarChart1"));
var option1 = {
    title : {
        text: '南丁格尔玫瑰图',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'半径模式',
            type:'pie',
            radius : [20, 110],
            center : ['25%', '50%'],
            roseType : 'radius',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {value:10, name:'rose1'},
                {value:5, name:'rose2'},
                {value:15, name:'rose3'},
                {value:25, name:'rose4'},
                {value:20, name:'rose5'},
                {value:35, name:'rose6'},
                {value:30, name:'rose7'},
                {value:40, name:'rose8'}
            ]
        },
        {
            name:'面积模式',
            type:'pie',
            radius : [30, 110],
            center : ['75%', '50%'],
            roseType : 'area',
            data:[
                {value:10, name:'rose1'},
                {value:5, name:'rose2'},
                {value:15, name:'rose3'},
                {value:25, name:'rose4'},
                {value:20, name:'rose5'},
                {value:35, name:'rose6'},
                {value:30, name:'rose7'},
                {value:40, name:'rose8'}
            ]
        }
    ]
};
myChart1.setOption(option1);

var myChart2=echarts.init(document.getElementById("myBarChart2"));
var option2 = {
    dataset: {
        source: [
            ['score', 'amount', 'product'],
            [89.3, 58212, 'Matcha Latte'],
            [57.1, 78254, 'Milk Tea'],
            [74.4, 41032, 'Cheese Cocoa'],
            [50.1, 12755, 'Cheese Brownie'],
            [89.7, 20145, 'Matcha Cocoa'],
            [68.1, 79146, 'Tea'],
            [19.6, 91852, 'Orange Juice'],
            [10.6, 101852, 'Lemon Juice'],
            [32.7, 20112, 'Walnut Brownie']
        ]
    },
    grid: {containLabel: true},
    xAxis: {name: 'amount'},
    yAxis: {type: 'category'},
    visualMap: {
        orient: 'horizontal',
        left: 'center',
        min: 10,
        max: 100,
        text: ['High Score', 'Low Score'],
        // Map the score column to color
        dimension: 0,
        inRange: {
            color: ['#D7DA8B', '#E15457']
        }
    },
    series: [
        {
            type: 'bar',
            encode: {
                // Map the "amount" column to X axis.
                x: 'amount',
                // Map the "product" column to Y axis
                y: 'product'
            }
        }
    ]
};
myChart2.setOption(option2);

window.onresize=function(){
    myChart.resize();
    myChart1.resize();
    myChart2.resize();
};

