import { useEffect } from 'react';
import './App.css';

const dirtyThings = ["LARVA", "MAGIA RITUAL", "BLOQUEO ENERGÉTICO", "ALMA PERDIDA"];

function App() {
  useEffect(() => {
    const planeContainer = document.getElementById("plane-container");
    const larvaAmount = Math.floor(Math.random() * 3) + 3 ;
    for(let i = 0; i < larvaAmount; i++) {
      const x = Math.floor(Math.random() *700) + 150
      const y = Math.floor(Math.random() * 700) + 150
      const larvaDiv = document.createElement("div");
      const dirtyThingIndex = Math.floor(Math.random()* dirtyThings.length)
      larvaDiv.innerText = dirtyThings[dirtyThingIndex] || "LARVA";
      larvaDiv.className ="larva";
      larvaDiv.style = `position: absolute; left:${x}px; top:${y}px; background-color:#ECFF33; font-size: 15px; padding: 10px;cursor: pointer`;
      planeContainer.appendChild(larvaDiv)
      larvaDiv.onclick = () => {
        larvaDiv.remove();
        if(!document.getElementsByClassName("larva").length) {
          alert("No te preocupes que la casa ya quedó limpia");
        }
      }

    }
  })
  return (
    <div className="App">
      <div id="plane-container" className='plane-container' >
        <img width={"100%"} height={"100%"} src="https://wpmedia.roomsketcher.com/content/uploads/2022/01/05101816/RoomSketcher-Custom-2D-Floor-Plan-Branding.jpg" alt="House plane"></img>
      </div>
    </div>
  );
}

export default App;
