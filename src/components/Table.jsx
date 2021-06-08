import React from "react";
const BoxWeight = () => {
  const table = [
    {
      type: "Caisse",
      data: "Canettes",
      value: "20kg",
      asButton: false,
      isEditable: true,
    },
  ];
  return (
    <>
      <tr>
        {table.map((item) => (
          <>
            <td onClick="">{item.type}</td>
            <td onClick="">{item.data}</td>
            <td onClick="">
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
                  <i className="fas fa-pencil-alt edit"></i>

                  {item.isEditable ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon-sub edit"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon-sub edit"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              )}
            </td>
          </>
        ))}
      </tr>
    </>
  );
};
export default BoxWeight;
