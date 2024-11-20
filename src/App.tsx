import React from 'react';
import Input from './components/Input';
import Todos from './components/Todos';
import { StyleForAllProject } from './components/styles/style';
import GlobalStyles from './components/styles/reset';
import { useAppSelector} from './hooks';
import Footer from './components/Footer';
const App = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  return (
    <div className="App">

      <GlobalStyles />
      <StyleForAllProject>
        <Input />
        <Todos />
        {todos.length > 0 ? <Footer /> : null}
      </StyleForAllProject>

    </div>
  );
}

export default App;
