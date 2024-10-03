import { useEffect } from "react";

const Notification = ({ onClose, message }) => {
  useEffect(() => {
    const timerId = setTimeout(onClose, 5000);

    return () => clearTimeout(timerId);
  }, [message]);

  return <div className="notification">{message}</div>;
};

export default Notification;
