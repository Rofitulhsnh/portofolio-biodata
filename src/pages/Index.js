import React, { Fragment } from 'react';

function Index(){
    return(

        <Fragment>
  <header className="header_section">
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg custom_nav-container">
        <a className="navbar-brand" href="index.html">
          <span>
            ROFITUL HASANAH
          </span>
        </a>
        <div className="" id="">
        </div>
      </nav>
    </div>
  </header>
  
  <section className="">
    <div className="slider_bg_box">
      <img src="ASSETS/images/gambar.png" alt=""/>
    </div>
    <div className="slider_bg"></div>
    <div className="container">
      <div className="col-md-9 col-lg-8">
        <div className="detail-box">
          <h1>
          こんにちは、クラス 12 Rpl 2 の Rofitul Hasanah です。
            <br/>
          </h1>
          <p>
        
          </p>
        </div>
      </div>
    </div>
  </section>



  <section className="info_section layout_padding2">
    <div className="container">
      <div className="row info_form_social_row">
        <div className="col-md-8 col-lg-9">
        </div>
        <div className="col-md-4 col-lg-3">

          <div className="social_box">
            <a href="">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="info_insta">
            <h4>
              Instagram
            </h4>
            <div className="insta_box">
              <div className="img-box">
                <img src="images/p2.png" alt=""/>
              </div>
              <p>
                @viiiiiiiiii04
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="info_detail">
            <h4>
              About Me
            </h4>
            <p className="mb-0">
               Hallo saya Rofitul Hasanah siswi SMKN 6 JEMBER kelas 12 jurusan REKAYASA PERANGKAT LUNAK
                 
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <h4>
            Contact Us
          </h4>
          <div className="info_contact">
            <a href="">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>
                Call +62 082132804376
              </span>
            </a>
          </div>
        </div>
      
  </section>
  
  <script src="js/jquery-3.4.1.min.js"></script>
  <script src="js/bootstrap.js"></script>
  <script src="js/custom.js"></script>
        </Fragment>
    )
}

export default Index;