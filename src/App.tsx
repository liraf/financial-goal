import React from 'react';
import styles from './App.module.scss';

import Header from './components/Header/Header';
import SavingGoal from './pages/SavingGoal/SavingGoal';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <SavingGoal />
    </div>
  );
};

export default App;
