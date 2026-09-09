import type { Transaction } from '../types';
import './TransactionItem.css';

interface Props {
  transaction: Transaction;
}

function formatDate(dateStr: string): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(dateStr));
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'KES',
  }).format(Math.abs(amount));
}

export default function TransactionItem({ transaction }: Props) {
  const isCredit = transaction.amount >= 0;
  const sign = isCredit ? '+' : '−';
  const amountType = isCredit ? 'credit' : 'debit';

  return (
    <li
      className="transaction-item"
      data-amount-type={amountType}
      aria-label={`Transaction: ${transaction.description}, ${sign}${formatCurrency(transaction.amount)}`}
    >
      <div className="transaction-item__left">
        <span className="transaction-item__date">
          {formatDate(transaction.date)}
        </span>
        <span className="transaction-item__description">
          {transaction.description}
        </span>
      </div>
      <div className="transaction-item__right">
        <span className={`transaction-item__amount transaction-item__amount--${amountType}`}>
          {sign}{formatCurrency(transaction.amount)}
        </span>
        <span className="transaction-item__running-balance">
          {formatCurrency(transaction.runningBalance)}
        </span>
      </div>
    </li>
  );
}