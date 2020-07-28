import React from 'react';

import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'

const App = () => (
  <div className="App" style={{backgroundColor: '#E8EAEE'}}>
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>
);

export default App;
