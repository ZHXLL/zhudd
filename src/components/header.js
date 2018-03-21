import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.scss';
import logo from '../images/logo.png';
import btn from '../images/new-index-menu.png';

var kai=true;

let right=[
	  		{txt1:'首 页',path:"/"},
	  		{txt1:'了解APP',path:'/two'},
	  		{txt1:'长租公寓',path:'/three'},
	  		{txt1:'短租民宿',path:'/four'},
	  		{txt1:'招募房东',path:'/five'},
	  		{txt1:'品牌商入口',path:'/sixe'}
  		]

class Header extends React.Component {
	btn(){
		var header=document.querySelector('.header');
		if(kai){
			kai=!kai
			header.className='header a1';
		}else{
			kai=!kai
			header.className='header';
		}
	}
  render() {
    return (
      <div className="header" >
       	<div className='h_box' id='h_box'>
       		<img src={logo} alt=""/>
       		<div className='h_boxr'>
       			{
       				right.map((item,index)=>{
       					return (
       						<NavLink key={index} to={item.path} className='h_boxra' activeClassName='a1' exact> 
       							{item.txt1} 
       						</NavLink>
       					)
       				})
       			}
       		</div>
       	</div>
       	<div className='btn' id='btn' onClick={()=>{this.btn()}}>	
       		<img src={btn} alt="" />
       	</div>
      </div>
    );
  }
}

Header.defaultProps = {
};

export default Header;
