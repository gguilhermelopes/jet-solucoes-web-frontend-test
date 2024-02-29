import Image from "next/image";

import DotsVertical from "@/components/UI/DotsVertical";
import AvailableBadge from "@/components/UI/AvailableBadge";
import Rating from "../UI/Rating";

export type TableItemProps = {
  imageURL: string;
  label: string;
  reservation: string;
  isAvailable: boolean;
  rating: number;
  isLast: boolean;
};

const TableItem = ({
  imageURL,
  label,
  reservation,
  isAvailable,
  rating,
  isLast,
}: TableItemProps) => {
  return (
    <>
      <div
        className={`flex items-center gap-2 px-4 ${
          isLast ? "rounded-es-lg" : "border-b"
        } border-l border-gray-200`}
      >
        <Image
          src={imageURL}
          alt={`${label} image`}
          width={48.96}
          height={46}
        />
        <span className="text-gray-900">{label}</span>
      </div>
      <div
        className={`flex items-center gap-2 p-4 ${
          isLast ? "" : "border-b"
        } border-gray-200`}
      >
        <span className="text-gray-500">{reservation}</span>
      </div>
      <div
        className={`flex items-center gap-2 px-4 ${
          isLast ? "" : "border-b"
        } border-gray-200`}
      >
        <span>{isAvailable ? <AvailableBadge /> : "Not available"}</span>
      </div>
      <div
        className={`flex items-center gap-2 px-4 ${
          isLast ? "" : "border-b"
        } border-gray-200`}
      >
        <Rating rating={rating} />
      </div>
      <div
        className={`flex justify-center items-center gap-2 px-4 ${
          isLast ? "rounded-ee-lg" : "border-b"
        } border-gray-200`}
      >
        <DotsVertical />
      </div>
    </>
  );
};

export default TableItem;
