import './Components/InputFields'
import InputFields from './Components/InputFields';
import Header from './Components/Header';
import ExpenseDisplay from './Components/ExpenseDisplay';

function App() {
  return (
    <div className="App">
        <Header />
        <InputFields />
        <ExpenseDisplay />
    </div>
  );
}

export default App;
