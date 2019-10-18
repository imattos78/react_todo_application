import React from "react"
import "./style.css"

class Item extends React.Component {
    render() {
        return (
            
            <div className="row item-row">
            <div className="col-12 col-md-6 test text">
                <p className="prod-to-buy">
                <i class="fas fa-angle-right arrow">
                 </i> Cat Food</p>
            </div>
                   
                <div className="col-6 show left">
                    <button type="button" className="buttons"><i className="fas fa-check-circle check-icon"></i></button>
                </div>
                <div className="col-6 show">
                    <button type="button" className="buttons"><i className="fas fa-times-circle cruz-icon"></i></button>
                </div>
                <div class="col-3 b-left d-none d-md-block">
                {/* <button type="button" class="btn btn-primary">Primary</button> */}

                    <button type="button" className="add-button">Done</button>
                </div>
                <div class=" col-3 b-rigth d-none d-md-block">
                {/* <button type="button" class="btn btn-danger">Delete</button> */}
                    <button type="button" className="del-button">Delete</button>
                </div>
            </div>
        
       
    
       
        );
    }
}

export default Item