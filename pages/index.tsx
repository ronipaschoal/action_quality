import type { NextPage } from 'next';
import Head from 'next/head';

import Header from '../components/Header';
import Home from '../components/Home';
import Section from '../components/Section';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import data from '../public/content/data.json';

const App: NextPage = () => {
  return (
    <div lang="pt-br">
      <Head>
        <title>{ data.head.title }</title>
        <link href="https://fonts.googleapis.com/css2?family=Merienda&display=swap" rel="stylesheet"></link>
        
        <link href="./font/viking.otf" rel="preload" as="font" crossOrigin=""></link>
        <link href="./font/futhark.otf" rel="preload" as="font" crossOrigin=""></link>
        <link href="./font/bastarda.ttf" rel="preload" as="font" crossOrigin=""></link>
        <link href="./font/aniron.ttf" rel="preload" as="font" crossOrigin=""></link>
        <link href="./font/cafe.ttf" rel="preload" as="font" crossOrigin=""></link>
        
        <meta name="description" content={ data.head.description } />
        <link rel="icon" href="./images/favicon.png" type="image/png" />
      </Head>

      <main>
        <Header data={data.header} />
        <Home data={data.home} />
        { data.sections.map((section, index) => {
          return(
            <Section key={index} data={section} />
          );
        })}
        <Contact data={data.contact} />
      </main>

      <Footer data={data.footer} />
    </div>
  )
}

export default App;
