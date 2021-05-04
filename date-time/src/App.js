import React from "react"
import "./App.css"
import DateTime from "./DateTime"

function App() {
  

  let date = new Date();
  let hours = date.getHours();
  console.log(date, hours)
  
  let timeOfDay
  
  const styles = {
    fontSize: 100
  }
  
  if (hours < 12) {
    timeOfDay = "morning"
    styles.color = "#04756F"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
    styles.color = "#8914A3"
  } else {
    timeOfDay = "night"
    styles.color = "#D90000"
  }
  return (<div className="App">
    <h1 style={styles}>Good {timeOfDay}!</h1>
    <p><DateTime></DateTime></p>
    </div>
   )
}

export default App
