import { ReactNode, useState } from "react";

interface AlertProps {
  children: ReactNode;
  state: string;
  handleXClick: () => void;
}

const Alert = ({ children, state, handleXClick }: AlertProps) => {
  // const [currentState, setState] = useState("fade");
  return (
    <div className={`alert alert-warning alert-dismissible`}>
      {children}
      <button onClick={handleXClick} className="btn-close"></button>
    </div>
  );
};

export default Alert;
