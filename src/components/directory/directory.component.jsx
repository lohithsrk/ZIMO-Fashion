import React from "react";
import Sections from "./directory.data";
import MenuItem from "../menu-items/menu-items.components";
import "./directory.styles.scss";

const Directory = () => (
  <div className="directory-menu">
    {Sections.map(({ id, ...sectionProps }) => (
      <MenuItem key={id} {...sectionProps} />
    ))}
  </div>
);

export default Directory;
