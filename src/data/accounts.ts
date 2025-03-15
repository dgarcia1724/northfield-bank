export interface Account {
  id: number;
  type: string;
  balance: number;
}

export const accounts: Account[] = [
  { id: 1, type: "Checking", balance: 5000.0 },
  { id: 2, type: "Savings", balance: 20000.0 },
];
