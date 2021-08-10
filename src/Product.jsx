import React, { Component } from 'react';   

    class Product extends Component {
     //state = { 
    //     name:this.props.product.name,
    //     num:this.props.product.num
    //     //names:['ahmoed', 'mahmoud','ali']
      //}

     

    render() { 

        return (
            <div className = "row">
                {/* {this.props.children} */}
                <div className="col-2">
                   <span>{this.props.product.name}</span>
                </div>
                <div className="col">
                    <span className="grade grade-success">{this.props.product.num}</span>  
                    <button onClick =   {() => this.props.increament(this.props.product)} className="btn btn-success">+</button>
                    <span onClick = {() => this.props.delete(this.props.product)} ><i className="fas fa-trash m-2" ></i></span>
                </div>

                {/* <ul>
                    {this.state.names.map(name =>
                     <li key = {name}>{name}</li>
                    )}

                    
                </ul> */}
                
            </div>
        )
    }
}
 
export default Product;