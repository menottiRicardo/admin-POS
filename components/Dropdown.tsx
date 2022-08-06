import { Dispatch, SetStateAction, useState } from "react";

const Dropdown = ({
  title,
  options,
  setSelected,
}: {
  title: string;
  options: any[];
  setSelected: Dispatch<SetStateAction<any>>;
}) => {
  const [show, setShow] = useState(false);

  const handleSelection = (option: any) => {
    setShow(false);
    setSelected(option);
  };
  return (
    <div className="relative inline-block text-left grid-cols-4 col-span-4 py-4 w-full">
      <div>
        <button
          type="button"
          className="flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-3 bg-white font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 items-center"
          id="menu-button"
          onClick={() => setShow(!show)}
        >
          {title}

          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {show && (
        <div className="absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1 grid grid-cols-3 px-2 gap-2">
            {options &&
              options.map((option) => (
                <p
                  className="text-gray-700 block px-4 py-2 text-lg rounded-full"
                  key={option.id}
                  onClick={() => handleSelection(option)}
                >
                  {option.name}
                </p>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
