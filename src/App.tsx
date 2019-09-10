import React, { useContext } from "react";

import { FirebaseContext } from "./Firebase";
import { FirebaseAuth, signInWithRedirect, signOut } from "./FirebaseAuth";

const Content: React.FC = () => {
  const { userId, userName } = useContext(FirebaseContext);
  return (
    <div>
      {userName} ({userId}) is signedIn
    </div>
  );
};

const App: React.FC = () => {
  const NotSignedIn = React.useCallback(() => {
    return <button onClick={() => signInWithRedirect()}>signIn</button>;
  }, []);
  const Loading = React.useCallback(() => {
    return <div>loading now....</div>;
  }, []);

  return (
    <FirebaseAuth NotSignedIn={NotSignedIn} Loading={Loading}>
      <Content />
      <button onClick={signOut}>sign out</button>
    </FirebaseAuth>
  );
};

export default App;
