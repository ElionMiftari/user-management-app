import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    setUsers: (state, action) => action.payload,
    addUser: (state, action) => [action.payload, ...state],
    deleteUser: (state, action) => state.filter(u => u.id !== action.payload),
    updateUser: (state, action) => {
      return state.map(u =>
        u.id === action.payload.id ? { ...u, ...action.payload } : u
      );
    },
  },
});

export const { setUsers, addUser, deleteUser, updateUser } = usersSlice.actions;
export default usersSlice.reducer;
