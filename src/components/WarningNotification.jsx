import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function WarningNotification(err) {
    toast.warn(err, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
    });
}