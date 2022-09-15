import ReactDOM from 'react-dom';

const Backdrop = ({ onClick }: any) => {
  return <div className='fixed inset-0 z-10 h-vw w-full bg-[rgba(0,0,0,0.30)]' onClick={onClick} />;
};

const ModalOverlay = ({ children }: any) => {
  return (
    <div className='absolute shadow h-[350px] z-20 w-[500px] bg-slate-600 rounded'>{children}</div>
  );
};

const Modal = ({ children, showModalClickHandler }: any) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={showModalClickHandler} />,
        document.getElementById('overlays')!,
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById('overlays')!,
      )}
    </>
  );
};

export default Modal;
