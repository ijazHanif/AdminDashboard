import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accounts: [
    {
      id: "1",
      nickname: "Personal Account",
      accountNumber: "123456789",
      accountTitle: "John Doe",
      purpose: "Personal savings",
    },
    {
      id: "2",
      nickname: "Business Account",
      accountNumber: "987654321",
      accountTitle: "Jane Smith",
      purpose: "Business expenses",
    },
    {
      id: "3",
      nickname: "Vacation Fund",
      accountNumber: "456789123",
      accountTitle: "Alice Johnson",
      purpose: "Vacation savings",
    },
    {
      id: "4",
      nickname: "Emergency Fund",
      accountNumber: "234567891",
      accountTitle: "Bob Brown",
      purpose: "Emergency use",
    },
    {
      id: "5",
      nickname: "Investment Account",
      accountNumber: "678912345",
      accountTitle: "Charlie Green",
      purpose: "Investments",
    },
    {
      id: "6",
      nickname: "Health Account",
      accountNumber: "66554433",
      accountTitle: "Charlie Green",
      purpose: "Health",
    },
  ],
};

const bankSlice = createSlice({
  name: 'bank',
  initialState,
  reducers: {
    addAccount: (state, action) => {
      const newAccount = action.payload;
      state.accounts.push(newAccount);
    },
    updateAccount: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.accounts.findIndex(account => account.id === id);
      if (index !== -1) {
        state.accounts[index] = { ...state.accounts[index], ...updatedData };
      }
    },
    deleteAccount: (state, action) => {
      const id = action.payload;
      state.accounts = state.accounts.filter(account => account.id !== id);
    },
  },
});

export const {addAccount, updateAccount, deleteAccount } = bankSlice.actions;
export default bankSlice.reducer;
