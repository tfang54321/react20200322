import React, { Component } from 'react';
import SiteInfo from './SiteInfo';

export default class SiteInfos extends Component {


    render() {
    return this.props.siteInfos.map((siteInfo_temp) => (
        <SiteInfo  key={siteInfo_temp.siteid} siteInfo={siteInfo_temp} />
         
         ));
       
    }
}
