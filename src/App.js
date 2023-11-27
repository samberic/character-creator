import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "60%",
          height: "40%",
          width: "100%",
          backgroundColor: "grey",
        }}
      />
      <div
        style={{
          isolation: "isolate",
        }}
      >
        <CharacterEditor />
        <Footer />
      </div>
    </>
  );
}

export default App;
