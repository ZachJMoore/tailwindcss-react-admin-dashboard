import React, {Component} from "react"
import Chart from "chart.js"

class CardLarge extends Component{

    constructor(props){
        super(props);
        this.state = {}

        this.initChart = (props)=>{

            let {labels, datasets, type} = props

            this.chart = new Chart(this.refs.canvas, {
                type: type,
                data: {
                  labels: labels,
                  datasets: datasets.map(dataset=>{
                      return ({
                        label: dataset.label,
                        data: dataset.data,
                        backgroundColor: dataset.backgroundColor || 'rgba(220, 220, 220, 0.5)',
                        borderColor: dataset.borderColor || 'rgba(220, 220, 220, 1)',
                        pointBackgroundColor: dataset.pointBackgroundColor || 'rgba(220, 220, 220, 1)',
                        pointBorderColor: dataset.pointBorderColor || '#fff'
                      })
                  })
                },
                options: {
                    layout: {
                        padding: {
                            top: 10,
                            left: 0,
                            right: 10,
                            bottom: 0
                        }
                    },
                    responsive: true,
                    maintainAspectRation: false,
                    legend: {
                        display: true
                    },
                    title: {
                        display: false
                    },
                    tooltips: {
                        mode: "nearest"
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                display: true
                            },
                            gridLines: {
                                display: true
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                display: true
                            },
                            gridLines: {
                                display: true
                            }
                        }],
                    }
                }
              })
        }

        this.updateChart = (chart, props)=>{
            
            chart.data.datasets.forEach((dataset, index) => {
                dataset.data = props.datasets[index].data
            });
            chart.data.labels = props.labels

            chart.update()
        }

    }

    componentDidMount(){
        this.initChart(this.props)
    }

    componentDidUpdate(){
        this.updateChart(this.chart, this.props)
    }

    render(){
        return (
            <div className="flex flex-col w-full p-2">
                <div className={"flex flex-col rounded shadow-lg overflow-hidden bg-white flex-1 relative " + this.props.className}>
                    <span className="m-4 text-xl">{this.props.title}</span>
                    <canvas ref="canvas" height="450px" className="w-full self-center"></canvas>
                </div>
            </div>
        )
    }
}

export default CardLarge