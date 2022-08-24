import { createSlice } from "@reduxjs/toolkit";
import { deleteItem } from "../utils/helpers/deleteItem";
import { searchItem } from "../utils/helpers/searchItem";
import { sortItem } from "../utils/helpers/sortItem";

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
    deletePerson(state, { payload }) {
      state.persons = deleteItem(state.persons, payload);
      state.personsClone = deleteItem(state.personsClone, payload);
      state.personsSortClone = deleteItem(state.personsSortClone, payload);
    },
    searchPerson(state, { payload }) {
      state.persons = searchItem(state.personsClone, payload);
      state.personsSortClone = searchItem(state.personsClone, payload);
    },
    sortWith(state, { payload }) {
      state.persons = sortItem(state.persons, payload);
    },
    sortCancel(state) {
      state.persons = state.personsSortClone;
    },
  },
});

export const { setData, deletePerson, searchPerson, sortWith, sortCancel } =
  tableSlice.actions;
export default tableSlice.reducer;
