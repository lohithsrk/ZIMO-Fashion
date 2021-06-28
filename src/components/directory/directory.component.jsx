import React, { Component } from "react";
import Sections from "./directory.data";
import MenuItem from "../menu-items/menu-items.components";
import "./directory.styles.scss";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: Sections,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id , size}) => (
          <MenuItem title={title} imageUrl={imageUrl} id={id} key={id} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
