import { configureStore } from "@reduxjs/toolkit";
import { ui } from './reducers/ui';

const store = configureStore({
    reducer: {
        ui: ui.reducer
    }
});

export type AppDispatch = typeof store.dispatch;

export default store;