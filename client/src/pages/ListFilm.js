import React from 'react'
import { Container, Image } from 'react-bootstrap'

import film1 from "../assets/film1.svg"

const ListFilm = () => {
  return (
    <Container>
        <h1 className='text-light mb-5'>My List Film</h1>
        <Image src={film1} />
    </Container>
  )
}

export default ListFilm