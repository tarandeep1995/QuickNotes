import React from "react";
import NoteIcon from "@material-ui/icons/Note";
function Header() {
  const styleObject = {
    fontSize: "25px"
  };
  return (
    <header>
      <h1>
        <NoteIcon style={styleObject} />
        Quick Notes
      </h1>
    </header>
  );
}

export default Header;
