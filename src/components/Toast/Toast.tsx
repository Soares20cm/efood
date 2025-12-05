import { useEffect } from 'react';
import { ToastContainer, ToastMessage } from './styles';

interface ToastProps {
  message: string;
  onClose: () => void;
  duration?: number;
}

export const Toast = ({ message, onClose, duration = 3000 }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <ToastContainer>
      <ToastMessage>✓ {message}</ToastMessage>
    </ToastContainer>
  );
};
