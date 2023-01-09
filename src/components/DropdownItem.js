import './dropdownItem.css'

function DropdownItem(props){
    return(
        <li className="dropdownItem">
        <span> {props.text} </span>
        </li>
    );
}

export default DropdownItem;