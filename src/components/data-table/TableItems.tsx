import TableItem from "./TableItem";

import { tableItemData } from "@/lib/table-item-data";

const TableItems = () => {
  return (
    <>
      {tableItemData.map((item) => (
        <TableItem key={item.id} {...item} />
      ))}
    </>
  );
};

export default TableItems;
