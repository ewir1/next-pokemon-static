import { Card, Grid } from '@nextui-org/react'
import React from 'react'
import FavoriteCardPokemon from './FavoriteCardPokemon';

type Props = {
    pokemons: number[];
}

const FavoritesPokemons: React.FC<Props> = ({ pokemons }) => {
    return (
        <Grid.Container gap={2} direction="row" justify="flex-start">
            {pokemons.map(id => (
                <FavoriteCardPokemon key={id.toString()} id={id} />
            ))}
        </Grid.Container>
    )
}

export default FavoritesPokemons