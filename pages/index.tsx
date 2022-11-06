import Head from 'next/head'
import Image from 'next/image';

import nextLogo from '../public/next_logo.svg';
import logo_vercel from '../public/vercel_logo.svg';
import nextJS from '../public/Next.js.svg';

import { GlobalStyle } from '../styles/globals';
import { HomeContainer, HeaderContainer } from '../styles/Home';

import { BsArrowUpRight } from "react-icons/bs";

export default function Home() {
  return (
    <HomeContainer>
      <GlobalStyle />
      <Head>
        <title>Home</title>
      </Head>
      <HeaderContainer>
        <Image 
          src={logo_vercel} 
          alt='logo vercel'
          height={20}
          width={80}
        />
      </HeaderContainer>
      <main>
        <section>
          <div className='titleContainer'>
            <Image 
              src={nextJS}
              alt='logo do next'
              height={40}
              width={120}
            />
            <h1>Um framework dinâmico</h1>
          </div>
        </section>
        <section className='content'>
          <div className='card'>
            <Image 
              src={nextLogo} 
              alt='logo do next' 
            />
            <p>Framework de código aberto para React, com hospedagem no github sob a licença MIT.</p>
            <p>
              Seu foco é voltado para a produção e eficiência, reunindo 
              diversas funcionalidades como renderização híbrida e 
              estática de conteúdo, suporte a TypeScript, pre-fetching, entre outras funcionalidades.
            </p>
          </div>
          <div className='aboutNext'>
            <p>
              Por conta das páginas estáticas, os sites desenvolvidos com o Next.js 
              são extremamente rápidos, melhorando a satisfação dos usuários.
            </p>
            <p>
              Para tornar o carregamento de páginas mais rápido, o Next.js quebra o código automaticamente e 
              é assim que assegura uma capacidade de carregamento de página mais rápida, 
              já que os sites são criados para suportar um grande volume de acessos.
            </p>
            <div className='divider'></div>
            <div className='buttonsContainer'>
              <a href='https://nextjs.org/' className='btn btn-primary' target='_blank' rel="noreferrer">
                Leia a documentação
                <BsArrowUpRight 
                  color='white'
                />
              </a>
              <button 
                className='btn btn-secondary' 
              >
                Conheça a equipe
              </button>
            </div>
          </div>
        </section>
      </main>
    </HomeContainer>
  )
}
