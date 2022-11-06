import { configureStore, createSlice } from '@reduxjs/toolkit';
import adsList from './db/ad_list.json';

const ads = createSlice({
  name: 'adsReducer',
  initialState: adsList.ads,
  reducers: {
    editAd: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

const store = configureStore({ reducer: ads.reducer });

export const { getAdList, getAdStatus, editAd } = ads.actions;

export default store;
