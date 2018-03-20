import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link,Route,HashRouter,Redirect , Switch , NavLink} from 'react-router-dom';

import App from './components/Main';
import Header from './components/header';
import Footer from './components/footer';
import Three from './components/three';


var styles={
	marginTop:"60px",
	overflow: 'hidden'
}
var style={
	width:'100%',
	height:'1000px',
	textAlign: "center",
	lineHeight:"400px",
	fontSize:"50px"
}

var two=()=><div style={style}>我是第二个页面</div>
var three=()=><div style={style}>我是第三个页面</div>
var four=()=><div style={style}>我是第四个页面</div>
var five=()=><div style={style}>我是第五个页面</div>
var sixe=()=><div style={style}>我是第六个页面</div>
var seven=()=><div style={style}>我是第七个页面</div>


// Render the main component into the dom
ReactDOM.render(
	<HashRouter>
		<div>
			<Header/>
			<div style={styles}>
				<Switch>
					<Route exact path='/' component={App}/>
					<Route  path='/two' component={two} />
					<Route  path='/three' component={Three} />
					<Route  path='/four' component={four} />
					<Route  path='/five' component={five} />
					<Route  path='/sixe' component={sixe} />
					<Route  path='/seven' component={seven} />
				</Switch>
			</div>
			<Footer/>			
		</div>
	</HashRouter>
		
	, document.getElementById('app'));
	
	window.onload=function(){
//		var mySwiper = new Swiper('.swiper-container', {
//			autoplay: true,
//			effect : 'fade',
//			pagination: {
//		      el: '.swiper-pagination',
//		      clickable :true,
//		    },
//		})
		console.log(1)
	}
