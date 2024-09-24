
import qrcode from '../../assets/img/qrcode.jpg';

function OfertaInfo() {
  return (
    <section className="bg-white p-6 shadow-md rounded-lg mb-6">
      <h1 className="text-2xl font-bold text-green-600">Você está quase lá!</h1>
      <p className="text-lg mt-2">Mima Jornada Alimentar</p>
      <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          <div className='flex flex-col md:flex-row w-full md:w-auto'>
              <div className="bg-[#f5f7f9] border border-gray-300 rounded-l-lg p-2 h-12 flex items-center mb-2 md:mb-0 md:rounded-l-lg"> {/* Estilo da div de pagamento válido */}
                  <p className="text-gray-700 text-sm md:text-base">Pagamento válido até: <strong>24/04/2024</strong></p>
              </div>
              <div className="bg-[#015047] rounded-r-lg p-2 h-12 flex items-center"> {/* Estilo da div de valor */}
                  <p className="text-white text-sm md:text-base">Valor: <strong>R$ 15.000</strong></p>
              </div>
          </div>
          <img src={qrcode} alt="QR Code" className="w-24 h-24 md:w-32 md:h-32 ml-0 md:ml-4 mt-2 md:mt-0" />
      </div>
    </section>
  );
  }
  
  export default OfertaInfo;
  