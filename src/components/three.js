
require('styles/three.scss');

import Carouserl from './carousel.js'

import React from 'react';



class Three extends React.Component {
  constructor(props){
    super(props);
    
  }
	
  render() {
    return (
     	<div className='threebox'>
     		<Carouserl/>
     		<div className='h4'>选择住多多的理由</div>
     		<div className='h5'>SELECT REASON</div>
     		<ul className='ul'>
     			<li>
     				<div className='libix'>
     					<i>  </i>
     				</div>
     			</li>
     			<li>2</li>
     			<li>3</li>
     			<li>4</li>
     		</ul>
     	</div>
    )
  }
}

Three.defaultProps = {
};

export default Three;
