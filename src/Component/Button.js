import React, { Children } from "react";

export default function Button({ btnType, Title }) {
  return <button className={btnType}>{Title}</button>;
}
