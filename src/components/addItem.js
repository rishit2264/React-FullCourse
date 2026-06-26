import React, { Component } from "react";

class AddItem extends Component {
  state = {};

  render() {
    return (
      <form className="row  mb-5">
        <div className="mb-3  col-4">
          <label htmlFor="input name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
          />

        </div>

        <div className="mb-3 col-4">
          <label htmlFor="imput Price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
          />
        </div>

        <button type="submit" className="btn btn-primary  col-4">
          Add
        </button>
      </form>
    );
  }
}

export default AddItem;