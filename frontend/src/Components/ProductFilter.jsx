import React from 'react'

const ProductFilter = () => {
  return (
    <form method='GET'>
        <input name='min_price' placeholder='Min Price' type='number' style={{ width: 100 }} />
        &nbsp;&nbsp;
        <input name='max_price' placeholder='Max Price' type='number' style={{ width: 100 }} />
        &nbsp;&nbsp;
        <input name='search' placeholder='Search' type='text' />
        &nbsp;&nbsp;
        <button type='submit'>Search</button>
    </form>
  )
}

export default ProductFilter