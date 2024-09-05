import { signInWithGoogle } from '../app/api/auth';
import { Button } from '@mui/material';

export default function Home() {
  const handleSignIn = async () => {
    await signInWithGoogle();
  };

  return (
    <div>
      <h1>Welcome to the Productivity Tool</h1>
      <Button onClick={handleSignIn} variant="contained" color="primary">Sign in with Google</Button>
    </div>
  );
}
