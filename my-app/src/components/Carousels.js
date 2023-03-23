import React from 'react';
import './Dlta.css';

import DetailsThumb from './DetailsThumb';

 
 class Carousels extends React.Component{

  state = {
    products: [
      {
        "_id": "1",
        "title": "Dlta4k ",
        "src": [
            "./images/dlta.jpg",
            "./images/dlta1.jpeg",
            "./images/dlta2.jpeg",
            
          ],
        "description": " السيرفر الأفضل في العالم ",
        "content": "يتميز الاشتراك بعدد ضخم من الباقات تشمل معظم بلدان العالم اضافه الى استقرار البث منذ سنوات عديده دون توقف ومكتبه افلام ومسلسلات تشمل كل جديد ",
        "description2": " اهم باقات البث المباشر والافلام والمسلسلات",
        
        "price": 50,
        "colors":["red","black","crimson","teal"],
        "count": 1
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render(){
    const {products, index} = this.state;
    return(
      <div className="app">
        {
          products.map(item =>(
            <div  className="details " key={item._id}>
              
              
              <div className='row'>  
              
                  <h2 className=' text-center'>{item.title} €{item.price} </h2>
                 
                
              <div dir="auto" className="big-img col-12 col-md-5">
                <div  className='row'>
                <img src={item.src[index]} alt=""/>
                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
              </div>
              
              </div>
              <div className="box col-md-12 col-lg-7 ">
             
                

                <h5 className=''>{item.description}</h5>
                <p className=''>{item.content}</p>
                <h5 dir="auto" className=''> يعمل على جميع الشاشات والأجهزه</h5>
                <p className=''>يعمل على العديد من البرامج مثل   
                  <br/>
                  <span className='sp'> IBO PLAYER & SET IPTV & SMART IPTV & NET IPTV</span>
                </p>
                <p className=''> على شاشات سامسونغ والجي <span className='sp'> Moon player</span>ننصح بأستخدام التطبيق 
                </p>
                <p className=''>يمكن تنزيل التطبيق من غوغل بلاي  <span className='sp'> Dlta 4k</span>على شاشات واجهزه اندرويد 
                </p>
                
                <p dir="auto" className=''>  <a href="/file/DLTA 4K.apk" class="btn btn-info sp" >DLTA 4K.apk</a>او بلضغط على الزر لتنزيل التطبيق مباشر 
                </p>
                <p dir="auto" className='float-end'>هو 751261<span className='sp'> Downloader</span>كود تنزيل التطبيق عن طريق برنامج 
                </p>

              </div>
              </div>
              <div className='container'>
              
<div class="row">
<h5 className='text-center'>{item.description2}</h5>
<div class="col-12 col-md-6 box-shd">
<h5 dir="auto"> LIVE CHANNEL</h5>
<ul class="list-group list-group-horizontal">
  <li class="list-group-item width-b">MBC 4K</li>
  <li class="list-group-item width-b">MBC HD</li>
  <li class="list-group-item width-b">OSN 4K</li>
  <li class="list-group-item width-b">MY HD</li>
  
  
  </ul>
  <ul class="list-group list-group-horizontal">
  <li class="list-group-item width-b">SHAHID CINEMA </li>
  <li class="list-group-item width-b">BEIN MEDIA 4K</li>
  <li class="list-group-item width-b">BEIN SPORT 4K UHD</li>
  <li class="list-group-item width-b">BEIN SPORT HD SD</li>
 
  </ul>
  
<ul class="list-group list-group-horizontal">
<li class="list-group-item width-b">SPORT AR</li>
  
  <li class="list-group-item width-b"> DLTA DRAMA</li>
  <li class="list-group-item width-b">DLTA YouTube</li>
  <li class="list-group-item width-b">NETFLIX 4K</li>
  </ul>
 
  <ul class="list-group list-group-horizontal">
  <li class="list-group-item width-b">ROTANA＋ART</li>
  <li class="list-group-item width-b">KIDS TV</li>
  <li class="list-group-item width-b">NEWS TV</li>
  <li class="list-group-item width-b">SYRIA TV</li>
  </ul>
<ul class="list-group list-group-horizontal">
<li class="list-group-item width-b">DLTA MEDIA</li>
  <li class="list-group-item width-b">MUSIC TV</li>
  <li class="list-group-item width-b"> LEBANON TV</li>
  <li class="list-group-item width-b"> EGYPT TV</li>
  
  </ul>
  <ul class="list-group list-group-horizontal">
  <li class="list-group-item width-b">IRAQ TV</li>
  <li class="list-group-item width-b">EMIRATES TV</li>
  <li class="list-group-item width-b">SAUDI TV</li>
  <li class="list-group-item width-b">AL KHALIJ TV</li>
  </ul>
  <ul class="list-group list-group-horizontal">
  <li class="list-group-item width-b">MOROCCO TV</li>
  <li class="list-group-item width-b">ALGERIA TV</li>
  <li class="list-group-item width-b">TUNISIA TV</li>
  <li class="list-group-item width-b"> LIBYA TV</li>
  </ul>

  <ul class="list-group list-group-horizontal">
  <li class="list-group-item width-b"> JORDAN TV</li>
  <li class="list-group-item width-b">PALASTINA TV</li>
  <li class="list-group-item width-b">SAUDI TV</li>
  <li class="list-group-item width-b">SUDAN TV</li>
  </ul>
  <ul class="list-group list-group-horizontal">
  <li class="list-group-item width-b">IRAQ TV</li>
  <li class="list-group-item width-b">DOCUMENTARY </li>
  <li class="list-group-item width-b">ISLAMIC TV</li>
  <li  class="list-group-item width-b"> CHRISTIAN TV </li>
  </ul>
<ul class="list-group list-group-horizontal"> 

<li class="list-group-item width-b"> KURDISTAN TV </li>
<li class="list-group-item width-b"> GERMANY TV </li>
<li class="list-group-item width-b"> TURKEY TV </li>
<li class="list-group-item width-b"> SWEDEN TV </li>
</ul>

<ul class="list-group list-group-horizontal">
<li class="list-group-item width-b"> AUSTRIA TV </li>
<li  class="list-group-item width-b"> NORWAY TV </li>
<li class="list-group-item width-b"> DENMARK TV </li>
<li  class="list-group-item width-b"> FINLAND TV </li>
</ul>
<ul class="list-group list-group-horizontal">
<li class="list-group-item width-b"> NETHERLANDS </li>
<li  class="list-group-item width-b"> ITALY TV </li>
<li  class="list-group-item width-b"> FRANCE TV </li>
<li class="list-group-item width-b"> POLAND TV </li>
</ul>
<ul class="list-group list-group-horizontal"> 
<li  class="list-group-item width-b"> CZECH TV </li>
<li  class="list-group-item width-b"> UK TV </li>
<li  class="list-group-item width-b"> USA TV </li>
<li  class="list-group-item width-b"> CANADA TV </li>
</ul>

<ul class="list-group list-group-horizontal">
<li  class="list-group-item width-b"> YES TV </li>
<li  class="list-group-item width-b"> CANADA TV </li>
<li  class="list-group-item width-b"> BELGIUM TV </li>
<li  class="list-group-item width-b"> SPAIN TV </li>
</ul>
<ul class="list-group list-group-horizontal"> 
<li class="list-group-item width-b"> BELGIUM TV </li>
<li  class="list-group-item width-b"> PORTUGAL TV </li>
<li  class="list-group-item width-b"> GREECE TV </li>
<li  class="list-group-item width-b"> SWITZERLAND  </li>

</ul>
<ul class="list-group list-group-horizontal"> 
<li  class="list-group-item width-b"> ALBANIA TV </li>
<li  class="list-group-item width-b"> SERBIA TV </li>
<li  class="list-group-item width-b"> BOSNIA TV </li>
<li  class="list-group-item width-b"> MACEDONIA TV </li>
</ul>

<ul class="list-group list-group-horizontal">
<li  class="list-group-item width-b"> ARMENIA TV </li>
<li  class="list-group-item width-b"> INDIA TV </li>
<li  class="list-group-item width-b"> PAKISTAN TV </li>
<li  class="list-group-item width-b"> AFGANSTAN TV </li>

</ul>
<ul class="list-group list-group-horizontal">
<li  class="list-group-item width-b"> IRAN TV </li>
<li  class="list-group-item width-b"> ASIA TV </li>
<li  class="list-group-item width-b"> AFRICA TV </li>
<li  class="list-group-item width-b"> LATINO TV </li>
</ul>
<ul class="list-group list-group-horizontal">
<li  class="list-group-item width-b"> LITHUANIA TV </li>
<li  class="list-group-item width-b"> BULAGRIA TV </li>
<li  class="list-group-item width-b"> HUNGARY TV </li>
<li  class="list-group-item width-b"> ROMANIA TV </li>
</ul>

<ul class="list-group list-group-horizontal">
<li  class="list-group-item width-b"> RUSSIA TV </li>
<li  class="list-group-item width-b"> CROATIA TV </li>
<li  class="list-group-item width-b"> GEORGIA TV </li>
<li  class="list-group-item width-b"> SLOVENIA TV </li>
</ul>
<ul class="list-group list-group-horizontal">
<li class="list-group-item width-b"> AZERBAIJAN TV </li>
<li  class="list-group-item width-b"> LATVIA TV </li>
<li  class="list-group-item width-b"> BRAZIL TV </li>
</ul>



</div>

<div class="col-12 col-md-6 box-shd">
<h5 dir="auto"> MOVIES</h5>
<ul class="list-group list-group-horizontal">
  <li class="list-group-item width-b">KIDS MOVIES / افلام اطفال </li>
  <li class="list-group-item width-b"> ARABIC MOVIES / افلام عربية </li>
  <li class="list-group-item width-b">ENGLISH MOVIES / افلام انكليزية </li>
  <li class="list-group-item width-b">INDIAN MOVIES / افلام هندية </li>
  
  
  </ul>
  <ul class="list-group list-group-horizontal">
  <li class="list-group-item width-b">CHRISTIAN MOVIES / افلام مسيحية  </li>
  <li class="list-group-item width-b">GERMANY MOVIES / افلام المانية </li>
  <li class="list-group-item width-b">ASIAN MOVIES / افلام اسيوية </li>
  <li class="list-group-item width-b">TURKISH MOVIES / افلام تركية </li>
 
  </ul>
  
<ul class="list-group list-group-horizontal">
<li class="list-group-item width-b">SCANDINAVIAN MOVIES / افلام اسكندنافية </li>
  
  <li class="list-group-item width-b"> NETHERLANDS MOVIES / افلام هولندية </li>
  <li class="list-group-item width-b">FRENCH MOVIES / افلام فرنسية </li>
  <li class="list-group-item width-b">ITALY MOVIES / افلام ايطالية </li>
  </ul>
 
  <ul class="list-group list-group-horizontal">
  <li class="list-group-item width-b">SPAIN MOVIES / افلام اسبانية </li>
  <li class="list-group-item width-b">ALBANIA MOVIES / افلام البانية </li>
  <li class="list-group-item width-b">EX_YU MOVIES / افلام يوغسلافية </li>
  <li class="list-group-item width-b">BULGARIA MOVIES / افلام بلغارية </li>
  </ul>
<ul class="list-group list-group-horizontal">
<li class="list-group-item width-b">GREECE MOVIES / افلام يونانية </li>
  <li class="list-group-item width-b">RUSSIA MOVIES / افلام روسية </li>
  <li class="list-group-item width-b"> POLAND MOVIES / أفلام بولندية </li>
  <li class="list-group-item width-b"> IRAN MOVIES / أفلام ايرانية </li>
  
  </ul>
  <ul class="list-group list-group-horizontal">
  <li class="list-group-item width-b">KURDISH MOVIES / افلام كردية </li>
  <li class="list-group-item width-b">MOVIES AFRICA / أفلام أفريقية </li>
  <li class="list-group-item width-b">BELLY DANCE / الرقص الشرقي </li>
 
  </ul>
  <h5 dir="auto"> SERIES</h5>
  <ul class="list-group list-group-horizontal">
  <li class="list-group-item width-b">KIDS SERIES / مسلسلات اطفال </li>
  <li class="list-group-item width-b">ARABIC SERIES / مسلسلات عربية </li>
  <li class="list-group-item width-b">TURKISH SERIES / مسلسلات تركية </li>
  <li class="list-group-item width-b"> ENGLISH SERIES / مسلسلات انكليزية </li>
  </ul>

  <ul class="list-group list-group-horizontal">
  <li class="list-group-item width-b"> INDIAN SERIES / مسلسلات هندية </li>
  <li class="list-group-item width-b">ASIAN SERIES / مسلسلات اسيوية </li>
  <li class="list-group-item width-b">GERMANY SERIES / مسلسلات المانية </li>
  <li class="list-group-item width-b">SWEDEN SERIES / مسلسلات سويدية </li>
  </ul>
  <ul class="list-group list-group-horizontal">
  <li class="list-group-item width-b">FRENCH SERIES / مسلسلات فرنسية </li>
  <li class="list-group-item width-b">SPANISH SERIES / مسلسلات اسبانية  </li>
  
  </ul>

</div>

{/* //////////////////// */}

<div class="col-md-6">
<div class="form-group " >



</div>
</div>
              </div>
              </div>
              
              
    
<button className="cart btn btn-info col-12">تواصل واتس اب</button>      


            </div>
          ))
        }
      </div>
    );
  };
}

export default Carousels;