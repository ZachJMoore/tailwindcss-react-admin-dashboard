import React, { Component } from 'react';
import GraphSmall from '../graphs/GraphSmall';
import GraphLarge from '../graphs/GraphLarge';
import BreadCrumb from '../navigation/BreadCrumb';

let getRandomData = (length, multiplier)=>{
  let array = [0]
  for (let i = 0; i <= length; i++){
    if (i % 2){
      array.push(array[i] + (Math.random() * multiplier).toFixed(0) / 2)
    } else {
      array.push(array[i] - (Math.random() * (multiplier / 2)).toFixed(0) / 2)
    }
  }
  array = array.map(point=>{return parseInt(point)})

  return array
}

class Dashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
      newMembers: [],
      growth: [],
      sales: [],
      usersOnline: [],
      traffic: {
        labels: [],
        datasets: [
          {
            data: [],
            label: "Dataset One"
          }
        ]
      }
    }
  }

  componentDidMount(){

    let randomData = getRandomData(28, 10)

    this.setState({
      newMembers: getRandomData(12, 10),
      growth: getRandomData(12, 50),
      sales: getRandomData(12, 25),
      usersOnline: getRandomData(12, 20),
      traffic: {
        labels: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        datasets: [
          {
            data: randomData,
            label: "Dataset One"
          }
        ]
      }
    })
  }

  render() {
    return (
      <>

        <BreadCrumb />

        <div className="flex w-full flex-wrap justify-start items-start my-1">
          <GraphSmall className="bg-blue-light text-white" backgroundColor="white" title="New Members" type="bar" dataPoints={this.state.newMembers} />
          <GraphSmall className="bg-green-light text-white" backgroundColor="white" title="Growth" type="line" dataPoints={this.state.growth} />
          <GraphSmall className="bg-indigo-light text-white" backgroundColor="white" title="Sales" type="bar" dataPoints={this.state.sales} />
          <GraphSmall className="bg-red-light text-white" backgroundColor="white" title="Online Users" type="line" dataPoints={this.state.usersOnline} />
        </div>

        <div className="flex w-full flex-wrap justify-start items-start my-1">
          <GraphLarge 
            title="Traffic" 
            labels={this.state.traffic.labels}
            type="line"
            datasets={this.state.traffic.datasets}
          />
        </div>
      </>
    );
  }
}

export default Dashboard;