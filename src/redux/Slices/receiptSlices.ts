import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  accounts:[
    {
      id: "1",
      invoice: "INV-001",
      customerName: "John Doe",
      amount: "$100.00",
      status: "Paid",
      date: "2024-01-15",
    },
    {
      id: "2",
      invoice: "INV-002",
      customerName: "Jane Smith",
      amount: "$250.00",
      status: "Unpaid",
      date: "2024-02-12",
    },
    {
      id: "3",
      invoice: "INV-003",
      customerName: "Alice Johnson",
      amount: "$75.00",
      status: "Overdue",
      date: "2024-03-09",
    },
    {
      id: "4",
      invoice: "INV-004",
      customerName: "Bob Brown",
      amount: "$180.00",
      status: "Paid",
      date: "2024-04-11",
    },
    {
      id: "5",
      invoice: "INV-005",
      customerName: "Charlie Green",
      amount: "$600.00",
      status: "Unpaid",
      date: "2024-05-05",
    },
  ]
}

const labelSlice = createSlice({
  name:'label',
  initialState,
  reducers:{
    updateAccount:(state , action)=>{
      const {id , updatedData} = action.payload;
      const index = state.accounts.findIndex(account => account.id === id);
      if(index !==-1){
        state.accounts[index] = {...state.accounts[index], ...updatedData}
      }
    },
    deleteAccount:(state , action)=>{
      const id = action.payload;
      state.accounts = state.accounts.filter(account => account.id !==id);
    }
  }
}
)

export const {updateAccount , deleteAccount} = labelSlice.actions
export default labelSlice.reducer