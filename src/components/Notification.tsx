import type React from 'react';
import { useNotification } from '../hooks/useNotification';

export const Notification: React.FC = () => {
  const { message } = useNotification();

  if (!message) return null;

  return (
    <aside>
      <p>{message}</p>
    </aside>
  );
};
