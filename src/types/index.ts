export interface Account {
  id: string;
  name: string;
  type: 'Checking' | 'Savings' | 'Credit Card';
  accountNumber: string;
  maskLastFour: string;
  balance: number;
  currency: string;
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  runningBalance: number;
  category?: string;
}