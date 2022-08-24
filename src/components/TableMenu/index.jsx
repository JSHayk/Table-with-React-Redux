import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchPerson, SortCancel, SortWith } from "../../slices/tableSlice";
import { TiArrowSortedUp, TiArrowSortedDown, TiCancel } from "react-icons/ti";
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
        <div onClick={() => dispatch(SortWith("up"))}>
          <TiArrowSortedUp />
        </div>
        <div onClick={() => dispatch(SortWith("down"))}>
          <TiArrowSortedDown />
        </div>
        <div>
          <AiOutlineMinus onClick={() => dispatch(SortCancel())} />
        </div>
      </section>
    </div>
  );
};

export default TableMenu;
