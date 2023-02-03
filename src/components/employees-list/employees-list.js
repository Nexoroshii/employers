import EmployersListItem from "../employees-list-item/employees-list-item.js"
import "./employees-list.css"


const EmployersList = () => {
    return (
        <ul className="app-list list-group">
            <EmployersListItem/>
            <EmployersListItem/>
            <EmployersListItem/>

        </ul>
    )
}

export default EmployersList;