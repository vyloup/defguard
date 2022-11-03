import { toast, ToastOptions } from 'react-toastify';

import ToastContent, { ToastType } from '../components/Toasts/ToastContent';

const defaultConfig: ToastOptions = {
  autoClose: 5000,
};

/**
 * Shorcut to use toast with custom body, most of the times there is no nead to change ToastContent
 * **/
export const toaster = {
  error: (message: string, subMessage?: string) => {
    return toast(
      <ToastContent
        type={ToastType.ERROR}
        message={message}
        subMessage={subMessage}
      />,
      defaultConfig
    );
  },
  info: (message: string, subMessage?: string) =>
    toast(
      <ToastContent
        type={ToastType.INFO}
        message={message}
        subMessage={subMessage}
      />
    ),
  warning: (message: string, subMessage?: string) =>
    toast(
      <ToastContent
        type={ToastType.WARNING}
        message={message}
        subMessage={subMessage}
      />
    ),
  success: (message: string, subMessage?: string) =>
    toast(
      <ToastContent
        type={ToastType.SUCCESS}
        message={message}
        subMessage={subMessage}
      />
    ),
};
