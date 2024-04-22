import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Fun weather app</h1>
        <form >
          <select >
            <option>Dropdown</option>
            <option value="India">India</option>
            <option value="Spain">Spain</option>
            <option value="Denmark">Denmark</option>
          </select>
          <select >
            <option>Dropdown</option>
            <option value="City01">City01</option>
            <option value="City02">City02</option>
            <option value="City03">City03</option>
          </select>
          <button >Submit</button>
        </form>
    </div>
  );
}

export default App;
