import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-6 hidden lg:block">
      <h2 className="text-xl font-bold mb-4">Meu Portfólio</h2>
      <ul>
        <li className="mb-2 text-gray-700">
          <FontAwesomeIcon icon={faHome} className="mr-2" /> Liquidação
        </li>
        <li className="text-green-600 font-semibold">
          <FontAwesomeIcon icon={faClipboardCheck} className="mr-2" /> Mima Jornada Alimentar
        </li>
        <li className="text-gray-700">
          <FontAwesomeIcon icon={faClipboardCheck} className="mr-2" /> Pet Delícia
        </li>
        <li className="text-gray-700">
          <FontAwesomeIcon icon={faUser} className="mr-2" /> Meu perfil
        </li>
      </ul>
    </aside>
  );
  }
  
  export default Sidebar;
  