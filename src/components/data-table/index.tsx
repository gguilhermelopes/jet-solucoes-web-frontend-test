import MainTitle from "./MainTitle";
import TableItems from "./TableItems";
import MobileDataTable from "./mobile";

const DataTable = () => {
  return (
    <>
      <section className="m-8 hidden md:grid grid-cols-[287px_auto_auto_auto_91px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1)]; rounded-lg overflow-hidden ">
        <MainTitle />
        <TableItems />
      </section>
      <section className="m-4 md:hidden">
        <MobileDataTable />
      </section>
    </>
  );
};

export default DataTable;
