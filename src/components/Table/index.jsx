import "./index.scss"
import TableContent from "../TableContent"
import TableMenu from "../TableMenu"
import Loader from "../../common/Loader";
import LoaderGif from "../../assets/gifs/loader2.gif"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setData } from "../../slices/tableSlice";
import axios from "axios";

const Table = () => {
  const isLoad = useSelector(state => state.table.isLoad);
  const dispatch = useDispatch();

  useEffect(() => {
    const getReq = async () => {
        const url = "https://jsonplaceholder.typicode.com/users"
        const data = await axios.get(url);
        dispatch(setData(data.data));
    } 
    getReq();
  }, [dispatch]);

  return (
    <div className="table">
      {
        isLoad ? <Loader src={ LoaderGif } alt="loader" /> : 
        <>
        <TableMenu />
        <TableContent />
        </>
      }
    </div>
  )
}

export default Table