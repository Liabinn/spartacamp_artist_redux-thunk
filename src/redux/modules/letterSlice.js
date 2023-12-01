import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid"

const initialState = [
  {
    id: uuidv4(),
    member: "수현",
    nickname: "Dr. Clint Christiansen",
    contents: "수현 좋아요 Vitae recusandae tenetur debitis impedit ut dolorem atque reprehenderit magnam. Cum dolor magnam commodi qui perferendis. Vel temporibus soluta. Eum delectus blanditiis. Neque dicta non quod ex. Maiores aspernatur fuga reprehenderit a magni eaque fuga voluptatum hic."
  },
  {
    id: uuidv4(),
    member: "찬혁",
    nickname: "Chad Graham",
    contents: "찬혁 좋아요 Ipsam aspernatur nostrum eos unde velit molestiae dolorem. Tenetur ullam nostrum pariatur. Et in eos. Harum commodi ipsa quaerat aspernatur quod dignissimos quae quidem sapiente."
  },
  {
    id: uuidv4(),
    member: "수현",
    nickname: "Tommy Abshire",
    contents: "수현 좋아요 Itaque nihil quae neque itaque. Non a officiis ducimus nemo consectetur. Ducimus libero voluptatum consequuntur."
  },
]

const letterSlice = createSlice({
  name: 'letters',
  initialState,
  reducers: {
    addCard: (state, action) => {
      return [action.payload, ...state]
    },
    deleteCard: (state, action) => {
      return state.filter((item) => item.id !== action.payload)
    },
    editeCard: (state, action) => {
      const {id, editedContents} = action.payload;
      return state.map((item) => {
        if (item.id === id) {
          return {...item, contents: editedContents};
        }
        return item
      })
    },
  }
});

export default letterSlice.reducer;
export const {addCard, deleteCard, editeCard} = letterSlice.actions;