import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer (){
    return(
        <footer className="fondoNegro colorBlanco d-flex justify-content-evenly align-bottom fixed-bottom">
      <div>
      <h6 className="my-4">INFORMACION UTIL</h6>
        <p className="small d-flex m-2 text-decoration-none colorBlanco">SOBRE NOSOTROS</p>
        <p className="small d-flex m-2 text-decoration-none colorBlanco">PREGUNTAS FRECUENTES</p>
        <p className="small d-flex m-2 text-decoration-none colorBlanco">TERMINOS Y CONDICIONES</p>
      </div>
      <div>
        <h6 className="my-4">CONTACTANOS</h6>
          <p className="small d-flex m-2 text-decoration-none colorBlanco">UBICACION</p>
          <p className="small d-flex m-2 text-decoration-none colorBlanco">Tel. 11-3544-2211</p>
          <p className="small d-flex m-2 text-decoration-none colorBlanco">Lun a Vie de 9:00 A 18:00hs</p>
      </div>
      <div>
        <h6 className="my-4">SEGUINOS EN LAS REDES</h6>
          <div className="d-flex justify-content-between">
            <InstagramIcon fontSize="large"/>
            <TwitterIcon fontSize="large"/>
            <FacebookIcon fontSize="large"/>        
          </div>
        </div>
    </footer>
    )
}

export default Footer