import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  analytics: {
    spending: '12h',
    spend: 127,
    orderSize: 18,
    items: 2300,
  },
  sales: {
    averageDaily: 28450,
    overview: 42500,
    orderRate: 62.2,
    visitRate: 25.5,
  },
  support: {
    totalTickets: 164,
    newTickets: 142,
    openTickets: 28,
    responseTime: '1 Day',
    completedTasks: 85,
  },
  earnings: {
    weekly: 468,
    earnings: 545.69,
    profit: 256.34,
    expense: 74.19,
  },
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
});

export const {} = dashboardSlice.actions;
export default dashboardSlice.reducer;
