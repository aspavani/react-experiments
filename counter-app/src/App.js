import Counter from './Counter';
function App() {
  return (
    <>
      <h1> Counter Component 1 </h1>
      <Counter initialCount={5} > </Counter>
      <h1><br /> Counter Component 2</h1>
      <Counter initialCount={6} > </Counter>
    </>
  );
    
}

export default App;
