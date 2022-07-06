import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const planeContainer = document.getElementById("plane-container");
    const larvaAmount = Math.floor(Math.random() * 15) +8 ;
    for(let i = 0; i <= larvaAmount; i++) {
      const x = Math.floor(Math.random() * 1000)+500;
      const y = Math.floor(Math.random() * 1000)+200;
      const larvaDiv = document.createElement("div");
      larvaDiv.innerText = "LARVA"
      larvaDiv.style = `position: absolute; left:${x}px; top:${y}px; background-color:#ECFF33; font-size: 40px; padding: 10px;cursor: pointer`;
      planeContainer.appendChild(larvaDiv)
      larvaDiv.onclick = () => {
        larvaDiv.remove();
      }

    }
  })
  return (
    <div className="App">
      <div id="plane-container" className='plane-container'>
        <img width={"100%"} height={"100%"} src="https://wpmedia.roomsketcher.com/content/uploads/2022/01/05101816/RoomSketcher-Custom-2D-Floor-Plan-Branding.jpg"></img>
      </div>
    </div>
  );
}

export default App;
