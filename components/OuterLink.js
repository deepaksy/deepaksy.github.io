import React from "react";

function OuterLink(props) {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  );
}

export default OuterLink;
