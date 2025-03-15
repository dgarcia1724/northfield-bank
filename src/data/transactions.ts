export interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: number;
  account: string;
}

export const transactions: Transaction[] = [
  {
    id: 1,
    date: "2025-03-01",
    description: "Deposit",
    amount: 1000.0,
    account: "Checking",
  },
  {
    id: 2,
    date: "2025-03-05",
    description: "Grocery Store",
    amount: -50.0,
    account: "Checking",
  },
  {
    id: 3,
    date: "2025-03-07",
    description: "Utility Payment",
    amount: -200.0,
    account: "Checking",
  },
];
