
require('styles/three.scss');

import Carouserl from './carousel.js'

import React from 'react';

import p1 from '../images/partner1.jpg';
import p2 from '../images/partner2.jpg';
import p3 from '../images/partner3.jpg';
import p4 from '../images/partner4.jpg';
import p5 from '../images/partner5.jpg';
import p6 from '../images/partner6.jpg';
import p7 from '../images/partner7.jpg';
import p8 from '../images/partner8.jpg';
import p9 from '../images/partner9.jpg';
import p10 from '../images/partner10.jpg';
import p11 from '../images/partner11.jpg';
import p12 from '../images/partner12.jpg';

import img1 from '../images/zhudd-code.png';


var  hehe='hehehhehehheheheheheh';


let picture=[p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12]

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
     		<ul className='ul' id='ul'>
     			<li>
     				<div className='libix'>
     					<i className='i1'>  </i>
     					<p className="text">品质公寓，全线进驻</p>
     				</div>
     			</li>
     			<li>
     				<div className='libix'>
     					<i className='i2'>  </i>
     					<p className="text">认证实拍，实时更新</p>
     				</div>
     			</li>
     			<li>
     				<div className='libix'>
     					<i className='i3'>  </i>
     					<p className="text">精致装修，配套服务</p>
     				</div>
     			</li>
     			<li>
     				<div className='libix'>
     					<i className='i4'>  </i>
     					<p className="text">促销秒杀，优惠多多</p>
     				</div>
     			</li>
     		</ul>
     		<div className='sectionbox'>
     			<div className='section' id='section'>
     				<ul>
     					<li >
     						<i className='si1 i1'></i>
     						<i className='si2'></i>
     					</li>
     					<li >
     						<i className='si1 i2'></i>
     						<i className='si2'></i>
     					</li>
     					<li >
     						<i className='si1 i3'></i>
     						<i className='si2'></i>
     					</li>
     					<li >
     						<i className='si1 i4'></i>
     						<i className='si2'></i>
     					</li>
     					<li >
     						<i className='si1 i5'></i>
     						<i className='si2'></i>
     					</li>
     					<li >
     						<i className='si1 i6'></i>
     						<i className='si2'></i>
     					</li>
     					<li >
     						<i className='si1 i7'></i>
     						<i className='si2'></i>
     					</li>
     					<li >
     						<i className='si1 i8'></i>
     						<i className='si2'></i>
     					</li>
     				</ul>
     			</div>
     		</div>
     		<div className='h4'>合作品牌</div>
     		<div className='h5'>COOPERATION BRAND</div>
     		
     		<div className='imgbox' id='imgbox'>
     			<ul>
     				{
     					picture.map((item,index)=>{
     						return(
     							<li key={index}>
			     					<img src={item} alt="" />
			     				</li>
     						)
     					})
     				}
     			</ul>
     		</div>
     		<div className='threebut'>
     			<div className='h4'>行业倡议</div>
     			<div className='h5'>INDUSTRY INITIATIVE</div>
     			<ul className='buttxt' id='buttxt'>
     					<li><i className='i1'>房屋质量问题无责换租</i></li>
     					<li><i className='i2'>退租押金3个工作日返还</i></li>
     					<li><i className='i3'>3天不满意退款</i></li>
     			</ul>
     		</div>
     		
     			<div className='butexbox'>
     				<div className='butex' id='butex'>
     						<img src={img1} alt="" />
     				</div>
     				<div className='but_a' id='but_a'>
     						<a href=""><i className='i1'></i></a>
     							<span>&nbsp; &nbsp;</span>
     						<a href=""><i className='i2'></i></a>
     				</div>
     			</div>
     	</div>
    )
  }
}

Three.defaultProps = {
};

export default Three;
