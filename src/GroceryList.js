import { Component } from "react";

export class GroceryList extends Component{
    state = {
        userInput: "",
        grosetyList: []
    }

    onChangeEvent(e){
        console.log(e.target.value);
    }
    render(){
        return(
            <div>
                <input
                type="text" placeholder="What whould you like to buy?"
                onChange={this.onChangeEvent}
                value={this.state.userInput} />
            </div>
        )
    }
}