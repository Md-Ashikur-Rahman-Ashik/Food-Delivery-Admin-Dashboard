import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        {/* Dashboard sidebar */}
        <div className="md:w-64 md:min-h-screen bg-green-50">
          <ul className="menu p-12">
            <li>Home</li>
          </ul>
        </div>
        <div className="md:p-8 p-2 flex-1">
          {/* Here will be the contents */}
        </div>
      </div>
    </>
  );
}

export default App;
