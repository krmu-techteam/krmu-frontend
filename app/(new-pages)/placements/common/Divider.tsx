type Props = {
  borderColor?: string;
  className?: string;
};

const Divider = ({ borderColor = "#545454", className = "" }: Props) => {
  return (
    <hr
      className={`border-0 border-t ${className}`}
      style={{
        borderTopColor: borderColor,
      }}
    />
  );
};

export default Divider;
