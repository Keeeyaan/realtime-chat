type ButtonProps = {
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
};

const Button = ({ className, children, type: btnType, onClick: clickTriggered }: ButtonProps) => {
  return (
    <button
      onClick={clickTriggered}
      type={btnType}
      className={`text-white text-sm py-2 px-4 rounded transition-all ease-in-out duration-300 font-semibold outline-none ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;
