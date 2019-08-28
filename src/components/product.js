import React from 'react';

class Product extends React.Component {
  render() {
    let { match } = this.props

    return (
      <div className="home mt-5">
        <h1>Product : id = {match.params.id}</h1>
      </div>
    );
  }
}

export default Product;
