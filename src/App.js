import "./styles.css";
import React from "react";
import { useState } from "react";
import { useReducer } from "react";

var database = [
  { id: 1, name: "B1336", qty: 0 },
  { id: 2, name: "B2286", qty: 0 },
  { id: 3, name: "B5956", qty: 0 },
  { id: 4, name: "EB1216", qty: 0 },
  { id: 5, name: "ES036", qty: 0 },
  { id: 6, name: "G3086", qty: 0 },
  { id: 7, name: "G4806", qty: 0 },
  { id: 8, name: "G5106", qty: 0 },
  { id: 9, name: "K1556", qty: 0 },
  { id: 10, name: "K4256", qty: 0 }
];

export default function App() {
  const [input, setInput] = useState(0);
  const [value, setValue] = useState("B1336");
  // const [state, setState] = useState(database);

  function reducer(state, action) {
    console.log("action", { action });
    console.log("action.payload", action.payload);

    switch (action.TYPE) {
      case "INCREMENT":
        return {
          database: state.database.map((item) =>
            item.name === action.payload
              ? { ...item, qty: item.qty + parseInt(input) }
              : item
          )
        };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, { database });

  // function calculate() {
  //   console.log({ input });
  //   state.map((item) => {
  //     item.name === value ? { ...item, qty: item.qty + parseInt(input) } : item;
  //   });
  // }

  console.log("before render", state.database);

  return (
    <>
      <nav className="navigation">
        <div className="app-name">
          <span>
            <div>Data Keeper by Apoorv Aggarwal</div>
          </span>
        </div>
      </nav>

      <div className="container">
        <form>
          <select
            value={value}
            onChange={(dropdown) => {
              setValue(dropdown.target.value);
              console.log({ value });
            }}
          >
            <option value="B1336">B1336</option>
            <option value="B2286">B2286</option>
            <option value="B5956">B5956</option>
            <option value="EB1216">EB1216</option>
            <option value="ES036">ES036</option>
            <option value="G3086">G3086</option>
            <option value="G4806">G4806</option>
            <option value="G5106">G5106</option>
            <option value="K1556">K1556</option>
            <option value="K4256">K4256</option>
          </select>
        </form>

        <div>
          <input onChange={(event) => setInput(event.target.value)}></input>
        </div>
        <div
          class="primary-button"
          onClick={() => {
            dispatch({ TYPE: "INCREMENT", payload: value });
            console.log("dispatch is working");
          }}
        >
          Submit
        </div>
      </div>

      <div className="container">
        {" "}
        <table>
          <tr key={"header"}>
            {Object.keys(state.database[0]).map((key) => (
              <th
                style={{
                  width: "150px",
                  textAlign: "center",
                  border: "1px solid black",
                  padding: "5px"
                }}
              >
                {key}
              </th>
            ))}
          </tr>
          {state.database.map((item) => (
            <tr style={{ textAlign: "center" }} key={item.id}>
              {Object.values(item).map((val) => (
                <td>{val}</td>
              ))}
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}
