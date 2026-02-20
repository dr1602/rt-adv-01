import type React from 'react';
import { useNotification } from '../hooks/useNotification';

export const NotificationButton: React.FC = () => {
  const { showNotification } = useNotification();

  if (!showNotification) return null;

  return (
    <button
      onClick={() =>
        showNotification('✅ ¡Tu transacción se ha realizado con éxito!')
      }
    >
      Confirmar Transacción
    </button>
  );
};
