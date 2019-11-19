import React, {Component} from 'react';
import '../style/style.css';

class App extends Component{
  render(){
    return(
      <div id="wrapper"> 
      	<div className="container" id="navbar">
	      	<div className="c-left">
	      		<img src={require('../logo/logo.png')} height="30"/>
	      	</div>
	      	<div className="c-right">
	      		<ul>
	      			<li>PROMO</li>
	      			<li>PAKET &ADD-ON</li>
	      			<li>PUSAT BANTUAN</li>
	      			<li>INFO TEKINI</li>
	      			<li>myIndiHome</li>
	      		</ul>
	      	</div>
	    </div>

		
      	<div className="container" id="slider">
      		<div className="c-top">
				<b>Berlangganan IndiHome bisa dapat internet cepat, nelpon murah sepuasnya dan nonton beragam konten terbaik di layar TV interaktif</b>
      		</div>
      		<div className="c-center">
	      		<div className="l-box">
					<img src={require('../images/slider01.jpg')} height="300"/>
	      		</div>
	      		<div className="r-box">
					<img src={require('../images/slider01.jpg')} height="130"/>
					<img src={require('../images/slider01.jpg')} height="130"/>
	      		</div>
      		</div>
      		<div className="c-bottom">
				<h2>Add-on Unggulan</h2>
				<div className="list-img">
					<ul>
						<li><img src={require('../images/001.jpg')} height="130"/></li>
						<li><img src={require('../images/002.jpg')} height="130"/></li>
						<li><img src={require('../images/003.jpg')} height="130"/></li>
						<li><img src={require('../images/004.jpg')} height="130"/></li>
					</ul>
				</div>
      		</div>
      	</div>


      	<div id="chanel">
      		<div className="c-top">
      			<h3>Berlangganan IndiHome dan nikmati konten terbaik di dalam layar TV Anda</h3>
      			<div>
      				<ul>
						<li><img src={require('../logo/c001.png')} height="130"/></li>
						<li><img src={require('../logo/c002.png')} height="130"/></li>
						<li><img src={require('../logo/c003.png')} height="130"/></li>
					</ul>
      			</div>
      		</div>
      	</div>
      </div>
	
      
    )
  }
}

export default App;
