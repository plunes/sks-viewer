import React from 'react';
import './App.css';
import Viewer from './Viewer/viewer';
import stack from './Viewer/stackElement';
import Shape from './Viewer/shape';
import Model3DViewer from './modelViewer/model3DViewer';
import ThreeView from './Viewer/threeView';




function App() {
  return (
    <div className="App">
      <h1>hi,This will be going to be dicom Viewer</h1>
      <Viewer stack={stack} />
      <div>
      <Shape />
      </div>

      <div>
        <ThreeView />
        </div>

      <div>
        <Model3DViewer />
        </div>
    
    </div>
  )
  
}

export default App;
