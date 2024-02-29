type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  return (
    <div className="text-gray-500 text-xs font-semibold uppercase p-4">
      {title}
    </div>
  );
};

export default Title;
