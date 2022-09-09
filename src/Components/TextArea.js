import React, { useState } from 'react'

const TextArea = (props) => {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to UpperCase", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to LowerCase", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Clear Text", "success");
    }

    const handleCopy = () => {
       var text = document.getElementById("myBox");
       text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copy to Clipboard", "success");
    }

const handleExtrraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove all Extra Spaces", "success");
}

const handleCapitalize = () =>{
    const lower = text.toLowerCase();
    let lower2 = lower.charAt(0).toUpperCase() + lower.slice(1);
    setText(lower2);
}

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (
        <>
        <div className="container" style={{color : props.mode==='dark'? 'white' : 'black'}}>
            <h2 className="textutils"><span><u>Try TextUtils</u></span>:- <span style={{fontSize:"27px"}}>Word Counter, Character Counter, Remove Extra Spaces...</span></h2>
            <textarea className="form-control mt-3" placeholder='Enter text here' value={text} onChange={handleOnChange} id="myBox" rows="8" style={{borderRadius:"15px"}}></textarea>
            <div className="mt-2">
                <button disabled={text.length===0} className="btn btn-primary m-1 txt-btn" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary m-1 txt-btn" onClick={handleLoClick}>Convert to lowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary m-1 txt-btn" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary m-1 txt-btn" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary m-1 txt-btn" onClick={handleExtrraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary m-1 txt-btn" onClick={handleCapitalize}>Capitalize Each Word</button>
            </div>
        </div>
        <div className="container mt-4" style={{color : props.mode==='dark'? 'white' : '#000'}}>
            <h4><u>Your Text Summary</u></h4>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charector</p>
            <p>{ 0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read.</p>
            <h5><b>Preview</b></h5>
            <p>{text.length > 0 ? text :"Enter something to preview to it."}</p>
        </div>
        </>
    )
}

export default TextArea