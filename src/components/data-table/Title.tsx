type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  return (
    <div className="text-gray-500 text-xs font-semibold uppercase p-4 border-b border-gray-200 bg-gray-50">
      {title}
    </div>
  );
};

export default Title;
