import React, { Component } from 'react'
import { robots } from './robots'
import CardList from './cardList'
import SearchBox from './SearchBox'
import './card.css'

class App extends Component  {
    constructor(){
        super()
        this.state={
            robots: robots,
            searchfield: ''
        }
    }
    onSearchChange=(event)=>{
        this.setState({ searchfield: event.target.value })
        console.log(event.target.value)
        // const filterdRobots=this.state.robots.filter(robots => {
        //     return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
          
        // })
        // console.log(filterdRobots) 
    }
    render(){
        const filterdRobots=this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
          
        })
        return (
            <div className='Hey'>
                <h1>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filterdRobots} />
                {/* <CardList robots={this.state.robots} /> */}
            </div>
          )  
    }
}

// const App = () => {
//     return (
//       <div className='Hey'>
//           <h1>Robofriends</h1>
//           <SearchBox />
//           <CardList robots={robots} />
//       </div>
//     )
//   }

export default App