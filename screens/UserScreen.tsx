import { useUser } from '../contexts/user';
import Register from '../components/user/Register';
import Profile from '../components/user/Profile';

export default function UserRegisterScreen() {
  // Hooks
  const { token } = useUser();

  return <>{token ? <Profile /> : <Register />}</>;
}
