function DadosBancarios() {
    return (
      <section className="bg-white p-6 shadow-md rounded-lg mb-6">
        <h3 className="text-xl font-bold mb-4">Dados Bancários</h3>
        <div className="grid grid-cols-2 gap-4">
          <p>Chave PIX: <span className="font-semibold">41.982.834/0001-27</span></p>
          <p>Banco: <span className="font-semibold">CG Bank (3536)</span></p>
          <p>Agência: <span className="font-semibold">0001</span></p>
          <p>Conta Corrente: <span className="font-semibold">8426905-9</span></p>
          <p>Favorecido: <span className="font-semibold">Mima Jornada Alimentar</span></p>
        </div>
      </section>
    );
  }
  
  export default DadosBancarios;
  