import { Button } from "@ds.e/react/lib";

function App() {
  return (
    <div>
      <h1>hello monorepo</h1>
      <Button title="this is a button" onClick={() => alert("hello world!")}>
        Click You
      </Button>
    </div>
  );
}

export default App;
