import { Selection } from "./Home.styled";
function Home() {
  return (
    <Selection variant="home">
      <div class="hero_area" st="1">
        <header class="header_section long_section px-0">
          <nav class="navbar navbar-expand-lg custom_nav-container ">
            <a class="navbar-brand" href="index.html">
              <span>Edgecut</span>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class=""> </span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div class="d-flex mx-auto flex-column flex-lg-row align-items-center">
                <ul class="navbar-nav  ">
                  <li class="nav-item active">
                    <a class="nav-link" href="index.html">
                      Home <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="about.html">
                      {" "}
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="furniture.html">
                      Furnitures
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="blog.html">
                      Blog
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="contact.html">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div class="quote_btn-container">
                <a href="">
                  <span>Login</span>
                  <i class="fa fa-user" aria-hidden="true"></i>
                </a>
                <form class="form-inline">
                  <button
                    class="btn  my-2 my-sm-0 nav_search-btn"
                    type="submit"
                  >
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </header>
        <section class="slider_section long_section">
          <div id="customCarousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="container ">
                  <div class="row">
                    <div class="col-md-5">
                      <div class="detail-box">
                        <h1>
                          For All Your <br />
                          Furniture Needs
                        </h1>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Minus quidem maiores perspiciatis, illo maxime
                          voluptatem a itaque suscipit.
                        </p>
                        <div class="btn-box">
                          <a href="" class="btn1">
                            Contact Us
                          </a>
                          <a href="" class="btn2">
                            About Us
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-7">
                      <div class="img-box">
                        <img src="images/slider-img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="container ">
                  <div class="row">
                    <div class="col-md-5">
                      <div class="detail-box">
                        <h1>
                          For All Your <br />
                          Furniture Needs
                        </h1>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Minus quidem maiores perspiciatis, illo maxime
                          voluptatem a itaque suscipit.
                        </p>
                        <div class="btn-box">
                          <a href="" class="btn1">
                            Contact Us
                          </a>
                          <a href="" class="btn2">
                            About Us
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-7">
                      <div class="img-box">
                        <img src="images/slider-img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="container ">
                  <div class="row">
                    <div class="col-md-5">
                      <div class="detail-box">
                        <h1>
                          For All Your <br />
                          Furniture Needs
                        </h1>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Minus quidem maiores perspiciatis, illo maxime
                          voluptatem a itaque suscipit.
                        </p>
                        <div class="btn-box">
                          <a href="" class="btn1">
                            Contact Us
                          </a>
                          <a href="" class="btn2">
                            About Us
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-7">
                      <div class="img-box">
                        <img src="images/slider-img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ol class="carousel-indicators">
              <li
                data-target="#customCarousel"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#customCarousel" data-slide-to="1"></li>
              <li data-target="#customCarousel" data-slide-to="2"></li>
            </ol>
          </div>
        </section>
      </div>
    </Selection>
  );
}
export default Home;
