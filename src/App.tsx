import React from "react";
import { History } from "history";

import { FirebaseAuth, signInWithRedirect, signOut } from "./FirebaseAuth";

import { Router } from "./Router";

const Content: React.FC<{ history: History }> = ({ history }) => {
  return <Router history={history} />;
};

const App: React.FC<{ history: History }> = ({ history }) => {
  const NotSignedIn = React.useCallback(() => {
    return <button onClick={() => signInWithRedirect()}>signIn</button>;
  }, []);
  const Loading = React.useCallback(() => {
    return <div>loading now....</div>;
  }, []);

  return (
    <FirebaseAuth NotSignedIn={NotSignedIn} Loading={Loading}>
      <Content history={history} />
      <button onClick={signOut}>sign out</button>
    </FirebaseAuth>
  );
};

export default App;
