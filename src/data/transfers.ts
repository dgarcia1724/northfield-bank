export interface Transfer {
  id: number;
  fromAccount: string;
  toAccount: string;
  amount: number;
  date: string;
  status: "Pending" | "Completed" | "Failed";
}

export const transfers: Transfer[] = [
  {
    id: 1,
    fromAccount: "Checking",
    toAccount: "Savings",
    amount: 1000.0,
    date: "2025-03-02",
    status: "Completed",
  },
  {
    id: 2,
    fromAccount: "Savings",
    toAccount: "Checking",
    amount: 500.0,
    date: "2025-03-04",
    status: "Completed",
  },
];
