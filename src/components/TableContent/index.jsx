import { useSelector, useDispatch } from "react-redux"
import { deletePerson } from "../../slices/tableSlice";
import { MdDelete } from "react-icons/md"

const TableContent = () => {
  const {persons} = useSelector(state => state.table);
  const dispatch = useDispatch();

    return (
        <div className='table-content'>
            <ul className="table-content-titles">
                <li>ID</li>
                <li>Name</li>
                <li>City</li>
                <li>Company Name</li>
                <li>Phone</li>
            </ul>
            <ul className="table-content-persons">
                {
                    persons.map(item => {
                        const { id, name, address, company, phone } = item;
                        const { city } = address;
                        return (
                            <section key={ id }>
                                <li>{ id }</li>
                                <li>{ name }</li>
                                <li>{ city }</li>
                                <li>{ company.name }</li>
                                <li>{ phone }</li>
                                <li onClick={() => dispatch(deletePerson(id))} className="person-delete"><MdDelete /></li>
                            </section> 
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default TableContent