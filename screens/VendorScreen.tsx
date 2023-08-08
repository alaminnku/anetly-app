import { useUser } from '../contexts/user';
import Register from '../components/vendor/Register';
import Profile from '../components/vendor/Profile';

export default function VendorRegisterScreen() {
  // Hooks
  const { token } = useUser();

  return <>{token ? <Profile /> : <Register />}</>;
}
