import reactDOM from "react-dom";
type Props = {
  children: React.ReactNode;
};

export default function ModalPortal({ children }: Props) {
  if (typeof window === "undefined") {
    return null; //모달이 서버에서 렌더링되지 않게 하기 위한 코드
  }
  const node = document.getElementById("portal") as Element;
  return reactDOM.createPortal(children, node);
}
