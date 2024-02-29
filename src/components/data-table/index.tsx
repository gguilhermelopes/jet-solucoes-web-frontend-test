import MainTitle from "./MainTitle";
import TableItems from "./TableItems";

const DataTable = () => {
  return (
    <section className="m-8 grid grid-cols-[287px_auto_auto_auto_91px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1)]; rounded-lg overflow-hidden">
      <MainTitle />
      <TableItems />
    </section>
  );
};

export default DataTable;
