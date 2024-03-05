import { createSlice } from "@reduxjs/toolkit";
import { State } from "../model";
import { UI } from "../model/ui";

type SliceState = UI;
const initialState: SliceState = {
    userName: null,
    page: '',
    tab: 'Explore',
    isLoggedIn: false,
    isBottomPlayerVisible: false,
}

export const ui = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setUserName(state, action) {
            state.userName = action.payload;
        },
        setPage(state, action) {
            state.page = action.payload;
        },
        setTab(state, action) {
            state.tab = action.payload;
        },
        setIsLoggedIn(state, action) {
            state.isLoggedIn = action.payload
        },
        toggleBottomPlayerVisibility(state) {
            state.isBottomPlayerVisible = !state.isBottomPlayerVisible;
        }
    }
});

export const { setUserName, setPage, setTab, setIsLoggedIn, toggleBottomPlayerVisibility } = ui.actions;

// The function below is called a selector. It selects the value of the `greeting` key from the state.
// Selectors can also be used to select nested values using dot notation.
export const selectUserName = (state:State) => state.ui.userName;
export const selectPage = (state:State) => state.ui.page;
export const selectTab = (state:State) => state.ui.tab;
export const selectIsLoggedIn = (state:State) => state.ui.isLoggedIn;
export const selectIsBottomPlayerVisible = (state:State) => state.ui.isBottomPlayerVisible;