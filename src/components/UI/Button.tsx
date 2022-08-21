type ButtonProps = {
  color?: string
  children?: React.ReactNode
  className?: string
}

const Button = ({ className, color, children }: ButtonProps) => {
  return (
    <button
      type='button'
      className={`${
        color || 'bg-yellow-500'
      } text-white text-sm py-2 px-4 rounded transition-all ease-in-out duration-300 font-semibold hover:bg-yellow-400 focus:ring-1 focus:outline-none focus:ring-yellow-500 ${className} `}
    >
      {children}
    </button>
  )
}

export default Button
