import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        {/* Dashboard sidebar */}
        <div className="md:w-72 md:min-h-screen shadow-xl">
          <ul className="menu py-12 px-4">
            <li className="font-bold text-5xl flex text-[#333333]">
              Sedap <span className="text-[#00B074]">.</span>
            </li>
            <li className="mt-4 text-[18px] text-[#B9BBBD] font-medium">
              Modern Admin Dashboard
            </li>
            <li className="mt-20 flex gap-6 bg-[#00b07426] py-2 px-4 font-bold text-[#00B074] rounded-lg">
              <img src="/home.svg" alt="" />
              Dashboard
            </li>
            <li className="mt-3 flex gap-6 py-2 px-4 text-[18px] font-medium text-[#464255]">
              <img src="/line.svg" alt="" />
              Order List
            </li>
            <li className="mt-3 flex gap-6 py-2 px-4 text-[18px] font-medium text-[#464255]">
              <img src="/detail.svg" alt="" />
              Order Detail
            </li>
            <li className="mt-3 flex gap-6 py-2 px-4 text-[18px] font-medium text-[#464255]">
              <img src="/customer.svg" alt="" />
              Customer
            </li>
            <li className="mt-3 flex gap-6 py-2 px-4 text-[18px] font-medium text-[#464255]">
              <img src="/analytics.svg" alt="" />
              Analytics
            </li>
            <li className="mt-3 flex gap-6 py-2 px-4 text-[18px] font-medium text-[#464255]">
              <img src="/review.svg" alt="" />
              Reviews
            </li>
            <li className="mt-3 flex gap-6 py-2 px-4 text-[18px] font-medium text-[#464255]">
              <img src="/food.svg" alt="" />
              Foods
            </li>
            <li className="mt-3 flex gap-6 py-2 px-4 text-[18px] font-medium text-[#464255]">
              <img src="/foodDetail.svg" alt="" />
              Food Detail
            </li>
            <li className="mt-3 flex gap-6 py-2 px-4 text-[18px] font-medium text-[#464255]">
              <img src="/customerDetail.svg" alt="" />
              Customer Detail
            </li>
            <li className="mt-3 flex gap-6 py-2 px-4 text-[18px] font-medium text-[#464255]">
              <img src="/calender.svg" alt="" />
              Calender
            </li>
            <li className="mt-3 flex gap-6 py-2 px-4 text-[18px] font-medium text-[#464255]">
              <img src="/chat.svg" alt="" />
              Chat
            </li>
            <li className="mt-3 flex gap-6 py-2 px-4 text-[18px] font-medium text-[#464255]">
              <img src="/wallet.svg" alt="" />
              Wallet
            </li>
          </ul>
          <div className="flex gap-3 items-center mx-4 px-6 py-4 rounded-lg text-[12px] shadow-2xl bg-[#00B074]">
            <div>
              <p className="text-white">
                Please, organize your menus through button bellow!
              </p>
              <button className="mt-4 bg-white text-[15px] font-medium text-[#464255] border border-white p-2 rounded-lg">
                +Add Menus
              </button>
            </div>
            <div>
              <img src="/chef.svg" width={150} height={150} alt="" />
            </div>
          </div>
          <p className="mx-4 text-[13px] font-bold mt-14 text-[#969BA0]">
            Sedap Restaurant Admin Dashboard{" "}
            <span className="text-[12px] font-normal">© 2020 All Rights Reserved</span>
          </p>
          <p className="text-[#969BA0] mx-4 mt-4 text-[14px]">Made with <span className="text-red-600">♥</span> by Peterdraw</p>
        </div>
        <div className="md:p-8 p-2 flex-1">
          {/* Here will be the contents */}
        </div>
      </div>
    </>
  );
}

export default App;
