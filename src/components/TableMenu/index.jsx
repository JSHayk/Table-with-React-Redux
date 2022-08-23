import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { searchPerson } from "../../slices/tableSlice"

const TableMenu = () => {
  const [val, setVal] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (val.trim()) {
      dispatch(searchPerson(val.toLowerCase()));
    }
  }, [val, dispatch]);

  const changeHandleInput = (event) => {
    const value = event.target.value;
    if (!value.match(/^\s*$/)) {
      setVal(value);
    }
  }

  return (
    <div className="table-menu">
      <section className='table-menu-search-container'>
        <input onChange={changeHandleInput} type="text" placeholder='Search Person with name' />
      </section>
    </div>
  )
}

export default TableMenu