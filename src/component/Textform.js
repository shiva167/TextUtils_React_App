import React,{useState} from 'react'

///text is variable which store Enter text here and setText is function 
export default function Textform(props) {

  const handleCopy = ()=>{
    console.log("I am copy");
    var text = document.getElementById('exampleFormControlTextarea1');
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert('Copy the above text','success');
  }
  const handleSfclick = () => {
    function capitlize(word){
      const lowercase = word.toLowerCase();
      return(lowercase.charAt(0).toUpperCase() + lowercase.slice(1));
    }
    let capiWordArr = text.split(" ").map(word => capitlize(word));
    //  setText("You have to click on handUpclick");
   setText(capiWordArr.join(" ")); 
   props.showAlert('Convert the Standard formate the above text','success'); 
  }
 const handleUpclick = () => {
   console.log("Uppercase was changed" + text); 
   let newText = text.toUpperCase();
  //  setText("You have to click on handUpclick");
  setText(newText); 
  props.showAlert('Convert the Uppercase above text','success');
  }
  const handleloclick = () => {
    console.log("Lowercase was changed" + text); 
    let newText = text.toLowerCase();
   //  setText("You have to click on handUpclick");
   setText(newText); 
   props.showAlert('Convert lowercase above text','success');
  }
  const handleOnchange = (event) => {
    console.log("On change");   ///isko listen karna jaruri tha iske bina Write nahi kar pate text ko
    setText(event.target.value);  //ab update karte hai 

  }
  const handleReclick = () => {
    console.log("Reverse the word " + text); 

    // let newText = text.split("").reverse().join("");
    let reverseWordArr = text.split(" ").map(word => word.split("").reverse().join(""));
    //  setText("You have to click on handUpclick");
   setText(reverseWordArr.join(" ")); 
   props.showAlert('Reverse word by word from the above text','success');
  }
  const handleRepclick = () => {
    console.log("Reverse the word " + text); 

    let newText = text.split("").reverse().join("");

    //  setText("You have to click on handUpclick");
   setText(newText); 
   props.showAlert('Reverse the above text','success');
  }
  const handleExtraspace=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert('Remove Extra spaces from the above text','success');
  }
  const handleClclick = () => {
    console.log("Clear the word " + text); 

    let newText = "";
    //  setText("You have to click on handUpclick");
   setText(newText); 
   props.showAlert('Clear the above text','success');
  }
  const [text, setText] = useState("Enter text here ");
 //setText("Enter new text here ");////corrext way to change the text
  /// text = "Enter new text here  "Wrong way to change the text 
  let mystyle = {
    color:props.mode==='dark'?'white':'#042749',  
    backgroundColor:props.mode==='dark'?'#a33323':'#c7c9c9',
    border:'2px solid grey',
    borderColor:props.mode=='dark'?'#f3f3f2':'#042749'
  }
  return (
      <>
    <div className='container' style={mystyle} > 
        <h1>{props.heading}</h1>
        <div className='mb-3'>
          <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnchange} style={mystyle} value={text} rows="3"></textarea>
      </div>
        <button className='btn btn-primary mx-2 my-2' style={mystyle} onClick={handleUpclick}>To convert Uppercase</button>
        
        <button className='btn btn-primary'style={mystyle} onClick={handleloclick}>To convert Lowercase</button>
        
        <button className='btn btn-primary mx-2 my-2 ' style={mystyle} onClick={handleReclick}>To Reverse text word by word</button>
        <button className='btn btn-primary mx-2 my-2 'style={mystyle} onClick={handleRepclick}>To Reverse text </button>
        <button className='btn btn-primary mx-2 my-2' style={mystyle} onClick={handleClclick}>To Clear text </button>
        <button className='btn btn-primary mx-2 my-2' style={mystyle} onClick={handleCopy}>To Copy text </button>
        <button className='btn btn-primary mx-2 my-2' style={mystyle} onClick={handleExtraspace}>To Remove extra spaces</button>
        <button className='btn btn-primary mx-2 my-2' style={mystyle} onClick={handleSfclick}>To convert Standard formate</button>
        
        </div>
   <div className='container my-3'style={mystyle} >
          <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element)=>{
          return element.length!==0;
        }).length} words and {text.length} characters.</p>
        <p>{0.08*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
      </div>
   </>
      )
  }





