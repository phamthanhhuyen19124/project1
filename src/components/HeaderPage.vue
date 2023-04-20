<template>
  <div>
    <header class="header-area">
      <!-- main header start -->
      <div class="main-header d-none d-lg-block">
        <!-- header top start -->
        <div class="header-top theme-color-5">
          <div class="container bdr-bottom-5">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="header-top-settings">
                  <ul class="nav align-items-center">
                    <li class="language">
                      <span>Language:</span>
                      English
                      <i class="fa fa-angle-down"></i>
                      <ul class="dropdown-list">
                        <li><a href="#"><img src="assets/img/icon/en.png" alt=""> english</a></li>
                        <li><a href="#"><img src="assets/img/icon/fr.png" alt=""> french</a></li>
                      </ul>
                    </li>
                    <li class="curreny-wrap">
                      <span>Currency:</span>
                      $ USD
                      <i class="fa fa-angle-down"></i>
                      <ul class="dropdown-list curreny-list">
                        <li><a href="#">$ usd</a></li>
                        <li><a href="#"> € EURO</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="header-links">
                  <ul class="nav justify-content-end">
                    <li>Welcome to Gengar</li>
                    <li><router-link to="/login">Sign In</router-link></li>
                    <li><router-link to="/register">Create an Account</router-link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- header top end -->

        <!-- header middle area start -->
        <div class="header-middle-area theme-color-5">
          <div class="container">
            <div class="row align-items-center">
              <!-- start logo area -->
              <div class="col-lg-3">
                <div class="logo">
                  <router-link to="/home">
                     <img src="../assets/img/logo/logo.png" alt="">
                  </router-link>
                </div>
              </div>
              <!-- start logo area -->

              <!-- start search box area -->
              <div class="col-lg-5">
                <div class="search-box-wrapper">
                  <form class="search-box-inner">
                    <input type="text" class="search-field" placeholder="Enter your search key">
                    <button class="search-btn"><i class="ion-ios-search"></i></button>
                  </form>
                </div>
              </div>
              <!-- start search box end -->

              <!-- mini cart area start -->
              <div class="col-lg-4">
                <div class="header-configure-wrapper">
                  <div class="header-configure-area">
                    <ul class="nav justify-content-end">
                      <li>
                        <a href="wishlist.html">
                          <i class="ion-android-favorite-outline"></i>
                        </a>
                      </li>
                      <li>
                        <a href="compare.html">
                          <i class="ion-stats-bars"></i>
                        </a>
                      </li>
                      <li class="mini-cart-wrap">
                        <a href="cart.html">
                          <i class="ion-bag"></i>
                        </a>
                        <ul class="cart-list">
                          <li>
                            <div class="cart-img">
                              <a href="product-details.html"><img src="assets/img/cart/cart-1.jpg" alt=""></a>
                            </div>
                            <div class="cart-info">
                              <h4><a href="product-details.html">simple product</a></h4>
                              <span class="cart-qty">Qty: 1</span>
                              <span>$60.00</span>
                            </div>
                            <div class="del-icon">
                              <i class="fa fa-times"></i>
                            </div>
                          </li>
                          <li>
                            <div class="cart-img">
                              <a href="product-details.html"><img src="assets/img/cart/cart-2.jpg" alt=""></a>
                            </div>
                            <div class="cart-info">
                              <h4><a href="product-details.html">virtual product</a></h4>
                              <span class="cart-qty">Qty: 2</span>
                              <span>$100.00</span>
                            </div>
                            <div class="del-icon">
                              <i class="fa fa-times"></i>
                            </div>
                          </li>
                          <li class="mini-cart-price">
                            <span class="subtotal">subtotal : </span>
                            <span class="subtotal-price ml-auto">$110.00</span>
                          </li>
                          <li>
                            <div class="mini-cart-button">
                              <a class="check-btn" href="cart.html">View Cart</a>
                              <a class="check-btn" href="checkout.html">checkout</a>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- mini cart area end -->
            </div>
          </div>
        </div>
        <!-- header middle area end -->

        <!-- main menu area start -->
        <div class="main-menu-area bg-white">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-3">
                <div class="category-toggle-wrap">
                  <div class="category-toggle">
                    <i class="ion-android-menu"></i>
                    shop by categories
                  </div>
                  <nav class="category-menu category-menu-style_2">
                    <ul class="categories-list">
                      <li class="menu-item-has-children"><a href="shop.html">Fruits & Vegetables</a>
                        <!-- Mega Category Menu Start -->
                        <ul class="category-mega-menu dropdown">
                          <li class="menu-item-has-children">
                            <a href="shop.html">Smartphone</a>
                            <ul class="dropdown">
                              <li><a href="shop.html">Samsome</a></li>
                              <li><a href="shop.html">GL Stylus</a></li>
                              <li><a href="shop.html">Uawei</a></li>
                              <li><a href="shop.html">Cherry Berry</a></li>
                            </ul>
                          </li>
                          <li class="menu-item-has-children">
                            <a href="shop.html">headphone</a>
                            <ul class="dropdown">
                              <li><a href="shop.html">Desktop Headphone</a></li>
                              <li><a href="shop.html">Mobile Headphone</a></li>
                              <li><a href="shop.html">Wireless Headphone</a></li>
                              <li><a href="shop.html">LED Headphone</a></li>
                            </ul>
                          </li>
                          <li class="menu-item-has-children">
                            <a href="shop.html">accessories</a>
                            <ul class="dropdown">
                              <li><a href="shop.html">Power Bank</a></li>
                              <li><a href="shop.html">Data Cable</a></li>
                              <li><a href="shop.html">Power Cable</a></li>
                              <li><a href="shop.html">Battery</a></li>
                            </ul>
                          </li>
                          <li class="menu-item-has-children">
                            <a href="shop.html">headphone</a>
                            <ul class="dropdown">
                              <li><a href="shop.html">Desktop Headphone</a></li>
                              <li><a href="shop.html">Mobile Headphone</a></li>
                              <li><a href="shop.html">Wireless Headphone</a></li>
                              <li><a href="shop.html">LED Headphone</a></li>
                            </ul>
                          </li>
                        </ul><!-- Mega Category Menu End -->
                      </li>
                      <li class="menu-item-has-children"><a href="shop.html">Fresh Meat</a>
                        <!-- Mega Category Menu Start -->
                        <ul class="category-mega-menu dropdown three-column">
                          <li class="menu-item-has-children">
                            <a href="shop.html">Smartphone</a>
                            <ul class="dropdown">
                              <li><a href="shop.html">Samsome</a></li>
                              <li><a href="shop.html">GL Stylus</a></li>
                              <li><a href="shop.html">Uawei</a></li>
                              <li><a href="shop.html">Cherry Berry</a></li>
                              <li><a href="shop.html">uPhone</a></li>
                            </ul>
                          </li>
                          <li class="menu-item-has-children">
                            <a href="shop.html">headphone</a>
                            <ul class="dropdown">
                              <li><a href="shop.html">Desktop Headphone</a></li>
                              <li><a href="shop.html">Mobile Headphone</a></li>
                              <li><a href="shop.html">Wireless Headphone</a></li>
                              <li><a href="shop.html">LED Headphone</a></li>
                              <li><a href="shop.html">Over-ear</a></li>
                            </ul>
                          </li>
                          <li class="menu-item-has-children">
                            <a href="shop.html">accessories</a>
                            <ul class="dropdown">
                              <li><a href="shop.html">Power Bank</a></li>
                              <li><a href="shop.html">Data Cable</a></li>
                              <li><a href="shop.html">Power Cable</a></li>
                              <li><a href="shop.html">Battery</a></li>
                              <li><a href="shop.html">OTG Cable</a></li>
                            </ul>
                          </li>
                        </ul><!-- Mega Category Menu End -->
                      </li>
                      <li class="menu-item-has-children"><a href="shop.html">dairy & eggs</a>
                        <!-- Mega Category Menu Start -->
                        <ul class="category-mega-menu dropdown two-column">
                          <li class="menu-item-has-children">
                            <a href="shop.html">Smartphone</a>
                            <ul class="dropdown">
                              <li><a href="shop.html">Samsome</a></li>
                              <li><a href="shop.html">GL Stylus</a></li>
                              <li><a href="shop.html">Uawei</a></li>
                              <li><a href="shop.html">Cherry Berry</a></li>
                            </ul>
                          </li>
                          <li class="menu-item-has-children">
                            <a href="shop.html">headphone</a>
                            <ul class="dropdown">
                              <li><a href="shop.html">Desktop Headphone</a></li>
                              <li><a href="shop.html">Mobile Headphone</a></li>
                              <li><a href="shop.html">Wireless Headphone</a></li>
                              <li><a href="shop.html">LED Headphone</a></li>
                            </ul>
                          </li>
                        </ul><!-- Mega Category Menu End -->
                      </li>
                      <li><a href="shop.html">Frozen</a></li>
                      <li><a href="shop.html">Grocery</a></li>
                      <li><a href="shop.html">Kitchenware</a></li>
                      <li><a href="shop.html">Tools</a></li>
                      <li><a href="shop.html">Electronics</a></li>
                      <li><a href="shop.html">Kitchenware</a></li>
                      <li><a href="shop.html">Tools</a></li>
                      <li><a href="shop.html">Electronics</a></li>
                      <li><a href="shop.html">Electronics</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="main-menu home-main">
                  <!-- main menu navbar start -->
                  <nav class="desktop-menu">
                    <ul>
                      <li class="active"><a href="index.html">Home</a>
                      </li>
                      <li><router-link to="/about">About us</router-link>
                      </li>
                      <li><a href="shop.html">Stores</a></li>
                      <li><a href="blog-left-sidebar.html">Product <i class="fa fa-angle-down"></i></a>
                        <ul class="dropdown">
                          <li><a href="blog-left-sidebar.html">Baby Care</a></li>
                          <li><a href="blog-left-sidebar-2-col.html">Fashion</a></li>
                          <li><a href="blog-right-sidebar.html">Toys</a></li>
                          <li><a href="blog-right-sidebar-2-col.html">wellnes and hygiene</a></li>
                        </ul>
                      </li>
                      <li><a href="contact-us.html">News</a></li>
                      <li><a href="contact-us.html">Resources<i class="fa fa-angle-down"></i></a>
                        <ul class="dropdown">
                          <li><a href="blog-left-sidebar.html">Contact us</a></li>
                          <li><a href="blog-left-sidebar-2-col.html">Q&As</a></li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                  <!-- main menu navbar end -->
                </div>
              </div>
              <div class="col-lg-2">
                <div class="header-support2">
                  <p><i class="ion-android-call"></i> +880123456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- main menu area end -->
      </div>
      <!-- main header start -->

      <!-- mobile header start -->
      <div class="mobile-header d-lg-none d-md-block sticky">
        <!--mobile header top start -->
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12">
              <div class="mobile-main-header">
                <div class="mobile-logo">
                  <a href="index.html">
                    <img src="assets/img/logo/logo-black.png" alt="Brand Logo">
                  </a>
                </div>
                <div class="mobile-menu-toggler">
                  <div class="mini-cart-wrap">
                    <a href="cart.html">
                      <i class="ion-bag"></i>
                    </a>
                  </div>
                  <div class="mobile-menu-btn">
                    <div class="off-canvas-btn">
                      <i class="ion-android-menu"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="category-toggle-wrap">
                <div class="category-toggle">
                  <i class="ion-android-menu"></i>
                  all categories
                  <span><i class="ion-android-arrow-dropdown"></i></span>
                </div>
                <nav class="category-menu">
                  <ul class="categories-list">
                    <li class="menu-item-has-children"><a href="shop.html">Fruits & Vegetables</a>
                      <!-- Mega Category Menu Start -->
                      <ul class="category-mega-menu dropdown">
                        <li class="menu-item-has-children">
                          <a href="shop.html">Smartphone</a>
                          <ul class="dropdown">
                            <li><a href="shop.html">Samsome</a></li>
                            <li><a href="shop.html">GL Stylus</a></li>
                            <li><a href="shop.html">Uawei</a></li>
                            <li><a href="shop.html">Cherry Berry</a></li>
                          </ul>
                        </li>
                        <li class="menu-item-has-children">
                          <a href="shop.html">headphone</a>
                          <ul class="dropdown">
                            <li><a href="shop.html">Desktop Headphone</a></li>
                            <li><a href="shop.html">Mobile Headphone</a></li>
                            <li><a href="shop.html">Wireless Headphone</a></li>
                            <li><a href="shop.html">LED Headphone</a></li>
                          </ul>
                        </li>
                        <li class="menu-item-has-children">
                          <a href="shop.html">accessories</a>
                          <ul class="dropdown">
                            <li><a href="shop.html">Power Bank</a></li>
                            <li><a href="shop.html">Data Cable</a></li>
                            <li><a href="shop.html">Power Cable</a></li>
                            <li><a href="shop.html">Battery</a></li>
                          </ul>
                        </li>
                        <li class="menu-item-has-children">
                          <a href="shop.html">headphone</a>
                          <ul class="dropdown">
                            <li><a href="shop.html">Desktop Headphone</a></li>
                            <li><a href="shop.html">Mobile Headphone</a></li>
                            <li><a href="shop.html">Wireless Headphone</a></li>
                            <li><a href="shop.html">LED Headphone</a></li>
                          </ul>
                        </li>
                      </ul><!-- Mega Category Menu End -->
                    </li>
                    <li class="menu-item-has-children"><a href="shop.html">Fresh Meat</a>
                      <!-- Mega Category Menu Start -->
                      <ul class="category-mega-menu dropdown three-column">
                        <li class="menu-item-has-children">
                          <a href="shop.html">Smartphone</a>
                          <ul class="dropdown">
                            <li><a href="shop.html">Samsome</a></li>
                            <li><a href="shop.html">GL Stylus</a></li>
                            <li><a href="shop.html">Uawei</a></li>
                            <li><a href="shop.html">Cherry Berry</a></li>
                            <li><a href="shop.html">uPhone</a></li>
                          </ul>
                        </li>
                        <li class="menu-item-has-children">
                          <a href="shop.html">headphone</a>
                          <ul class="dropdown">
                            <li><a href="shop.html">Desktop Headphone</a></li>
                            <li><a href="shop.html">Mobile Headphone</a></li>
                            <li><a href="shop.html">Wireless Headphone</a></li>
                            <li><a href="shop.html">LED Headphone</a></li>
                            <li><a href="shop.html">Over-ear</a></li>
                          </ul>
                        </li>
                        <li class="menu-item-has-children">
                          <a href="shop.html">accessories</a>
                          <ul class="dropdown">
                            <li><a href="shop.html">Power Bank</a></li>
                            <li><a href="shop.html">Data Cable</a></li>
                            <li><a href="shop.html">Power Cable</a></li>
                            <li><a href="shop.html">Battery</a></li>
                            <li><a href="shop.html">OTG Cable</a></li>
                          </ul>
                        </li>
                      </ul><!-- Mega Category Menu End -->
                    </li>
                    <li class="menu-item-has-children"><a href="shop.html">dairy & eggs</a>
                      <!-- Mega Category Menu Start -->
                      <ul class="category-mega-menu dropdown two-column">
                        <li class="menu-item-has-children">
                          <a href="shop.html">Smartphone</a>
                          <ul class="dropdown">
                            <li><a href="shop.html">Samsome</a></li>
                            <li><a href="shop.html">GL Stylus</a></li>
                            <li><a href="shop.html">Uawei</a></li>
                            <li><a href="shop.html">Cherry Berry</a></li>
                          </ul>
                        </li>
                        <li class="menu-item-has-children">
                          <a href="shop.html">headphone</a>
                          <ul class="dropdown">
                            <li><a href="shop.html">Desktop Headphone</a></li>
                            <li><a href="shop.html">Mobile Headphone</a></li>
                            <li><a href="shop.html">Wireless Headphone</a></li>
                            <li><a href="shop.html">LED Headphone</a></li>
                          </ul>
                        </li>
                      </ul><!-- Mega Category Menu End -->
                    </li>
                    <li><a href="shop.html">Frozen</a></li>
                    <li><a href="shop.html">Grocery</a></li>
                    <li><a href="shop.html">Kitchenware</a></li>
                    <li><a href="shop.html">Tools</a></li>
                    <li><a href="shop.html">Electronics</a></li>
                    <li><a href="shop.html">Kitchenware</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <!-- mobile header top start -->
      </div>
      <!-- mobile header end -->
    </header>
  </div>
</template>
<style scoped>
.categories-list {
  display: none;
}
p{
  margin-bottom: 0;
}
</style>