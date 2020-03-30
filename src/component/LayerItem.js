import React, { Component } from "react";
import Siteinfos from "./SiteInfos";

export default class LayerItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.layItem.complete ? "line-through" : "none"
    };
  };

  getStyle1 = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.layItem.complete ? "line-through" : "none"
    };
  };

  getStyle2 = () => {
    return {
      background: "#FF4500",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.layItem.complete ? "line-through" : "none"
    };
  };

  render() {
    const { layerid, layertitle, sitetodos } = this.props.layItem;
    const { siteid, sitelocation } = sitetodos;
    const sitetodoslength = sitetodos.length;

    return (
      <div>
        <button
          type="button"
          style={sitetodoslength > 0 ? this.getStyle1() : this.getStyle2()}
          onClick={this.props.markComplete.bind(this, layerid)}
        ></button>
        {""}
        {layertitle}
        {sitetodoslength > 0 ? <Siteinfos siteInfos={sitetodos} /> : ""}
        ));
      </div>
    );
  }
}
