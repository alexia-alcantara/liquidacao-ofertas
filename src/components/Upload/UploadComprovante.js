import React, { useState } from "react";

function UploadComprovante() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && (selectedFile.type === "application/pdf" || selectedFile.type.includes("image"))) {
      if (selectedFile.size <= 25 * 1024 * 1024) {
        setFile(selectedFile);
      } else {
        alert("O arquivo deve ter no máximo 25MB.");
      }
    } else {
      alert("Somente arquivos PDF, JPEG ou PNG são suportados.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      // lógica para envio do arquivo
      console.log("Arquivo enviado:", file);
    }
  };

  return (
    <form className="bg-white p-6 shadow-md rounded-lg mb-6" onSubmit={handleSubmit}>
    <h3 className="text-xl font-bold mb-4">Anexe seu comprovante</h3>
      <input type="file" className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-green-600 file:text-white hover:file:bg-green-700" onChange={handleFileChange} accept="application/pdf, image/jpeg, image/png" />
      <button type="submit" className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">Enviar Comprovante</button>
    </form>
  );
}

export default UploadComprovante;

  