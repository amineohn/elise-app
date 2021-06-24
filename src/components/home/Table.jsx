import React, { Component } from "react";
import Icons from "../Icons";
export default class Table extends Component {
  state = {
    data: null,
    weight: "",
  };
  componentDidMount() {
    this.callAPI()
      .then((res) =>
        this.setState({
          weight: res.weight,
          type: res.type,
          deposit: res.deposit,
        })
      )
      .catch((err) => console.log(err));
  }
  callAPI = async () => {
    const response = await fetch(`${process.env.API}/list/weight/`, {
      method: "GET",
      type: "type",
      weight: "weight",
      deposit: "deposit",
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
