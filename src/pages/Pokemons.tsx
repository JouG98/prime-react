import React, { FC } from 'react'
import { MainLayout, PokeList } from '../components'
import { IPropsPages } from '../interfaces'
import { useEffect, useState } from 'react';
import { IRespAPIPokemon } from '../interfaces/pokemon';
import { useAsync } from 'react-async-hook';

export const Pokemons: FC<IPropsPages> = ({title}) => {

    const url = `https://pokeapi.co/api/v2`;

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
      fetch(`${url}/pokemon`)
        .then(resp => resp.json())
        .then(console.log)
    }, [])
    

    const fetchPokemon = async () => (
        await fetch(`${url}/pokemon`)
    ).json();

    const {loading, error, result } =  useAsync(fetchPokemon, []);
  return (
    <MainLayout
        title={title}
    >
        <PokeList/>
    </MainLayout>
  )
}
