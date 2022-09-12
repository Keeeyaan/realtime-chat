import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useScrollPosition } from '../hooks/useScrollPosition';

type scrollPosition = {
  prevPos: any;
  currPos: any;
};

const Footer = () => {
  const [sticky, setSticky] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }: scrollPosition) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== sticky) setSticky(isShow);
    },
    [sticky],
  );

  return (
    <div
      className={`${
        sticky ? 'bottom-0' : '-bottom-[60px]'
      } transition-all delay-[300ms] ease-in tranform fixed left-0 px-6 h-[50px] text-xs overflow-hidden text-slate-300 gap-5 flex items-center w-full shadow-[0_0_10px_0_rgba(0,0,0,0.5)] bg-[#2e3035]`}
    >
      <Link to='/' className='ml-6 font-bold'>{`© ${new Date().getFullYear()} Chatty, Inc`}</Link>
      <Link to='/'>About</Link>
      <Link to='/'>Terms</Link>
      <Link to='/'>Privacy</Link>
    </div>
  );
};

export default Footer;
