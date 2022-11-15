import { Component } from "react";

export class GroceryList extends Component {
  state = {
    userInput: "",
    grosetyList: [],
  };

  onChangeEvent(e) {
    this.setState({ userInput: e });
    //console.log(e);
  }
  addItem(input) {
    let listArray = this.state.grosetyList;
    listArray.push(input);
    this.setState({ grosetyList: listArray, userInput: "" });
    //console.log(listArray);
  }
  crossedWord(event) {
    const li = event.target;
    li.classList.toggle("crossed");
  }
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="What whould you like to buy?"
            onChange={(e) => {
              this.onChangeEvent(e.target.value);
            }}
            value={this.state.userInput}
          />
        </div>
        <div>
          <button onClick={() => this.addItem(this.state.userInput)}>
            Add
          </button>
        </div>
        <ul>
          {this.state.grosetyList.map((item, index) => (
            <li onClick={this.crossedWord} key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
