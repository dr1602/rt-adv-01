import { NotificationButton } from './NotificationButton';
import { Notification } from './Notification';

export const Sales = () => {
  return (
    <>
      <h1> 💸 Transacción casi lista 💸 </h1>
      <p> ¿Estás seguro de que quieres completar esta transacción? </p>
      <NotificationButton />
      <Notification />
    </>
  );
};
