type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
};

const Button = ({ className, children }: ButtonProps) => {
  return (
    <button
      type='button'
      className={`text-white text-sm py-2 px-4 rounded transition-all ease-in-out duration-300 font-semibold outline-none ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;
