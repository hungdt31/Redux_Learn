import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: 'posts',
    initialState: [
        {
            id: '1', title: 'First Post!', content: 'Hello!'
        },
        {
            id: '2', title: 'Second Post', content: 'More text'
        }
    ],
    reducers:{}
})
export default postSlice.reducer