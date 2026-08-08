import type { Account } from '../types';
import './AccountSummary.css';

interface Props {
  account: Account;
}

function formatCurrency(amount: number, currency: string): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

function formatAriaLabel(amount: number): string {
  const abs = Math.abs(amount);
  const dollars = Math.floor(abs);
  const cents = Math.round((abs - dollars) * 100);
  const prefix = amount >= 0 ? '' : 'minus ';
  return `${prefix}${dollars} dollars and ${cents} cents`;
}

export default function AccountSummary({ account }: Props) {
  return (
    <section className="account-summary">
      <div className="account-summary__top">
        <h2 className="account-summary__name">{account.name}</h2>
        <span className="account-summary__type">{account.type}</span>
      </div>
      <p className="account-summary__number">****{account.maskLastFour}</p>
      <p
        className="account-summary__balance"
        aria-label={`Current balance ${formatAriaLabel(account.balance)}`}
      >
        {formatCurrency(account.balance, account.currency)}
      </p>
    </section>
  );
}