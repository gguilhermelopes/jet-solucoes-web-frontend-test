import Image from "next/image";

import DotsVertical from "@/components/UI/DotsVertical";

type TableItemProps = {
  imageURL: string;
  label: string;
  reservation: string;
  isAvailable: boolean;
  rating: number;
};

const TableItem = ({
  imageURL,
  label,
  reservation,
  isAvailable,
  rating,
}: TableItemProps) => {
  return (
    <>
      <div className="flex items-center gap-2 px-4 border-b border-l border-gray-200">
        <Image
          src={imageURL}
          alt={`${label} image`}
          width={48.96}
          height={46}
        />
        <span>{label}</span>
      </div>
      <div className="flex items-center gap-2 p-4 border-b border-gray-200">
        <span>{reservation}</span>
      </div>
      <div className="flex items-center gap-2 px-4 border-b border-gray-200">
        <span>{isAvailable ? "Available" : "Not available"}</span>
      </div>
      <div className="flex items-center gap-2 px-4 border-b border-gray-200">
        <span>{rating} stars</span>
      </div>
      <div className="flex justify-center items-center gap-2 px-4 border-b border-r border-gray-200">
        <DotsVertical />
      </div>
    </>
  );
};

export default TableItem;
