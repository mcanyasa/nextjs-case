import Layout from "./layout";
import Carousel from 'react-bootstrap/Carousel';
import * as Icon from 'react-bootstrap-icons';

import styles from './card.module.css'

export default function Card({children}){
    return <div className={styles.container}>
    <Layout>

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i0.shbdn.com/photos/99/27/00/x16_984992700k1p.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i0.shbdn.com/photos/99/27/00/x16_984992700jpa.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i0.shbdn.com/photos/99/27/00/x16_984992700rui.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

    <div className="content mx-3">
      <h3 className={styles.productTitle}>Galaxy Note 20 Lite 64GB Siyah</h3>
      <button type="button" className="tag btn btn-secondary mx-1">SIFIR AYARINDA</button>
      <button type="button" className="tagName btn btn-dark"><Icon.ShieldCheck className="mx-1"/>Garantili</button>
      <p className="mt-3">İlk günden beri kılıfında özenle kullandım. Sıra sende!</p>
      <button
        type="button"
        className="seller btn btn-light mt-1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <div className="d-flex justify-content-left align-item-center">
        <div>
            <Icon.Person /> Satıcı: <b>Mustafa D*** </b> <div className="btn btn-warning"><Icon.Star style={{marginBottom: 3 +'px',marginRight: 3 + 'px'}}  />8.3</div>
        </div>
        
        
        </div>
       
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
          </div>
        </div>
      </div>

      <div className="priceArea mt-3">
        <div className={styles.prize}>6.500 <span>TL</span></div>
        <div className={styles.discountArea}>
            <div className={styles.discountPrizeArea}>
                <div className={styles.discountPrize}>
                    6780 TL
                    </div> 
                    <span>%5 bizden olsun</span>
                </div>
        </div>
        <div className={styles.cargo}>  <Icon.Box className="mx-2" /> <a href="#"> Ücretsiz Kargo</a></div>
        <div className={styles.installment}> <Icon.CreditCard className="mx-2" /><a href="#">1084 x 6 aya kadar taksit</a></div>
        <div className={styles.moneySafety}><Icon.Arrow90degLeft  className="mx-2" /><a href="#"> Paran Güvende</a></div>
        <div className=""> 
        <div className="shareAndLike d-flex justify-content-between mt-4">
            <>
            <div className={styles.shareAndLikeIconsArea}>
                <div className={styles.shareIcon}><a className="" href="#"><Icon.Upload /></a></div>
                <div className={styles.likeIcon}><a  href="#"><Icon.Heart /></a></div>
                
            </div>
                <button type="button" className="btn btn-dark">Hemen Al</button>
          
            
            </>
            </div>
            
      </div>
    </div>
    </div>
        </Layout>
    </div>
   }