import React, { Component } from "react";

import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.myattr;
    this.state = {
      age: "",
      selectValue: 10,
      inputSelectorData: [
        { name: "Anabel Rockford", email: "anabel.rockford@google.com" },
        { name: "Anna Nocenti", email: "a.l.nocenti@gmail.com" },
        { name: "David Jones", email: "david.jones@santander.com" },
        {
          name: "Erica Anastacios",
          email: "erica.anastacios.junior@santander.com"
        },
        { name: "James Lee", email: "james.lee@novabase.pt" },
        { name: "Mike Jones", email: "mike.jones@milleniumbcp.pt" },
        { name: "Sarah Smith", email: "s.smith@novabase.pt" },
        { name: "Sophie Anderson", email: "sophie.w.andersson@celfocus.pt" },
        { name: "Victoria Ann-Taylor", email: "v.tayloer@novabase.pt" }
      ]
    };
  }

  render() {
    const divStyle = {
      margin: "40px",
      maxWidth: "1200px",
      paddingTop: "20px"
    };

    const bootstrapInput = {
      borderRadius: 4,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 12px",
      width: "200px",
      marginLeft: "20px",
      marginRight: "20px"
    };

    return (
      <div>
        <div className="w3-content" style={divStyle}>
          <div className="">
            <div className="w3-row-padding" style={{ padding: "20px" }}>
              <div className="w3-quarter">
                <label>Order Number</label>
                <input
                  className="w3-select w3-border"
                  placeholder="Order Number"
                  name="orderNumber"
                  required=""
                  type="text"
                />
              </div>

              <div className="w3-quarter">
                <label>Account</label>
                <select className="w3-select w3-border" name="option">
                  <option value="" disabled selected>
                    Choose your option
                  </option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
              </div>

              <div className="w3-quarter">
                <label>Subcription</label>
                <select className="w3-select w3-border" name="option">
                  <option value="" disabled selected>
                    Choose your option
                  </option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
              </div>

              <div className="w3-quarter">
                <label>status</label>
                <select className="w3-select w3-border" name="option">
                  <option value="" disabled selected>
                    Choose your option
                  </option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
              </div>
            </div>
          </div>

          <div className="w3-row-padding" style={{ padding: "20px" }}>
            <div className="w3-quarter">
              <label>Channel</label>
              <select className="w3-select w3-border" name="option">
                <option value="" disabled selected>
                  Choose your option
                </option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>
            <div className="w3-quarter">
              <label>Created By</label>
              <input
                className="w3-select w3-border"
                placeholder="Created By"
                name="orderNumber"
                required=""
                type="text"
              />
            </div>
            <div className="w3-quarter">
              <label>Created On</label>
              <br />

              <input
                style={{ maxWidth: "100px" }}
                className="w3-input w3-border w3-third"
                placeholder="DD MM YYYY"
                name="CheckIn"
                required=""
                type="text"
              />
              <label className="w3-third">to</label>

              <input
                style={{ maxWidth: "100px" }}
                className="w3-input w3-border w3-third"
                placeholder="DD MM YYYY"
                name="CheckIn"
                required=""
                type="text"
              />
            </div>
          </div>
        </div>
        // using Material UI
        <div className="w3-row-padding" style={{ padding: "20px" }}>
          <div className="w3-quarter">
            <InputLabel>Order Number</InputLabel>
            <Input
              className="w3-select w3-border"
              placeholder="Order Number"
              name="orderNumber"
              required=""
              type="text"
            />
          </div>

          <div className="w3-quarter">
            <InputLabel>Account</InputLabel>
            <Select
              className="w3-select w3-border"
              value={this.state.age}
              onChange={this.handleChange}
              inputProps={{
                name: "age",
                id: "age-simple"
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>

          <div className="w3-quarter">
            <InputLabel>Subscription</InputLabel>
            <Select
              className="w3-select w3-border"
              value={this.state.age}
              onChange={this.handleChange}
              inputProps={{
                name: "age",
                id: "age-simple"
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;
