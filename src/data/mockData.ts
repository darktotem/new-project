import type { Account, Transaction } from '../types';

export const mockAccount: Account = {
  id: 'acc-001',
  name: 'Everyday Checking',
  type: 'Checking',
  accountNumber: '1234567890123456',
  maskLastFour: '3456',
  balance: 4523.40,
  currency: 'USD',
};

export const mockTransactions: Transaction[] = [
  {
    id: 'txn-001',
    date: '2025-03-15',
    description: 'Salary Deposit - Acme Corp',
    amount: 3200.00,
    runningBalance: 4523.40,
    category: 'Income',
  },
  {
    id: 'txn-002',
    date: '2025-03-14',
    description: 'Whole Foods Market',
    amount: -86.32,
    runningBalance: 1323.40,
    category: 'Groceries',
  },
  {
    id: 'txn-003',
    date: '2025-03-13',
    description: 'Uber Ride',
    amount: -24.50,
    runningBalance: 1409.72,
    category: 'Transport',
  },
  {
    id: 'txn-004',
    date: '2025-03-12',
    description: 'Amazon.com',
    amount: -49.99,
    runningBalance: 1434.22,
    category: 'Shopping',
  },
  {
    id: 'txn-005',
    date: '2025-03-11',
    description: 'Starbucks Coffee',
    amount: -5.75,
    runningBalance: 1484.21,
    category: 'Food & Drink',
  },
  {
    id: 'txn-006',
    date: '2025-03-10',
    description: 'Netflix Subscription',
    amount: -15.99,
    runningBalance: 1489.96,
    category: 'Entertainment',
  },
  {
    id: 'txn-007',
    date: '2025-03-08',
    description: 'Transfer from Savings',
    amount: 500.00,
    runningBalance: 1505.95,
    category: 'Transfer',
  },
  {
    id: 'txn-008',
    date: '2025-03-07',
    description: 'Shell Gas Station',
    amount: -45.00,
    runningBalance: 1005.95,
    category: 'Transport',
  },
];