import React, { Component } from 'react';


class ProductsCategories extends Component {
    constructor() {
        super();
        this.state = {
            count: "0",
            moreSell: "0",
            encuentraTuCasa: "0",
            nuevosIngresos: "0",
        };
    }
    componentDidMount() {
        fetch("http://localhost:3001/api/products/moreSell", { method: "GET" })
            .then(response => response.json())
            .then(data => {
                this.setState(
                    {
                        moreSell: data.products.category_Id === "100",
                        count: data.meta.count,
                    }
                )
            })
            .catch(error => console.log(error));
        fetch("http://localhost:3001/api/products/", { method: "GET" })
            .then(response => response.json())
            .then(data => {
                this.setState(
                    {
                        encuentraTuCasa: data.products.category_Id === "101",
                        count: data.count,
                    }
                )
            })
            .catch(error => console.log(error));
        fetch("http://localhost:3001/api/products/", { method: "GET" })
            .then(response => response.json())
            .then(data => {
                this.setState(
                    {
                        nuevosIngresos: data.products.category_Id === "102",
                        count: data.count,
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
                                        <div className="card-body bgcat">Más vendidos: 7 </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="text-white shadow">
                                        <div className="card-body bgcat">Encuentra tu casa: 8</div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="text-white shadow">
                                        <div className="card-body bgcat">Nuevos ingresos: 6</div>
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