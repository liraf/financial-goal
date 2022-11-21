import React, { useState } from 'react';
import styles from './SavingGoal.module.scss';

import Card from '../../components/ui/Card/Card';
import buyHouse from '../../assets/buyHouse.svg';
import AmountInput from '../../components/AmountInput/AmountInput';
import ReachDateInput from '../../components/ReachDateInput/ReachDateInput';
import MonthlyAmount from '../../components/MonthlyAmount/MonthlyAmount';
import Button from '../../components/ui/Button/Button';

const SavingGoal = () => {
  const [reachDate, setReachDate] = useState('');
  const [amount, setAmount] = useState(0);

  const onAmountChange = (value: number) => {
    setAmount(value);
  };

  const onReachDateChange = (date: string) => {
    setReachDate(date);
  };

  return (
    <div className={styles.savingGoal}>
      <div className={styles.phrase}>
        Let&#39;s plan your <b>saving goal.</b>
      </div>

      <Card className={styles.savingCard}>
        <>
          <div className={styles.cardHeader}>
            <img className={styles.buyHouse} src={buyHouse} alt="Buy a house" />
            <div>
              <h1 className={styles.title}>Buy a house</h1>
              <h3 className={styles.subtitle}>Saving goal</h3>
            </div>
          </div>

          <div className={styles.amountInputContainer}>
            <AmountInput onChange={onAmountChange} />
          </div>
          <div className={styles.dateInputContainer}>
            <ReachDateInput onChange={onReachDateChange} />
          </div>

          <MonthlyAmount reachDate={reachDate} amount={amount} />

          <Button className={styles.confirmButton}>Confirm</Button>
        </>
      </Card>
    </div>
  );
};

export default SavingGoal;
