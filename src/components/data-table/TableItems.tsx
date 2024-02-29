import TableItem from "./TableItem";

import { tableItemData } from "@/lib/table-item-data";

const TableItems = () => {
  return (
    <>
      {tableItemData.map((item, index) => (
        <TableItem
          key={item.id}
          isLast={index === tableItemData.length - 1}
          {...item}
        />
      ))}
    </>
  );
};

export default TableItems;
