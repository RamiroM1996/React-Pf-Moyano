import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import tecnojimp from '../../assets/images/main_jimpstore.png';
import promo1 from '../../assets/images/promo1c3.png';
import promo3 from '../../assets/images/promo3.png';
import promo2 from '../../assets/images/promo2.png';
import './Inicio.css'
import '../../assets/css/animaciones.css'
import LoadingSpinner from '../../components/LoadingSpinner/';


function Inicio() {

  document.title = 'Inicio';


  if (promo3 === undefined) {
    return <section id="menu" className="py-5 text-center container">
      <div className="album bg-degrade py-5">
        <div className="container">
          <div className="">
            <LoadingSpinner />
          </div></div></div>
    </section>
  }
  return (
    <div>
      <section className="img1 position-relative pt-48 pb-40 bg-dark bg-cover bg-size--cover slide-in-fwd-center">
        {/* Overlay */}
        <span className="position-absolute top-0 start-0 w-full h-full bg-dark opacity-80" />
        {/* Contenido */}
        <div className="container-lg max-w-screen-xl position-relative overlap-10 text-center text-lg-start pt-5 pb-5 pt-lg-6">
          <div className="row row-grid align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              {/* Título */}
              <h1 className="ls-tight font-bolder display-5 text-white mb-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, exercitationem?
              </h1>
              {/* Texto */}
              <p className="lead text-white text-opacity-80 mb-10 w-lg-2/3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laborum vero cumque totam obcaecati in?
                {/* Botones */}
              </p><div className="mt-10 mx-n2">
                <Link to="/" className="btn btn-lg btn-primary shadow-sm mx-2 px-lg-8">
                  Ver Productos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <article>
          <div className="px-4 py-2 my-5 text-center d-lg-none d-xl-none">
            <img className="d-block mx-auto img-fluid mb-4" src={tecnojimp} />
            <h1 className="display-5 fw-bold">Lorem, ipsum dolor.</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eius sapiente alias. Non labore beatae eius cupiditate ullam deleniti veniam. Harum tenetur qui quidem! Facilis.</p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              </div>
            </div>
          </div>
          {/* Para Desktops */}
          <div className="container col-xxl-8 px-4 py-2 d-none d-lg-block">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <img src={tecnojimp} className="d-block mx-lg-auto img-fluid"  width={700} height={500} loading="lazy" />
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3">Lorem, ipsum dolor.</h1>
                <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus aspernatur eos suscipit aliquid, hic nam quaerat alias eaque ipsum officiis eligendi tenetur unde, perferendis ad.</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <Link to="/"><button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Ver Productos</button></Link>
                </div>
              </div>
            </div>
          </div>
        </article>
        <div className="pricing-header p-3 py-2 pb-md-4 mx-auto text-center">
          <h1 className="display-4 fw-normal">Lorem.</h1>
          <p className="fs-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, atque. </p>
        </div>
        <div className="mundos text-center container col-xxl-8 px-4 py-2 d-lg-block">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-primary">
                <div className="card-header py-3 text-white bg-primary bg-success border-primary">
                  <h4 className="my-0 fw-normal">Producto 1</h4>
                </div>
                <div className="card-bodyjimp rounded-bottom" >
                  <img src={promo1} height="230" width="230"  className="img-fluid" />
                  <h1 className="card-title pricing-card-title mt-3 text-white">desde $$$$</h1>
                  <Link to="/category/apple"><button type="button" className="w-100 btn btn-lg btn-primary">Comprar</button></Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-primary">
                <div className="card-header py-3 text-white bg-primary bg-success border-primary">
                  <h4 className="my-0 fw-normal">Producto 2</h4>
                </div>
                <div className="card-bodyjimp rounded-bottom">
                  <img src={promo2} height="230" width="230"  className="img-fluid" />
                  <h1 className="card-title pricing-card-title mt-3 text-white">Desde $$$$$</h1>
                  <Link to="/category/samsung"><button type="button" className="w-100 btn btn-lg btn-primary">Comprar</button></Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-primary">
                <div className="card-header py-3 text-white bg-primary bg-success border-primary">
                  <h4 className="my-0 fw-normal">Producto 3</h4>
                </div>
                <div className="card-bodyjimp rounded-bottom">
                  <img src={promo3} height="230" width="230"  className="img-fluid" />
                  <h1 className="card-title pricing-card-title mt-3 text-white">Desde $$$$</h1>
                  <Link to="/category/accesorios"><button type="button" className="w-100 btn btn-lg btn-primary">Comprar</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Inicio; 