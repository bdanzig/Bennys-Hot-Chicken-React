import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props){
        super(props);
    }
    
    renderComments(dish){
        if(dish!= null){
            let options = { year: 'numeric', month: 'short', day: 'numeric' };
            
            const commentlist = dish.comments.map((commentUnit) => {
                return(
                    <div className="list-unstyled">
                    <div key={commentUnit.id} className="li">
                        <p>{commentUnit.comment}</p>
                        <p>--{commentUnit.author}, <span>{new Date(commentUnit.date).toLocaleDateString("en-US", options)}</span></p>

                    </div>
                    </div>
                );
            })
            return(
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {commentlist}
                    </div>
            );
        }
        else{
            return(
                <div />
            )
        }
    }

    renderDishCard(dish){
        if(dish != null){
            return(
                <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle><h5><b>{dish.name}</b></h5></CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            );
        }
        else{
            return(
                <div />
            )
        }
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDishCard(this.props.dish)}
                    </div>
                    {this.renderComments(this.props.dish)}
                </div>
            </div>
        );
    }

}
export default DishDetail;