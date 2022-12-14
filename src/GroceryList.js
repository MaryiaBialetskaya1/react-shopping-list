import { Component } from "react";
import check from "./check.png";

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
    if (input === "") {
      alert("Enter an item. No empty strings.");
    } else {
      let listArray = this.state.grosetyList;
      listArray.push(input);
      this.setState({ grosetyList: listArray, userInput: "" });
      //console.log(listArray);
    }
  }
  deleteItem() {
    let listArray = this.state.grosetyList;
    listArray = [];
    this.setState({ grosetyList: listArray });
  }
  crossedWord(event) {
    const li = event.target;
    li.classList.toggle("crossed");
  }
  onFormSumbit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSumbit}>
          <div className="container">
            <input
              type="text"
              placeholder="What whould you like to buy?"
              onChange={(e) => {
                this.onChangeEvent(e.target.value);
              }}
              value={this.state.userInput}
            />
          </div>
          <div className="container">
            <button
              onClick={() => this.addItem(this.state.userInput)}
              className="btn-add btn"
            >
              Add
            </button>
          </div>
          <ul>
            {this.state.grosetyList.map((item, index) => (
              <li onClick={this.crossedWord} key={index}>
                <img src={check} width="40px" alt="check mark" />
                {item}
              </li>
            ))}
          </ul>
          <div className="container">
            <button
              onClick={() => this.deleteItem()}
              className="btn-delete btn"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    );
  }
}
