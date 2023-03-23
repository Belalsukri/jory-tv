import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import Accordionex from './Accordion'
import CollapsibleExample from './Nave'
import { HashLink } from 'react-router-hash-link';
import Ende from './Ende'
export default function Home() {
  return (
    <div className=" profile-page sidebar-collapse" >
      
          {/* <nav class="navbar navbar-color-on-scroll fixed-top navbar-expand-lg col-12 navbar-transparent" color-on-scroll="100" id="sectionsNav">
            <div class="container">
                <a class="navbar-brand" href="#"><img class="my-logo" src="/img/logo-b.png" alt=""/></a>
                <button class="navbar-toggler shadow-none ms-2 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon mt-2">
    <span class="navbar-toggler-bar bar1"></span>
    <span class="navbar-toggler-bar bar2"></span>
    <span class="navbar-toggler-bar bar3"></span>
    </span>
    </button>
          
              <div class="navbar-collapse w-100 pt-3 pb-2 py-lg-0 ms-lg-12 ps-lg-5 collapse" id="navigation">
                  
                    <ul class="navbar-nav navbar-nav-hover mx-auto">
                      <li class="nav-item dropdown dropdown-hover mx-2">
                        <a class="nav-link" href="#home">Home<span class="sr-only">(current)</span></a>
                      </li>
                      
                      <li class="nav-item dropdown dropdown-hover mx-2">
                        <a class="nav-link" href="#about">About</a>
                      </li>
                      <li class="nav-item dropdown dropdown-hover mx-2">
                        <a class="nav-link" href="#projects">Projects</a>
                      </li>
                      <li class="nav-itemnav-item dropdown dropdown-hover mx-2">
                        <a class="nav-link" href="#contact">Contact Me</a>
                      </li>
                    </ul>
                    
                  
                </div>
            </div>
        </nav> */}
        <CollapsibleExample/>
    <div class="">
    <div className=" image col " >
  
  <div class="container">
            <div class="row align-items-center vh-100">
              <div class="col-lg-8 text-cold" >
                <h2 class="  mb-4 fw-bold">شاهد جميع الباقات <h2>العربيه و العالميه</h2><b class="d-block">بأفضل جوده</b></h2>
                <a href="listing-full.html" class="btn btn-sm btn-white btn-action  btn-secondary btn-cold">أطلب تجربتك<span class="icon-arrow-right"></span></a>
              </div>
            </div>
          </div>
          
  </div>
    </div>
    
 
  <div class="main main-raised" id="home">
    <div class="profile-content">
    <div class="container">
    
    <div class="col">
                    <div class="row">
                        <div class="col-md-6 m-auto text-center">
                            <h1>jory 4k</h1>
                            <p class="lead">نقدم لكم اكبر محتوى ترفيهي  شاهدبرامجك المفضله و جميع القنوات العربيه والعالميه و الاحداث الرياضيه بلاضافه لمكتبه افلام ومسلسلات ضخمه فريق عمل محترف تحديث يومي مستمر وخدمة العملاء 24 ساعه</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="space"></div>
                        </div>
                    </div>
            <section class="module bg-gray p-t-0 p-b-40">
                <div class="container">
                    <div class="space card1" ></div>
                    <div class="row  g-2">
                        <div class="col-lg-4  pricing-wrapper  border">
                            <div class="pricing-header ">
                                <div class="pricing-icon"><i class="ti-slice"></i></div>
                                <div class="pricing-title">السيرفر الاول </div>
                            </div>
                            <div class="pricing-price">€50
                            </div>
                            <div class="pricing-header-1 ">
                                
                                <div class="pricing-title"> شهر<>12 </></div>
                            </div>
                            <div class="pricing-body mt-2">
                                <p>الاشتراك الافضل في اوربا<br/>يتضمن كل القنوات العربيه والعالميه  <br/> جميع الاحداث الرياضيه بافضل جوده <br/>احدث الافلام والمسلسلات العالميه <br/>عدد كبير من الباقات الاجنبيه<br/>مناسب لمتابعي المحتوى الاجنبي    <br/>تحديث يومي <br/>دعم فني 24 ساعه</p>
                            </div>
                            <div class="pricing-footer text-center"><button type="button" class="btn btn-secondary"><HashLink class="btn btn-circle btn-brand" to={"/Dlta"}>اطلب تجربتك </HashLink></button></div>
                        </div>
                        <div class="col-lg-4  pricing-wrapper  border">
                            <div class="pricing-header ">
                                <div class="pricing-icon"><i class="ti-slice"></i></div>
                                <div class="pricing-title">السيرفر الذهبي</div>
                            </div>
                            <div class="pricing-price">€40
                            </div>
                            <div class="pricing-header-1 ">
                                
                                <div class="pricing-title"> شهر<>12 </></div>
                            </div>
                            <div class="pricing-body mt-2">
                                <p>الاشتراك المميز <br/>يتضمن كل القنوات العربيه والعالميه <br/> جميع الاحداث الرياضيه بافضل جوده <br/>احدث الافلام والمسلسلات العالميه <br/> عدد كبير من الباقات  العربيه<br/>مناسب لمتابعي المحتوى العربي <br/>تحديث يومي <br/>دعم فني 24 ساعه</p>
                            </div>
                            <div class="pricing-footer text-center"><button type="button" class="btn btn-secondary"><HashLink class="btn btn-circle btn-brand" to={"/Tango"}>اطلب تجربتك </HashLink></button></div>
                        </div>
                        <div class="col-lg-4  pricing-wrapper  border">
                            <div class="pricing-header ">
                                <div class="pricing-icon"><i class="ti-slice"></i></div>
                                <div class="pricing-title">السيرفر الفضي</div>
                            </div>
                            <div class="pricing-price">€30
                            </div>
                            <div class="pricing-header-1 ">
                                
                                <div class="pricing-title"> شهر<>12 </></div>
                            </div>
                            <div class="pricing-body mt-2">
                            <p>الاشتراك الفضي<br/>يتضمن اغلب القنوات العربيه والعالميه <br/> جميع الاحداث الرياضيه بافضل جوده <br/>احدث الافلام والمسلسلات العالميه <br/> عدد كبير من الباقات  العربيه<br/>مناسب لمتابعي المحتوى العربي <br/>تحديث كل اسبوع<br/>دعم فني </p>
                            </div>
                            <div class="pricing-footer text-center"><button type="button" class="btn btn-secondary"><a class="btn btn-circle btn-brand" href="#">اطلب تجربتك </a></button></div>
                        </div>
                    </div>
                    <div class="row">
                     
                    </div>
                </div>
            </section>
          <section class="py-4" id="about">
          <Accordionex/>
          </section>
          <Ende/>
            <a href="/file/smarters.apk" class="btn btn-bd-primary" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download source');">Download source</a>
                
    </div>
    
  </div>
     </div>
        
      
        
        

        	
        
   
    


  
  
  </div>
  
    </div>
  )
}
