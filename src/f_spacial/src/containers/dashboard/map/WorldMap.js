import React, { Component } from 'react';

import worlddata from './world';
import { geoMercator, geoPath } from 'd3-geo';

class WorldMap extends Component {
   constructor(props){
      super(props);
      this.onResize = this.onResize.bind(this);
      // These are some sensible defaults
      this.state = { screenWidth: 1000, screenHeight: 500 }
   }

   componentDidMount() {
     window.addEventListener('resize', this.onResize, false)
     this.onResize()
   }

   onResize() {
     this.setState({ screenWidth: window.innerWidth*2/3,
         screenHeight: window.innerHeight - 64 })
   }

   render() {
      const projection = geoMercator()
      const pathGenerator = geoPath().projection(projection)
      const countries = worlddata.features
         .map((d,i) => <path
         key={'path' + i}
         d={pathGenerator(d)}
         className='countries'
         />)
   return <svg width={this.state.screenWidth} height={this.state.screenHeight/2}>
   {countries}
   </svg>
   }
}
export default WorldMap;
