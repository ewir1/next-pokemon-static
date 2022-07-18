import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { Card, Container, Grid, Image, Text } from '@nextui-org/react'
import { Layout } from '../../components/layouts'
import NoFavorites from '../../components/ui/NoFavorites'
import { localfavorites } from '../../utils'
import FavoritesPokemons from '../../components/ui/FavoritesPokemons'

const Favorites: NextPage = () => {
  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setfavoritePokemons(localfavorites.pokemons())
  }, [])


  return (
    <Layout title='Pokemon - Favoritos'>
      {favoritePokemons.length === 0 ? <NoFavorites /> : 
        <FavoritesPokemons pokemons={favoritePokemons} />
      }
    </Layout>
  )
}

export default Favorites