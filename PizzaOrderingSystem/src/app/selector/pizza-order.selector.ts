import { createSelector } from "@ngrx/store";
import { Pizza } from "../models/Pizza";

export const selectState = (state: Pizza[]) => state;
    
    export const selectList =
      createSelector(selectState , (state) =>
        state);