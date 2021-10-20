import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import axios from 'axios';

export default class Active extends React.Component {
  state = {
    actives: []
  }

  componentDidMount() {
    axios.get(`https://my-json-server.typicode.com/tractian/fake-api/assets`)
      .then(res => {
        const actives = res.data;
        this.setState({ actives });
      })
  }

  render() {
    return (
      <ul>
        { this.state.actives.map(active => <li>{active.name}</li>)}
      </ul>
    )
  }
}

/*function Active(props) {
  const { products } = props;
  return (
    <table>
      <caption>Our products</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>In Stock</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}*/

