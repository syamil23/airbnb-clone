import './Location.css'
import { IoSearchCircleSharp } from "react-icons/io5";

function Location() {
  return (
    <container>
    <div className="locationBar">
    <button className='anyWhere'><span>Anywhere</span><span className="vertical"/></button>
    <button className='anyWeeks'><span>Any week</span></button><span className="vertical"/>
    <button className='addGuest'><span>Add guests</span></button><button className="icon"><IoSearchCircleSharp size={40} style={{ fill: '#ff385c' }} /></button></div>
    </container>
  )
}

export default Location;

