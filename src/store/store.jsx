import { configureStore } from "@reduxjs/toolkit";
import countSlice from "../container/count/countSlice";

export const store = configureStore({
  reducer: { count: countSlice },
});
