
import {OBJModel} from 'react-3d-viewer'
import React, { Component } from 'react'


class ObjModel extends Component {
render(){
  return(
    <div>
      <OBJModel src="./Male.OBJ" texPath=""/>
    </div>
  )
}
}
export default ObjModel;