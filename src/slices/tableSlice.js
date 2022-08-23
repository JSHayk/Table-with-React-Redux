import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    persons: [],
    personsClone: [],
    isLoad: true
}

const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
        setData(state, { payload }) {
            state.isLoad = false
            state.persons = payload
            state.personsClone = payload
        },
        deletePerson(state, { payload }) {
            const deletedData = state.persons.filter(item => item.id !== payload);
            state.persons = deletedData
            state.personsClone = deletedData
        },
        searchPerson(state, { payload }) {
            const searchedData = state.personsClone.filter(item => item.name.toLowerCase().includes(payload));
            state.persons = searchedData
        }
    }
});

export const { setData, deletePerson, searchPerson } = tableSlice.actions
export default tableSlice.reducer