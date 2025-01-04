import React,{useState } from 'react'
////ctrl+f used to replace class to classname
export default function About(props) {
 
let mystyle = {
  color:props.mode==='dark'?'white':'#042749',  
  backgroundColor:props.mode==='dark'?'#a33323':'#c7c9c9',
  border:'2px solid grey',
  borderColor:props.mode=='dark'?'#f3f3f2':'#042749'
}
//  const [btnText,setbtnText]=useState('Enable Dark mode ')
// const toggleStyle=()=>{
//   if(mystyle.color==='gray'){
//     setMystyle({
//       color: 'black',
//       backgroundColor:'white'
      
//     })
//     setbtnText('Enable Dark mode')
//   }else{
//     setMystyle({
//       color: 'white',
//       backgroundColor:'black'

//     })
//     setbtnText('Enable Light mode')

//   }
// } 
    return (
    <div className='container my-3' > 
              <h1 className='my-3' style={{ color:props.mode==='dark'?'white':'#042749'}}> About Us</h1>
  
              <div className="accordion" id="accordionExample" >
  
  <div className="accordion-item" >
    <h2 className="accordion-header" >
      <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
 <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle} >
     TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number 
     of words and characters. Thus it is suitable for writing text with word/character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
         <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={mystyle} >
  This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays etc.
      </div>
    </div>
  </div>
          </div>
          {/* <div className="container  my-3"  >   
             <button  type="button" onClick={toggleStyle} style={mystyle} className="btn btn-primary my-3">{btnText}</button>
    </div> */}
    </div>
  )
}



