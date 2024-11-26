import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        {/* Dashboard sidebar */}
        <div className="md:w-64 md:min-h-screen shadow-xl">
          <ul className="menu py-12 px-4">
            <li className="font-bold text-5xl flex text-[#333333]">
              Sedap <span className="text-[#00B074]">.</span>
            </li>
            <li className="mt-4 text-[18px] text-[#B9BBBD] font-medium">
              Modern Admin Dashboard
            </li>
            <li className="mt-20">Dashboard</li>
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
