import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';

// Define a type for the slice state

interface SelectDetail {
  color: string;
  id: string;
  name: string;
}

interface Select {
  id: string;
  select: SelectDetail;
  type: string;
}

interface RichTextDetail {
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underlind: boolean;
    code: boolean;
    color: string;
  };
  href: string;
  plain_text: string;
  text: {
    content: string;
    link: {
      type: string;
    };
  };
  type: string;
}

interface RichText {
  id: string;
  rich_text: RichTextDetail;
  type: string;
}

interface DestinationData {
  day: Select;
  description: RichText;
  googleMap: {
    id: string;
    type: string;
    url: string;
  };
  image: RichText;
  name: {
    id: string;
    title: RichText;
    type: string;
  };
  pass: Select;
  memo: RichText;
  region: Select;
  worktime: RichText;
}

interface DestinationState {
  destinationData: DestinationData[];
}

// Define the initial state using that type
const initialState: DestinationState = {
  destinationData: [],
};

export const destinationSlice = createSlice({
  name: 'destination',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setDestinationData: (state, action) => {
      state.destinationData = action.payload;
    },
  },
});

export const {setDestinationData} = destinationSlice.actions;

// export const selectCount = (state: RootState) => state.destination.value;

export default destinationSlice.reducer;
