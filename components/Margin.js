import React from "react";

export default function Margin({ count = 1 }) {
  const margin = 14 * count;

  return <div style={{ margin }} />;
}
