function Contato() {
  return (
    <section className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-bold mb-4 text-center">Dúvidas e Sugestões</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-green-600 text-white p-4 rounded-lg flex justify-center items-center transition duration-300 hover:bg-green-700"> {/* Estilo do WhatsApp */}
          <p className="text-center">WhatsApp</p>
        </div>
        <div className="bg-gray-200 text-gray-700 p-4 rounded-lg flex justify-center items-center transition duration-300 hover:bg-gray-300"> {/* Estilo do Email */}
          <p className="text-center">investidores@eqseed.com</p>
        </div>
      </div>
    </section>
  );
  }
  
  export default Contato;
  