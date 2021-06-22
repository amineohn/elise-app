import React, { Component } from "react";
import Icons from "../Icons";
export default class BoxWeight extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    this.callBackendAPI()
      .then((res) =>
        this.setState({
          list: res.list,
          type: res.type,
          data: res.data,
          error: res.error,
        })
      )
      .catch((err) => console.log(err));
  }
  callBackendAPI = async () => {
    const response = await fetch("/list/weight", {
      list: "weight",
      data: "data",
      type: "type",
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
        data: this.state.data,
        value: this.state.list,
        asButton: false,
        isEditable: true,
      },
    ];
    return (
      <>
        <tr>
          {table.map((item) => (
            <>
              <td>{item.type}</td>
              <td>{item.data}</td>
              <td>
                {item.value}{" "}
                {item.asButton ? (
                  ""
                ) : (
                  <button
                    className={
                      item.isEditable ? "valid orangeDark" : "valid gray"
                    }
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
          ))}
        </tr>
      </>
    );
  }
}
