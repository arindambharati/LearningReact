import { useState } from "react";
import "./styles.css";

//var headingText = "Welcome";
var username = "Arindam";
//var username=prompt("Give me your name");
var color = "blue";
//var likeCounter = 0;
export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);
  function likeClickhandler() {
    //console.log(likeCounter++);
    // var newLikeCounter=likeCounter+1; //processing
    setLikeCounter(likeCounter + 1); //processing/output
  }
  return (
    // <div className="App">
    //   <h1 style={{ backgroundColor: color }}>{headingText}</h1>
    // </div>
    <div className="App">
      <h1 style={{ backgroundColor: color }}>Welcome, {username}</h1>
      <button onClick={likeClickhandler}>Like Me</button> {likeCounter}
    </div>
  );
}

/*point to notice:
 *in react we use className keyword instead of class
 
 *class--> className
 *style --> takes an object instead of a string

 *In Js objects are inside {}
  hence, in while using style in react js, anything inside style will 
  be an object. the first {} is to ensure that we are using css/html
  in javascript. the other inside bracket {{}} is the object. See
  style={{backgroundColor: color}}.
 
 * Also, background-color in css is  backgroundColor in React js.
 * background-color-->backgroundColor
 * onclick-->onClick
 * VISER= View-->Interact-->State in Event Handler-->React/Render 
 */
