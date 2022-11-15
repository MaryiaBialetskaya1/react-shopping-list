import { Component } from "react";

export class GroceryList extends Component{
    state = {
        userInput: "",
        grosetyList: []
    }

    onChangeEvent(e){
        this.setState({userInput: e})
    }
    render(){
        return(
            <div>
                <input
                type="text" placeholder="What whould you like to buy?"
                onChange={(e) =>{this.onChangeEvent(e.target.value)}}
                value={this.state.userInput} />
            </div>
        )
    }
}