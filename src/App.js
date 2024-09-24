import Sidebar from './components/Sidebar/Sidebar';
import OfertaInfo from './components/OfertaInfo/OfertaInfo';
import DadosBancarios from './components/DadosBancarios/DadosBancarios';
import ConsideracoesImportantes from './components/Consideracoes/ConsideracoesImportantes';
import UploadComprovante from './components/Upload/UploadComprovante';
import Contato from './components/Contato/Contato';
import ListaOfertas from './components/ListaOfertas/ListaOfertas';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <OfertaInfo />
        <DadosBancarios />
        <ConsideracoesImportantes />
        <UploadComprovante />
        <Contato />
        <ListaOfertas/>
      </main>
    </div>
  );
}

export default App;
