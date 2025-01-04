import React from "react";
function Alerts(props) {
  const capitlize = (word)=>{
  const lowercase = word.toLowerCase();
  return lowercase.charAt(0).toUpperCase() + lowercase.slice(1);
  }
    return (
<div style={{height:'50px'}}>
{props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"> 
{/* //this is syntax for instead of if else props.alert true hota hai to  nechhe bala code print kardega nahi to null return karega  */}

      
<strong>{capitlize(props.alert.type)}  :  </strong>{props.alert.msg}
</div>}
</div>







    )
    
}
export default Alerts


