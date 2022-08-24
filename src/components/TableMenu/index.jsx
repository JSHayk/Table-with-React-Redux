import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchPerson, sortCancel, sortWith } from "../../slices/tableSlice";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { AiOutlineMinus } from "react-icons/ai";

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
      <section className="table-menu-sort-container">
        <div onClick={() => dispatch(sortWith("up"))}>
          <TiArrowSortedUp />
        </div>
        <div onClick={() => dispatch(sortWith("down"))}>
          <TiArrowSortedDown />
        </div>
        <div>
          <AiOutlineMinus onClick={() => dispatch(sortCancel())} />
        </div>
      </section>
    </div>
  );
};

export default TableMenu;
