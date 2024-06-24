import RoutesProvider from './config/RoutesConfig';
import { VagasProvider } from './pages/CadastrarVagasPage/VagasContext';


export default function App() {
  return (

    <VagasProvider>
      <RoutesProvider />
    </VagasProvider>

  );
}