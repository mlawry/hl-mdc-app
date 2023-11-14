import * as echarts from 'echarts';

// You can write your own styles in a MyChart.scss file. Webpack has been configured to use style-loader
// to inject the SCSS styles into the DOM's <head><style> tag. 
import './MyChart.scss';

/**
 * Instances have a field variable named `myChart` that holds the echart instance.
 */
class MyChart {

    /**
     * This constructor calls echarts.init() method to init a `myChart` field variable.
     * @param {HTMLElement} htmlDomElem The DOM element to become echart's container,
     * obtained using methods such as document.getElementById().
     */
    constructor(htmlDomElem) {
        // Create the echarts instance using SVG renderer.
        this.myChart = echarts.init(htmlDomElem, null, { renderer: 'svg' });
    }

    /**
     * Calls `myChart.setOption()` method to draw the chart.
     * @param {Object} chartData A JSON object containing data, will be passed to
     * `myChart.setOption()` method.
     */
    setOption(chartData) {
        // Draw the chart
        this.myChart.setOption(chartData);
    }

}

export default MyChart;
