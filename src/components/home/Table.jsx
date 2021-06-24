import React, { Component } from "react";
import Icons from "../Icons";
export default class Table extends Component {
  state = {
    data: null,
    weight: 0,
    type: "",
  };
  componentDidMount() {
    this.callAPI()
      .then((res) =>
        this.setState({
          weight: res.weight,
          type: res.type,
        })
      )
      .catch((err) => console.log(err));
  }
  callAPI = async () => {
    const response = await fetch(`${process.env.API}/list/weight/`, {
      // method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      dataType: "json",
    });

    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    const table = [
      {
        type: this.state.type,
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
              <td></td>
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
