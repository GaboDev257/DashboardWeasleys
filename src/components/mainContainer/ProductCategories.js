import React, { Component } from 'react';


class ProductsCategories extends Component {
    constructor() {
        super();
        this.state = {
            productBestSeller: "0",
            productWorstSeller: "0",
            userBS: "0",
            userWS: "0"
        };
    }
    componentDidMount() {
        console.log("Me monté!!");
        fetch("http://localhost:5001/api/products/productSeller/", { method: "POST" })
            .then(response => response.json())
            .then(data => {
                this.setState(
                    {
                        productBestSeller: data.data.productBS,
                        productWorstSeller: data.data.productWS
                    }
                )
            })
            .catch(error => console.log(error));
        fetch("http://localhost:5001/api/products/usersSeller/", { method: "POST" })
            .then(response => response.json())
            .then(dataUser => {
                this.setState(
                    {
                        userBS: dataUser.data.userBS,
                        userWS: dataUser.data.userWS
                    }
                )
            })
            .catch(error => console.log(error));
    }
    render() {
        return (
            <React.Fragment>
                <div className="mx-auto  mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold title-sp">Categorías en Productos</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4 mb-4">
                                    <div className="text-white shadow">
                                        <div className="card-body bgcat">Más vendidos: {this.state.productBestSeller}</div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="text-white shadow">
                                        <div className="card-body bgcat">Encuentra tu casa: {this.state.productWorstSeller}</div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="text-white shadow">
                                        <div className="card-body bgcat">Nuevos ingresos: {this.state.productWorstSeller}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default ProductsCategories;