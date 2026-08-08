import Header from './Header';
import AccountSummary from './AccountSummary';
import TransactionList from './TransactionList';
import { mockAccount, mockTransactions } from '../data/mockData';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <main className="dashboard">
      <Header />
      <div className="dashboard__content">
        <AccountSummary account={mockAccount} />
        <TransactionList transactions={mockTransactions} />
      </div>
    </main>
  );
}