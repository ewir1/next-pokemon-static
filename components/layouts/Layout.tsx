import React, { FC, ReactNode } from 'react'
import Head from 'next/head'
import Navbar from '../ui/Navbar';

type Props = {
  children?: ReactNode | ReactNode[];
  title?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title = 'Pokemon App' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Ewir Rodriguez" />
        <meta name="description" content={`Informacion sobre el pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />

        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={`Esta es la página sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />
      <main style={{
        padding: '0 20px'
      }}>
        {children}
      </main>
    </>
  )
}
