jQuery(function(){
    jQuery('#headerinc').html('
  <header id="header">
  <!-- Start header -->
    <!-- To enable search need server side script setup done, need to do the header top here..
    comment header top search
    <div class="header-top">
      <div class="container">
        <form action="">
          <div id="search">
          <input type="text" placeholder="Type your search keyword here and hit Enter..." name="s" id="m_search" style="display: inline-block;">
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </div>
        </form>
      </div>
    </div>
    comment header bottom 
    -->
    <div class="header-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-6 col-xs-6">
            <div class="header-contact">
              <ul>
                <li>
                  <div class="phone">
                    <i class="fa fa-phone"></i>
                    +1(408) 952-9571
                  </div>
                </li>
                <li>
                  <div class="mail">
                    <i class="fa fa-envelope"></i>
                    hkverma@paccel.com
                  </div>
                </li>
              </ul>
            </div>
          </div>
	  <!-- login when server is ready
          <div class="col-md-6 col-sm-6 col-xs-6">
            <div class="header-login">
              <a class="login modal-form" data-target="#login-form" data-toggle="modal" href="#">Login / Sign Up</a>
            </div>
          </div>
	  -->
        </div>
      </div>
    </div>
  <!-- End header -->
  </header>
');
    jQuery('.footer').html('SOME COMMON FOOTER');
});
