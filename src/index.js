import HlTextFieldBuilder from './components/HlTextFieldBuilder.js';
import MyChart from './components/MyChart.js';

window.setTimeout(function () {
    // div.controls is a standard DOM element found in all Highlighter pages.
    const firstDiv = jQuery(jQuery('div.controls')[0]);

    // Create a builder instance and use it to create 2 text fields.
    const txtBuilder = new HlTextFieldBuilder();

    // The 2 text fields are to capture username and password.
    const elem1 = txtBuilder.createFilled('username-input', 'text', 'username', 'Username');
    const elem2 = txtBuilder.createFilled('password-input', 'password', 'password', 'Password');

    // Add the text fields as child elements of firstDiv.
    firstDiv.append(elem1, elem2);

    // Now that the DOM contains elements for the text fields, initialise the JavaScript
    // to provide behaviours to those DOM elements as proper MDCTextFields.
    txtBuilder.start(elem1);
    txtBuilder.start(elem2);

    // Create a 2nd div to show the echart.
    const secondDiv = jQuery(document.createElement("div"))
        .addClass('my-chart-class')
        .appendTo(firstDiv);

    // Specify the configuration items and data for the chart
    var chartOption = {
        title: {
            text: 'ECharts Getting Started Example'
        },
        tooltip: {},
        legend: {
            data: ['sales']
        },
        xAxis: {
            data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']
        },
        yAxis: {},
        series: [
            {
                name: 'sales',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }
        ]
    };
    
    // Create the chart and display it.
    const chart = new MyChart(secondDiv[0]);
    chart.setOption(chartOption);

}, 1000);

