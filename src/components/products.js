import React from 'react';
import { NavLink, Route } from 'react-router-dom'
import Product from './product'

class Products extends React.Component {
  render() {
    let products = [
      {
        id: 1,
        name: 'Do',
        price: 1000
      },
      {
        id: 2,
        name: 'Do Do',
        price: 1000
      },
      {
        id: 3,
        name: 'Do Do Do',
        price: 1000
      }
    ]

    let { match } = this.props
    let url = match.url

    let eleProduct = products.map((product, index) => {
      return (
        <NavLink key={index} to={`${url}/${product.id}`}>
          <li className="list-group-item">{product.id}-{product.name}-{product.price}</li>
        </NavLink>
      )
    })

    return (
      <div className="Product mt-5">
        <h1>Products</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6 ml-auto mr-auto">
              <ul className="list-group">
                {eleProduct}
              </ul>
            </div>
          </div>
          <div className="row">
            <Route path="/products/:id" component={Product}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
