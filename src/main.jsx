import { useEffect, useState } from "react";
import Button from "./button";
const Main = () => {
  const [nums, setNums] = useState(createButtons());
  const [checker, setChecker] = useState(true);
  const [won, setWon] = useState(false);

  //creating our objects
  function createButtons() {
    const numbersObj = [];
    for (let i = 0; i < 10; i++) {
      numbersObj.push({
        id: i + 1,
        value: randomNum(),
        isClicked: false,
      });
    }
    return numbersObj;
  }

  //This function generated a random number between 0 and 10
  function randomNum() {
    return Math.floor(Math.random() * 10) + 1;
  }
  //handleClick 1.Generated a new number for the button clicked 2.Toggle isClicked to true
  function handleClickNumber(id) {
    setChecker(false);

    setNums((preArray) => {
      return preArray.map((num) => {
        if (num.id === id) {
          return {
            ...num,
            isClicked: !num.isClicked,
          };
        }
        return num;
      });
    });
  }
  function handleClickShuffle() {
    setNums((preArray) => {
      return preArray.map((num) => {
        if (num.isClicked === false) {
          return {
            ...num,
            value: randomNum(),
          };
        }
        return num;
      });
    });
  }
  function checkForWin() {
    let selectedItems = 0;
    for (let i = 0; i < nums.length; i++) {
      let num = nums[i].value;
      let isSelected = nums[i].isClicked;
      let value = nums[0].value;
      if (value !== num && isSelected) {
        return false;
      }
      if (isSelected) selectedItems++;
    }
    return selectedItems === 10 ? true : false;
  }
  function restartGame() {
    setWon(false);
    setNums((preArray) => {
      return preArray.map((num) => ({
        ...num,
        isClicked: false,
        value: randomNum(),
      }));
    });
  }
  //Checking for a wind condition
  useEffect(() => {
    const value = checkForWin();
    console.log(value);
    setWon(value);
  }, [nums]);

  return (
    <main>
      {won ? (
        <>
          <div className="winner">You have won!</div>
          <button onClick={restartGame} className="play-again-button">
            Play again
          </button>
        </>
      ) : (
        <>
          <div className="text">
            <h1>Tenzies</h1>
            <p>
              Roll until all dice are the same. Click each die to freeze it at
              its current value between rolls.
            </p>
          </div>
          <div className="buttons">
            {nums.map((num) => (
              <Button
                num={num}
                handleClickNumber={handleClickNumber}
                key={num.id}
              />
            ))}
          </div>
          <button className="roll" onClick={handleClickShuffle}>
            Roll
          </button>
        </>
      )}
    </main>
  );
};
export default Main;
