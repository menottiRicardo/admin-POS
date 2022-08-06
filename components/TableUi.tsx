interface TableProps {
  full: boolean | null | undefined;
  number: number | null | undefined;
  onClick: () => void
}

const TableUi = ({ full, number, onClick }: TableProps) => {
  return (
    <div
      className={`w-20 h-20 ${
        full === true ? "bg-primary-400" : "bg-gray-200"
      } shadow-md rounded-md cursor-pointer`}
      onClick={onClick}
    >
      <p
        className={`flex items-center justify-center h-full ${
          full === true ? "text-white" : "text-gray-500"
        } font-medium text-2xl`}
      >
        {number}
      </p>
    </div>
  );
};

export default TableUi;
