import React from "react";

const Home = () => {
  return (
    <div className=" flex justify-center items-center h-[100vh]">
      <div
        id="mega-menu-full-dropdown"
        className="mt-1 md:w-[80%] border-gray-200 shadow-sm bg-[#78e1f9]   border-y dark:bg-gray-800 dark:border-gray-600"
      >
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
          <ul>
            <li className=" bg-yellow-500 text-white  rounded-lg mr-4">
              <a
                href="#"
                className="block p-3 rounded-lg boder-1 border-solid border-blue-950 hover:bg-green-600 dark:hover:bg-gray-700"
              >
                <div className="font-semibold ">Online Stores</div>
                <span className="text-sm text-white  ">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
            <li className=" bg-red-500 rounded-lg mt-4 text-white mr-4">
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-yellow-600 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Segmentation</div>
                <span className="text-sm  dark:text-gray-400">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
            <li className=" bg-green-600 rounded-lg mt-4 text-white mr-4">
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-yellow-500 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Marketing CRM</div>
                <span className="text-sm text-white dark:text-gray-400">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
          </ul>
          <ul>
            <li className=" bg-green-600 rounded-lg text-white mb-4">
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-yellow-500 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Marketing CRM</div>
                <span className="text-sm text-white dark:text-gray-400">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
            <li className=" bg-blue-500 rounded-lg">
              <a
                href="#"
                className="block p-3 rounded-lg boder-1 border-solid border-blue-950 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Online Stores</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
            <li className=" bg-red-500 rounded-lg mt-4 text-white">
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-yellow-600 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Segmentation</div>
                <span className="text-sm  dark:text-gray-400">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
