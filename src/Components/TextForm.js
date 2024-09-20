import React, {useState} from 'react'


export default function TextForm(props) {
    
    const [text, setText] = useState('text');
    
    const handleOnChange = (event)=>{
        // console.log("on change");   
        setText(event.target.value)
    }
    
    const handleUpClick = ()=>{
        // console.log("uppercse button was clicked " + text);
        let newText = text.toUpperCase();
        // console.log(newText);
        setText(newText)
        props.showAlert("converted to UPPERCASE","success");
    }
    const handleLoClick = ()=>{
        // console.log("uppercse button was clicked " + text);
        let newText = text.toLowerCase();
        // console.log(newText);
        setText(newText)
        props.showAlert("converted to lowercase","success");
    }
    const handleClearClick = ()=>{
        // console.log("uppercse button was clicked " + text);
        let newText = '';
        // console.log(newText);
        setText(newText)
        props.showAlert("text cleared!","success");
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text copied!","success");
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    
    
    return (
    <>
    
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#69698b':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>
            </div>
            <div >
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>convert to UPPERCASE</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>convert to lowercase</button>
            <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleCopy}>copy text</button>
            <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleExtraSpaces}>remove extra spaces</button>
            <button className="btn btn-secondary mx-2 my-2" onClick={handleClearClick}>clear</button>
            </div>
        </div>
        <div className="container my-4 w-50" style={{color: props.mode==='dark'?'white':'black'}}> 
            <h3 className='text-center'>your text summery:</h3>
            <ul>
                <li>words : {text.split(" ").filter((element)=>{return element.length!==0}).length}</li>
                <li>character : {text.length}</li>
                <li>time to read : {0.008 * text.split(" ").length } min</li>
            </ul>
        </div>
    </>
  )
}
