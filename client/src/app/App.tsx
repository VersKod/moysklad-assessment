import React from 'react';
import { useData } from './hooks/useData';

function App(): React.JSX.Element {
  const userTodos = useData();

  console.log(userTodos);

  return <div>fdfdf</div>;
}

export default App;
