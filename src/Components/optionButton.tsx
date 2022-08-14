import React from "react";
import { useEffect, useState } from "react";
import "./optionButton.style.css"
interface optionButtonProps {
    turn : boolean,
    passValue: any,
    chageTurn: any,
    line : number,
    column : number,
    win: boolean,
    reset: boolean
}

function  OptionButton({turn, passValue, chageTurn, line, column, win, reset}:optionButtonProps) {
    const [isSet, setIsSet] = useState<boolean>(false);
    const [content, setContent] = useState<string>("?");

    React.useEffect(() => {
        if(win && !reset){
            setIsSet(true);
        }
        if(reset){
            setIsSet(false);
            setContent("?");
        }
    })
    
    const onClickButton = () =>{
        if(!isSet){
            setContent(turn?"fa-solid fa-x":"fa-solid fa-circle-notch");
            passValue(turn?"X":"O", line, column);
            chageTurn();
            setIsSet(true);
        }
    }

    return(
        <div>
            <button className="optionButton" onClick={onClickButton} disabled={isSet}>
                <i className={content}></i>
            </button>
        </div>
    );
}
export default OptionButton;
