import { toaster } from 'evergreen-ui';

// Check if the user is registered with GitHub
export const isUserRegisteredWithGitHub = (currentUser) => {
  if (currentUser) {
    for (const userInfo of currentUser.providerData) {
      if (userInfo.providerId === 'github.com') {
        return true;
      }
    }
  }

  return false;
};

// Check if the user's email is verified
export const isUserEmailVerified = (currentUser) => {
  return currentUser?.emailVerified || false;
};

// Handle authentication errors
export function handleAuthenticationError(error, setError) {
  if (!error || !error.code) {
    setError('An unexpected error occurred. Please try again.');
    toaster.danger('An unexpected error occurred. Please try again.');
    return;
  }

  switch (error.code) {
    case 'auth/user-not-found':
    case 'auth/wrong-password':
      setError('Invalid email or password.');
      toaster.danger('Invalid email or password.');
      break;
    case 'auth/too-many-requests':
      setError('Too many unsuccessful login attempts. Please try again later.');
      toaster.danger('Too many unsuccessful login attempts. Please try again later.');
      break;
    case 'auth/credential-already-in-use':
      setError('The credential is already associated with another user account.');
      toaster.danger('The credential is already associated with another user account.');
      break;
    case 'auth/invalid-login-credentials':
      setError('Wrong login credentials. Please try again.');
      toaster.danger('Wrong login credentials. Please try again.');
      break;
    default:
      setError('Authentication error. Please try again.');
      toaster.danger('Authentication error. Please try again.');
      break;
  }
}
