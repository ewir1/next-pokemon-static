import { Card, Grid, Row, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React from 'react'
import { SmallPokemon } from '../../interfaces'

type Props = {
    pokemon: SmallPokemon
}

export const PokemonCard: React.FC<Props> = ({ pokemon: { id, img, name } }) => {
    const router = useRouter();

    const onClick = () => {
        router.push(`/name/${name}`)
    }

    return (
        <Grid
            xs={6}
            sm={3}
            md={2}
            xl={1}
            key={id}
        >
            <Card
                onClick={onClick}
                isHoverable
                isPressable
                variant="bordered">
                <Card.Body>
                    <Card.Image src={img as string} width="100%" height={140} alt={name} />
                </Card.Body>
                <Card.Footer>
                    <Row justify="space-between">
                        <Text transform='capitalize'>{name}</Text>
                        <Text>#{id}</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}