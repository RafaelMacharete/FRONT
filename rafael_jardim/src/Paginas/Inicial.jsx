import JardimBackround from '../assets/jardim.jpg';
import { useNavigate } from 'react-router-dom';

export function Inicial() {
  const navigate = useNavigate();

  return (
    <main className="inicial">
      <img src={JardimBackround} className="background" alt="Logo DS GO" />

      <section className='entrar'>
        <h1 className='boas-vindas'>Bem vindo ao Jardim do Rafael</h1>
        <button onClick={() => navigate('/dsgo')} className='entrar-button'>
          Entrar
        </button>
      </section>
    </main>
  );
}
