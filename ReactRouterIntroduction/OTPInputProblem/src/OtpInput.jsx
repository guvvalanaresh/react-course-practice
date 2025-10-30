import React, { useEffect, useState } from "react";

/**
    1.Forward Functionality
      i.when no digit in the input
        Apply the new key in it and focus the immediate next input.
      ii.when input contains a digit
        a.If the cursor at the beginning: apply new value to current input and slide
          it's older value towards right.
        b.If the cursor at the end: apply new value to the next input and maybe focus on the
          next to next input.
    2.Backward Functionality
    3.Arrow functionality 
 */

const OtpInput = ({ size = 6 , onSubmit}) => {
  const [inputValues, setInputValues] = useState(() =>
    new Array(size).fill("")
  );

  const focusNext = (currentInput) => {
      currentInput?.nextElementSibling?.focus();
  }

  const focusNextToNext = (currentInput) => {
    if(currentInput?.nextElementSibling?.nextElementSibling){
      currentInput.nextElementSibling.nextElementSibling.focus();
    } else {
      focusNext(currentInput)
    }
  };

  const focusPrevious = (currentInput) => {
    currentInput?.previousElementSibling?.focus();
  }

  const handleNumericInput = (event) => {
    const inputValue = Number(event.key);
    if(isNaN(inputValue)) return;

    const inputElement = event.target;
    const inputIndex = Number(inputElement.id);

    if(inputValues[inputIndex].length === 0){
        //no digit present in the input
        setInputValues((prev) => {
          const newValues = [...prev];
          newValues[inputIndex] = inputValue.toString();
          return newValues;
        });

        focusNext(inputElement);
    }
    else {
        // when there is a digit in the current input
        const cursorIndex = inputElement.selectionStart;
        // console.log(cursorIndex);                      //Cursor also has the index we can get by selectionStart property(it is a html property).
        if(cursorIndex === 0) {
            setInputValues((prev) => {
              const newValues = [...prev];
              if (cursorIndex < size - 1) {
                  newValues[inputIndex + 1] = prev[inputIndex];
              }
              newValues[inputIndex] = inputValue.toString();
              return newValues;
            });

            focusNextToNext(inputElement);
        }
        else if(inputIndex + 1 < size) {
            setInputValues((prev) => {
              const newValues = [...prev];
              newValues[inputIndex + 1] = inputValue;
              return newValues;
            });
            focusNextToNext(inputElement);
        }
    }

    // console.log(inputIndex);
  }

  const handleBackSpace = (event) => {
      if(event.key === "Backspace") {
        const inputIndex = Number(event.target.id);
        setInputValues((prev) => {
            const newValues = [...prev];
            newValues[inputIndex] = "";
            return newValues;
        });
        focusPrevious(event.target);
      }
  }

  const handleArrows = (event) => {
    if (event.key === "ArrowRight"){
        focusNext(event.target);
    }
    else if (event.key === "ArrowLeft"){
        focusPrevious(event.target);
    }
  }

  const onKeyUp = (event) => {
      handleNumericInput(event);
      handleBackSpace(event);
      handleArrows(event);
  }

  // we can use the onSubmit by using the useEffect from passing it as component argument
  useEffect(() => {
    let isValid = true;
    inputValues.forEach((inputValue) => {
      if (inputValue.length === 0) isValid = false;
    });
    isValid && onSubmit(inputValues);
  }, [inputValues]);

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex justify-center w-[80%] border border-red-400 gap-6 p-5">
        {inputValues.map((inputValue, index) => (
          <input
            id={index.toString()}
            key={index.toString()}
            className="px-5 py-3 border-2 border-gray-400 text-center w-[15%] rounded text-2xl focus:outline-none focus:border-blue-500"
            value={inputValue}
            onChange={() => {}}
            onKeyUp={onKeyUp}
            maxLength={1}
          />
        ))}
      </div>
    </div>
  );
};

export default OtpInput;
