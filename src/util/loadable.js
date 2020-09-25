import React from 'react';
import Loadable from 'react-loadable';


//通用的过场组件
const loadingComponent =()=>{
    return (
        <div>loading</div>
    ) 
}

const LoadableComponent = (component) => Loadable({
  loader: component,
  loading: loadingComponent,
});
export default LoadableComponent;