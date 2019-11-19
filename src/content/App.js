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
					<img src={require('../images/slider01.jpg')} height="400" width="800"/>
	      		</div>
	      		<div className="r-box">
					<img src={require('../images/s01.png')} height="170"/>
					<img src={require('../images/s02.png')} height="170"/>
	      		</div>
      		</div>
      		<div className="c-bottom">
				<h2>Add-on Unggulan</h2>
				<div className="list-img">
					<ul>
						<li><img src={require('../images/001.jpg')} height="130" width="230"/><div className="label"><span><b>Hooq</b></span><span>LIHAT</span></div></li>
						<li><img src={require('../images/002.jpg')} height="130" width="230"/><div className="label"><span><b>Iflix</b></span><span>LIHAT</span></div></li>
						<li><img src={require('../images/003.jpg')} height="130" width="230"/><div className="label"><span><b>Edukids</b></span><span>LIHAT</span></div></li>
						<li><img src={require('../images/004.jpg')} height="130" width="230"/><div className="label"><span><b>ChatsPlay</b></span><span>LIHAT</span></div></li>
					</ul>
				</div>
      		</div>
      	</div>
		<br/>

      	<div id="chanel">
      		<div className="c-top">
      			<h3>Berlangganan IndiHome dan nikmati konten terbaik di dalam layar TV Anda</h3>
      			<div>
      				<ul>
						<li><img src={require('../logo/c001.png')} height="30"/></li>
						<li><img src={require('../logo/c002.png')} height="30"/></li>
						<li><img src={require('../logo/c003.png')} height="30"/></li>
					</ul>
      			</div>
      		</div>

      		<div className="c-bottom"> 
      			<div className="c-img">
      				<img src={require('../images/c001.jpg')}/>
      				<h2>LOMBA EPG</h2>
      				<b>IndiHome TV</b>
      			</div>
      			<div className="c-img">
      				<img src={require('../images/c002.jpg')}/>
      				<h2>LOMBA EPG</h2>
      				<b>IndiHome TV</b>
      			</div>
      			<div className="c-img">
      				<img src={require('../images/c003.jpg')}/>
      				<h2>LOMBA EPG</h2>
      				<b>IndiHome TV</b>
      			</div>
      			<div className="c-img">
      				<img src={require('../images/c004.jpg')}/>
      				<h2>LOMBA EPG</h2>
      				<b>IndiHome TV</b>
      			</div>
      		</div>
      	</div>

      	<div id="footer">
      		<div className="c-top">
      			<div className="l-box">
      				<ul>
	      				<li><img src={require('../images/ic001.png')}/><br/><span>IndiHome</span></li>
	      				<li><img src={require('../images/ic002.png')}/><br/><span>IndiHome</span></li>
	      				<li><img src={require('../images/ic003.png')}/><br/><span>IndiHome</span></li>
	      				<li><img src={require('../images/ic004.png')}/><br/><span>Contact Center 147</span></li>
      				</ul>
      			</div>
      			<div className="r-box">
      				<span className="label">Berlangganan newsletter sekarang</span><input type="text" placeholder="Enter Your E-mail"/>
      			</div>
      		</div>
      		<br/>
      		<hr/>
      		<div className="c-bottom">
      			<div className="b04">
      				<b>Temui kemudahan mengatur IndiHome dalam genggaman Anda.</b>
      				<br/>
      				<br/>
      				<img src={require('../images/b001.png')}/>
      				<img src={require('../images/b003.png')}/>
      			</div>
      			<div className="b03">
      				<ul>
	      				<li>Kenali IndiHome</li>
	      				<li>Apa itu IndiHome?</li>
	      				<li>Aplikasi myIndiHome</li>
	      				<li>Triple Play</li>
	      				<li>Dual Play</li>
	      				<li>Singgle Play</li>
	      				<li>Add-on</li>
	      				<li>Pusat Bantuan</li>
      				</ul>
      			</div>
      			<div className="b02">
      				<ul>
	      				<li>IndiHome</li>
	      				<li>Syarat & Kententuan</li>
	      				<li>Announcents</li>
	      				<li>Tutorial</li>
      				</ul>
      			</div>
      			<div className="b01">
      				<img src={require('../images/b002.png')}/>
      				<p>Copyright 2019 PT Telekomunikasi Indonesia (Persero) Tbk All Right Reserved.</p>
      			</div>
      		</div>
      	</div>

      	<div id="chat">
      		<img src={require('../images/chat.png')} height="100"/>
      	</div>
      </div>
	
      
    )
  }
}

export default App;
