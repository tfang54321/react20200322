import React, { Component } from 'react';

export default class SiteInfo extends Component {
    
    render() {
        const {siteid,sitelocation} = this.props.siteInfo;
        return (
            <div>
              {sitelocation}
            </div>
        )
    }
}
