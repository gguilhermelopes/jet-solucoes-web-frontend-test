import { tableItemData } from "@/lib/table-item-data";
import MobileDataTableItem from "./MobileDataTableItem";

const MobileDataTable = () => {
  return (
    <>
      {tableItemData.map((item) => (
        <MobileDataTableItem key={item.id} {...item} />
      ))}
    </>
  );
};

export default MobileDataTable;
