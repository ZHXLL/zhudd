
require('styles/App.scss');

import React from 'react';
import { Link } from 'react-router-dom';

import img1 from '../images/~ADADON4VZH(G@LAGP57)YX.png'
import img2 from '../images/~(%7QF0VVRKY}KT929Q522P.png'
import img3 from '../images/new1.jpg'
import img4 from '../images/~ADADON4VZH(G@LAGP57)YX.png'
import img5 from '../images/recruitLandlord_banner.jpg'


var image = [img1, img2, img3, img4, img5]
 

class Carousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 0,
			itm: setInterval(() => {
				this.setState({
					index: this.state.index + 1
				})
				if (this.state.index >= 5) {
					this.setState({
						index: 0
					})
				}
			}, 2000)
		}
	}
	btn(res) {
		this.setState({
			index: res
		})
	}
	componentWillUnmount() {
		clearInterval(this.state.itm)
		console.log(1);
	}
	render() {
		return (
			<div className='lbbox'>
				{
					image.map((item, index) => {
						return (
							<div key={index} src={item} className='img' style={{ backgroundImage: 'url(' + item + ')', opacity: this.state.index == index ? 1 : 0 }}></div>
						)
					})
				}
				<div className='btnbox'>
					<div className='btnb'>
						{
							image.map((item, index) => {
								return (
									<div key={index} className={this.state.index == index ? "btn a1" : 'btn'} onClick={() => { this.btn(index) }}></div>
								)
							})
						}
					</div>
				</div>
			</div>
		)
	}
}

Carousel.defaultProps = {
};

export default Carousel;
