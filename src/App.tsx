import React from 'react';
import './App.scss';

import Header from './components/Header/Header';
import SavingGoal from './pages/SavingGoal/SavingGoal';

const App = () => {
  return (
    <div className="App">
      <Header />
      <SavingGoal />
    </div>
  );
};

export default App;
