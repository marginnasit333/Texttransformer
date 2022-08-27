
import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{       
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted into Uppercase!!!","success");
    }
    const handleLoClick=()=>{       
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted into Lowercase!!!","success");
    }
    const handleClearClick=()=>{       
        let newText="";
        setText(newText)
        props.showAlert("Cleared text!!!","success");
    }
    const handleFUpClick=()=>{       
        let newText=text.split(" ").map(el=>el.charAt(0).toUpperCase()+el.slice(1)).join(" ");
        setText(newText)
        props.showAlert("Converted into all first letter Uppercase!!!","success");
    }
    const handleFLoClick=()=>{       
        let newText=text.split(" ").map(el=>el.charAt(0).toLowerCase()+el.slice(1)).join(" ");
        setText(newText)
        props.showAlert("Converted into all first letter Lowercase!!!","success");
    }
    const handleExtraSpace=()=>{       
        let newText=text.split(/[  ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed all extra spaces!!!","success");
    }

    const handleOnChange=(event)=>{       
        setText(event.target.value)
    }
    
    const[text,setText]=useState("");
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{color:props.mode==='dark'?'white':'black' ,backgroundColor:props.mode==='dark'?'#060b10':'white'}} id="myBox" rows="10"></textarea>
                </div>
                <button className='btn btn-primary my-2 mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary my-2 mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
                <button className='btn btn-primary my-2 mx-2' onClick={handleFUpClick}>Convert to First Uppeercase</button>
                <button className='btn btn-primary my-2 mx-2' onClick={handleFLoClick}>Convert to First Lowercase</button>
                <button className='btn btn-primary my-2 mx-2' onClick={handleClearClick}>Clear text</button>
                <button className='btn btn-primary my-2 mx-2' onClick={handleExtraSpace}>Remove Extra space</button>
            
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h4>Your Text summary</h4>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minutes to read this paragraph</p>
            <h4>Preview</h4>
            <p>{text}</p>

        </div>
        </>
    )
}
