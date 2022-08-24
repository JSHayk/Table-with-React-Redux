import { createSlice } from "@reduxjs/toolkit";
import { useDelete } from "../utils/hooks/useDelete";
import { useSort } from "../utils/hooks/useSort";

const initialState = {
  persons: [],
  personsClone: [],
  personsSortClone: [],
  isLoad: true,
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setData(state, { payload }) {
      state.isLoad = false;
      state.persons = payload;
      state.personsClone = payload;
      state.personsSortClone = payload;
    },
    DeletePerson(state, { payload }) {
      state.persons = useDelete(state.persons, payload);
      state.personsClone = useDelete(state.personsClone, payload);
      state.personsSortClone = useDelete(state.personsSortClone, payload);
    },
    searchPerson(state, { payload }) {
      const searchedData = state.personsClone.filter((item) =>
        item.name.toLowerCase().includes(payload)
      );
      state.persons = searchedData;
      state.personsSortClone = searchedData;
    },
    SortWith(state, { payload }) {
      state.persons = useSort(state.persons, payload);
    },
    SortCancel(state) {
      state.persons = state.personsSortClone;
    },
  },
});

export const { setData, DeletePerson, searchPerson, SortWith, SortCancel } =
  tableSlice.actions;
export default tableSlice.reducer;
