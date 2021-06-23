import React, { Component } from "react";
import Icons from "../Icons";
export default class Table extends Component {
  state = {
    data: null,
  };

  callBackendAPI = async () => {
    const response = await fetch("http://localhost:3001/list/weight", {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "header",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      type: "type",
      weight: "weight",
      deposit: "deposit",
    });

    const string = await response.text();
    const json = string === "" ? {} : JSON.parse(string);
    console.log(json);
    return json;
  };

  componentDidMount() {
    this.callBackendAPI()
      .then((res) =>
        this.setState({
          weight: res.list,
          type: res.type,
          deposit: res.deposit,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    const table = [
      {
        type: this.state.type,
        deposit: this.state.deposit,
        weight: this.state.weight,
        asButton: false,
        isEditable: true,
      },
    ];

    return (
      <>
        {table.map((item) => (
          <tr>
            <>
              <td>{item.type}</td>
              <td>{item.deposit}</td>
              <td>
                {item.weight}
                {item.asButton ? (
                  ""
                ) : (
                  <button
                    className={item.isEditable ? "valid orange" : "valid gray"}
                    type="submit"
                  >
                    {item.isEditable ? (
                      <Icons icon="add" />
                    ) : (
                      <Icons icon="delete" />
                    )}
                  </button>
                )}
              </td>
            </>
          </tr>
        ))}
      </>
    );
  }
}
