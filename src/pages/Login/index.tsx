import Forms from '../../components/Forms';
import styles from './Login.module.css';
function Login() {
  return (
    <main>
      <section className={styles.container_left}>
        {/* Foto de Engin Akyurt: https://www.pexels.com/pt-br/foto/lampada-ao-lado-dos-livros-na-prateleira-2767814/ */}
      </section>
      <section className={styles.container_right}>
        <div className={styles.container_form}>
          <img src='src/assets/images/logo.png' alt='Logo Mundo das Letras' />
          <span>
            <h3 className='roboto-light'>Que bom te ver aqui</h3>
            <h2>Acesse sua conta</h2>
          </span>
          <Forms />
        </div>
      </section>
    </main>
  )
}

export default Login;
