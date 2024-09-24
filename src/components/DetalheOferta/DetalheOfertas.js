import './DetalheOferta.css';
import imgQrcode from '../../assets/img/qrcode.jpg';

const { default: UploadComprovante } = require("../Upload/UploadComprovante");

function DetalheOferta({ offer }) {
    return (
      <div className="offer-card">
        <h2>{offer.nome_oferta}</h2>
        <p>{offer.slogan}</p>
        <p>Status: {offer.status}</p>
        <p>Valor a ser liquidado: R${offer.valor_a_ser_liquidado}</p>
        <p>Validade: {offer.validade}</p>
        
        <h4>Informações Bancárias</h4>
        <p>PIX: {offer.chave_pix}</p>
        <p>Favorecido: {offer.nome_favorecido}</p>
        <p>Agência: {offer.agencia}</p>
        <p>Banco: {offer.banco} ({offer.numero_conta_corrente})</p>
        <p>CNPJ: {offer.cnpj}</p>

        {/* <img src={imgQrcode} class="img-fluid rounded-top" alt="img-qrcode" width={'17%'} /> */}
        
        <img src={offer.imgQrcode || imgQrcode} alt="QR Code para pagamento" width={'17%'} />
        
        <UploadComprovante />
      </div>
    );
  }
  
  export default DetalheOferta;