import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import OptionButton from "./Components/optionButton";

function App() {
  const [turn, setTurn] = React.useState<boolean>(true);
  const [win, setWin] = React.useState<boolean>(false);
  const [completed, setCompleted] = React.useState<boolean>(false);
  const [reset, setReset] = React.useState<boolean>(false);
  const [values, setValues] = React.useState<string[][]>([
    ["?", "?", "?"],
    ["?", "?", "?"],
    ["?", "?", "?"],
  ]);

  const ChangeValues = (buttonData: string, line: number, column: number) => {
    const newValues = values;
    newValues[line][column] = buttonData;
    setValues(newValues);
    setReset(false);
    setTurn(false);
  };

  const verifyIsCompleted = () => {
    for (let i = 0; i < 3; i++) {
      if(values[i].includes("?"))
        return false;
    }
    return true;
  };

  const ChangeTurn = () => {
    setTurn(turn ? false : true);
  };
  const verifyLines = () => {
    for (let i = 0; i < 3; i++) {
      if (
        values[i][0] == values[i][1] &&
        values[i][0] == values[i][2] &&
        values[i][0] != "?"
      )
        return true;
    }
    return false;
  };
  const verifyColumns = () => {
    for (let i = 0; i < 3; i++) {
      if (
        values[0][i] === values[1][i] &&
        values[0][i] === values[2][i] &&
        values[0][i] != "?"
      )
        return true;
    }
    return false;
  };

  const verifyDiagons = () => {
    if (
      values[0][0] === values[1][1] &&
      values[0][0] === values[2][2] &&
      values[0][0] != "?"
    )
      return true;
    else if (
      values[0][2] === values[1][1] &&
      values[0][2] === values[2][0] &&
      values[0][2] != "?"
    )
      return true;
    else return false;
  };
  useEffect(() => {
    setWin(
      verifyLines() || verifyColumns() || verifyDiagons()
    );
    setCompleted(verifyIsCompleted());
  });
  const resetGame = () => {
    setValues([
      ["?", "?", "?"],
      ["?", "?", "?"],
      ["?", "?", "?"],
    ]);
    setWin(false);
    setCompleted(false);
    setTurn(true);
    setReset(true);
  };
  console.log("rend", win);
  return (
    <div>
      {win ? <p className="winTitle">{turn? "JOGADOR 2": "JOGADOR 1"} GANHOU !</p> : ""}
      {completed && !win  ? <p className="winTitle">EMPATE !</p> : ""}
      {!completed && !win  ? <p className="winTitle">TURNO: {turn? "1º Jogador": "2º Jogador"}</p> : ""}
      <table>
        <tbody>
          <tr>
            <td>
              <OptionButton
                line={0}
                column={0}
                chageTurn={ChangeTurn}
                passValue={ChangeValues}
                turn={turn}
                win={win || completed}
                reset={reset}
              />
            </td>
            <td>
              <OptionButton
                line={0}
                column={1}
                chageTurn={ChangeTurn}
                passValue={ChangeValues}
                turn={turn}
                win={win || completed}
                reset={reset}
              />
            </td>
            <td>
              <OptionButton
                line={0}
                column={2}
                chageTurn={ChangeTurn}
                passValue={ChangeValues}
                turn={turn}
                win={win || completed}
                reset={reset}
              />
            </td>
          </tr>
          <tr>
            <td>
              <OptionButton
                line={1}
                column={0}
                chageTurn={ChangeTurn}
                passValue={ChangeValues}
                turn={turn}
                win={win || completed}
                reset={reset}
              />
            </td>
            <td>
              <OptionButton
                line={1}
                column={1}
                chageTurn={ChangeTurn}
                passValue={ChangeValues}
                turn={turn}
                win={win || completed}
                reset={reset}
              />
            </td>
            <td>
              <OptionButton
                line={1}
                column={2}
                chageTurn={ChangeTurn}
                passValue={ChangeValues}
                turn={turn}
                win={win || completed}
                reset={reset}
              />
            </td>
          </tr>
          <tr>
            <td>
              <OptionButton
                line={2}
                column={0}
                chageTurn={ChangeTurn}
                passValue={ChangeValues}
                turn={turn}
                win={win || completed}
                reset={reset}
              />
            </td>
            <td>
              <OptionButton
                line={2}
                column={1}
                chageTurn={ChangeTurn}
                passValue={ChangeValues}
                turn={turn}
                win={win || completed}
                reset={reset}
              />
            </td>
            <td>
              <OptionButton
                line={2}
                column={2}
                chageTurn={ChangeTurn}
                passValue={ChangeValues}
                turn={turn}
                win={win || completed}
                reset={reset}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button className="resetButton" onClick={resetGame}><i className="fa-solid fa-arrow-rotate-right"></i></button>
    </div>
  );
}

export default App;
