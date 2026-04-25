import { ReactNode, useState } from "react";

interface AlertProps {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: AlertProps) => {
  // const [currentState, setState] = useState("fade");
  return (
    <div className={`alert alert-warning alert-dismissible`}>
      {children}
      <button onClick={onClose} className="btn-close"></button>
    </div>
  );
};

export default Alert;
