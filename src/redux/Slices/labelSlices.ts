import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  accounts:[
    {
      id:'1',
      labelName: "Priority",
      description: "For high-priority items",
      color: "Red",
      dateCreated: "2024-01-12",
      lastModified: "2024-01-20",
    },
    {
      id:'2',
      labelName: "VIP Customer",
      description: "Customers with VIP status",
      color: "Gold",
      dateCreated: "2024-02-10",
      lastModified: "2024-02-15",
    },
    {
      id:'3',
      labelName: "Internal Use",
      description: "Labels for internal use",
      color: "Gray",
      dateCreated: "2024-03-05",
      lastModified: "2024-03-10",
    },
    {
      id:'2',
      labelName: "VIP Customer",
      description: "Customers with VIP status",
      color: "Gold",
      dateCreated: "2024-02-10",
      lastModified: "2024-02-15",
    },
    {
      id:'3',
      labelName: "Internal Use",
      description: "Labels for internal use",
      color: "Gray",
      dateCreated: "2024-03-05",
      lastModified: "2024-03-10",
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
      console.log('slices  id of the deleted data in table:',id)
      state.accounts = state.accounts.filter(account => account.id !==id);
    }
  }
}
)

export const {updateAccount , deleteAccount} = labelSlice.actions
export default labelSlice.reducer