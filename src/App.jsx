import { useEffect, useState } from 'react';
import Relatorio from './components/Relatório';
import MainNavbar from './components/MainNavbar';

function App() {
  const [users, setUsers] = useState()

  useEffect(() => {
    loadUsers()
  }, []);

  const loadUsers = async () => {
    const response = await fetch('https://randomuser.me/api/?results=200')
    const data = await response.json()

    setUsers(data.results)
  }

  return (
    <>  
      <MainNavbar />
      <Relatorio data={users}/>
    </>
  )
}

export default App
