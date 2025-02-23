import React from 'react';
import { useData } from './hooks/useData';
import TableLineComponent from '../components/TableLineComponent/TableLineComponent';

function App(): React.JSX.Element {
  const userTodos = useData();

  return (
    <main className='main'>
      <h1 className='header'>User To-Do Table</h1>
      <p className='paragraph'>User task table for effective planning.</p>
      <section className='table'>
        <header className='header1'>#</header>
        <header className='header2'>Username</header>
        <header className='header3'>To-Do Count</header>
        {userTodos.map((userTodo) => (
          <TableLineComponent key={userTodo.id} userTodo={userTodo} />
        ))}
      </section>
    </main>
  );
}

export default App;
