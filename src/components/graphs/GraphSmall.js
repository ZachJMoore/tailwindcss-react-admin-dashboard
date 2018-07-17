import React, {Component} from "react"
import Chart from "chart.js"

class CardSmall extends Component{

    constructor(props){
        super(props);
        this.state = {}

        this.initChart = (type, props)=>{

            let { dataPoints } = props

            this.chart = new Chart(this.refs.canvas, {
                type: type,
                data: {
                  labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                  datasets: [{
                    data: dataPoints,
                    backgroundColor: props.backgroundColor || 'rgba(220, 220, 220, 0.5)',
                    borderColor: props.borderColor || 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: props.pointBackgroundColor || 'rgba(220, 220, 220, 1)',
                    pointBorderColor: props.pointBorderColor || '#fff'
                  }]
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
                        display: false
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
                                display: false
                            },
                            gridLines: {
                                display: false
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                display: false
                            },
                            gridLines: {
                                display: false
                            }
                        }],
                    }
                }
              })
        }

        this.updateChart = (chart, dataPoints)=>{
            chart.data.datasets.forEach((dataset) => {
                dataset.data = dataPoints
            });
            chart.update()
        }

        this.getTotal = ()=>{
            let total = 0
            this.props.dataPoints.forEach(point=>{
                total += point
            })
            return total
        }
    }

    componentDidMount(){
        this.initChart(this.props.type, this.props)
    }

    componentDidUpdate(){
        this.updateChart(this.chart, this.props.dataPoints)
    }

    render(){
        return (
            <div className="flex flex-col w-1/2 md:w-1/3 lg:w-1/4 p-2">
                <div className={"flex flex-col rounded shadow-lg overflow-hidden bg-white flex-1 relative " + this.props.className}>
                    <span className="m-4 mb-0 text-xl">{Math.sign(this.getTotal()) === 1 ? "+" + this.getTotal() : this.getTotal()}</span>
                    <span className="m-4">{this.props.title}</span>
                    <canvas ref="canvas" height="150px" className="w-full self-center"></canvas>
                </div>
            </div>
        )
    }
}

export default CardSmall