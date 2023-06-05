import { AiOutlineClose } from "react-icons/ai";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function PostModal({ onClose, children }: Props) {
  return (
    <section
      className="fixed top-0 left-0 z-50 w-full h-full bg-slate-900/70 flex flex-col justify-center items-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <button className="fixed top-0 right-0 p-8 text-white/50 font-bold text-3xl" onClick={() => onClose()}>
        <AiOutlineClose />
      </button>
      <div className="bg-white w-4/5 h-3/5 max-w-7xl">{children}</div>
    </section>
  );
}
