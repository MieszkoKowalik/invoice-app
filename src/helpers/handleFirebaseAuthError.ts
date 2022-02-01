export const handleFirebaseAuthError = (errorCode: string) => {
  switch (errorCode) {
    case "auth/wrong-password":
      return "Wrong password";
    case "auth/user-not-found":
      return "We couldn't find an account conected to this email.";
    default:
      return "We were unable to log you in, please try again ";
  }
};
