import './App.css';
import { AppContext } from './Hooks/HookUseContext/contexts/AppContext';
import { Div } from './Hooks/HookUseContext/Components/Div';

function App() {
  return (
    <AppContext>
      <Div />
    </AppContext>
  );
}

export default App;
