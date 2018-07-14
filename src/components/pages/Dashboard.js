import React, { Component } from 'react';
import CardSmall from '../graphs/CardSmall';

let getRandomData = (length, multiplier)=>{
  let array = []
  for (let i = 0; i <= length; i++){
    array.push((Math.random() * multiplier).toFixed(0))
  }
  array = array.map(point=>{return parseInt(point)})

  return array
}

class Dashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
      newMembers: [1, 2, 3],
      growth: [1, 2, 3],
      sales: [1, 2, 3],
      usersOnline: [1, 2, 3]
    }
  }

  componentDidMount(){
    this.setState({
      newMembers: getRandomData(12, 10),
      growth: getRandomData(12, 50),
      sales: getRandomData(12, 25),
      usersOnline: getRandomData(12, 20)
    })
  }

  render() {
    return (
      <>
        <div className="flex w-full flex-wrap justify-start items-start m-2 mb-0">
          <CardSmall title="New Members" type="bar" dataPoints={this.state.newMembers} />
          <CardSmall title="Growth" type="line" dataPoints={this.state.growth} />
          <CardSmall title="Sales" type="bar" dataPoints={this.state.sales} />
          <CardSmall title="Online Users" type="line" dataPoints={this.state.usersOnline} />
        </div>
      </>
    );
  }
}

export default Dashboard;