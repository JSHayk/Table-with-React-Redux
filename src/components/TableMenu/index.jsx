import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchPerson } from "../../slices/tableSlice";

const TableMenu = () => {
  const [val, setVal] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchPerson(val.toLowerCase()));
  }, [val, dispatch]);

  const changeHandleInput = (event) => {
    const value = event.target.value;
    setVal(value);
  };

  return (
    <div className="table-menu">
      <section className="table-menu-search-container">
        <input
          onChange={changeHandleInput}
          type="text"
          placeholder="Search Person with name"
        />
      </section>
    </div>
  );
};

export default TableMenu;
