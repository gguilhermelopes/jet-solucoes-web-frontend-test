import Image from "next/image";
import { TableItemProps } from "../TableItem";
import IndicatorAvailable from "@/components/UI/mobile/IndicatorAvailable";
import Rating from "@/components/UI/Rating";
import DotsVertical from "@/components/UI/DotsVertical";

type MobileDataTableItemProps = Omit<TableItemProps, "isLast">;

const MobileDataTableItem = ({
  imageURL,
  label,
  reservation,
  isAvailable,
  rating,
}: MobileDataTableItemProps) => {
  return (
    <div className="relative flex gap-5 py-2 border-b border-gray-200">
      <Image
        src={imageURL}
        alt={`${label} image`}
        width={85}
        height={85}
        className="object-cover"
      />
      {isAvailable && (
        <span className="absolute top-[10px] left-[2px]">
          <IndicatorAvailable />
        </span>
      )}
      <div>
        <h1 className="text-base font-semibold text-gray-900">{label}</h1>
        <span className="text-xs font-normal text-gray-500">
          Next reservation: {reservation}
        </span>
        <div className="flex mt-[14px]">
          <Rating rating={rating} />
        </div>
      </div>
      <span className="absolute top-[10px] right-0">
        <DotsVertical />
      </span>
    </div>
  );
};

export default MobileDataTableItem;
