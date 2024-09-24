import React, { useEffect, useState } from "react";
import axios from "axios";
import DetalheOferta from "../DetalheOferta/DetalheOfertas";

function ListaOfertas() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    axios.get("https://66d62a1ef5859a704268886b.mockapi.io/api/v1/oferta")
      .then(response => setOffers(response.data))
      .catch(err => console.err("Erro ao carregar as ofertas:", err));
  }, []);

  return (
    <div>
      <h1>Ofertas de Investimento</h1>
      {offers.length > 0 ? (
        offers.map(offer => (
          <DetalheOferta key={offer.id} offer={offer} />
        ))
      ) : (
        <p>Carregando ofertas...</p>
      )}
    </div>
  );
}

export default ListaOfertas;
