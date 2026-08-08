import type { Transaction } from '../types';
import TransactionItem from './TransactionItem';
import './TransactionList.css';

interface Props {
  transactions: Transaction[];
}

export default function TransactionList({ transactions }: Props) {
  return (
    <section className="transaction-list">
      <h2 className="transaction-list__heading">Recent Transactions</h2>
      {transactions.length === 0 ? (
        <p className="transaction-list__empty">No transactions yet.</p>
      ) : (
        <ul className="transaction-list__items">
          {transactions.map((txn) => (
            <TransactionItem key={txn.id} transaction={txn} />
          ))}
        </ul>
      )}
    </section>
  );
}