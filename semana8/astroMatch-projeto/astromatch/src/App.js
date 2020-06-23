import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import axios from 'axios'
import MatchesPage from './components/MatchesPage';
import HomePage from './components/HomePage'


function App() {
  const [currentPage, setCurrentPage] = useState('showPage')

  const changePage = () => {
   if (currentPage === 'showPage') {
    setCurrentPage(MatchesPage)  
  } else {
      setCurrentPage('showPage')

  }}
  return (
    <div>
      
      {currentPage !== 'showPage' ? <HomePage /> : <MatchesPage /> }
    </div>
  );
  
}
export default App;
