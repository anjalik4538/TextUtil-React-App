import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpclick = ()=>{
    //console.log("Uppercase was clicked" , text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converting to uppercase", "success");
  }
  const handleLoclick = ()=>{
    //console.log("Uppercase was clicked" , text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converting to lowercase", "success");
  }
  
  const handleonChange = (event)=>{
    console.log("on change");
    setText(event.target.value)
  }
   const [text, setText] = useState('Enter text here');
   //text = "new text"; //wrong way to change the state
   //setText("new text"); //correct way to change the state
  
  
  return (
    <div>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}></div>
      
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control"  value={text} onChange={handleonChange} style={{backgoundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        
      </div>
      
      <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to UpperCase</button>
      
        <h1>Your text summary</h1>
        <p>{text.split (" ").length} words and {text.length}  characters</p>
        <p>{0.008*text.split (" ").length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
      


      
    
    </div>
  )
}
