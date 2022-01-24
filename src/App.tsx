import React from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'

import Drawer from '@material-ui/core/drawer'
import LinearProgress from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/Badge'
import { Wrapper } from './App.styles'
import { CartItemType } from './backend/data'
import { getProduct } from './backend/data'
import Item from './Items/Item'
function App() {
  const { data, isLoading, isError } = useQuery<CartItemType[]>(
    'products',
    getProduct
  )
  const getTotalItems = () => {}
  //what is ?

  const handleAddToCart = (clickedItem: CartItemType) => {}
  const handleRemoveFromCart = () => {}
  if (isLoading) return <LinearProgress />
  if (isError) return <h1>Can not load data...</h1>

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  )
}

export default App
