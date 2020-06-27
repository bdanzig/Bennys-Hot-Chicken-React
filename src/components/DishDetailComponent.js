import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props){
        super(props);
    }
    
    renderComments(comments){
        let options = { year: 'numeric', month: 'short', day: 'numeric' };
        
        const commentlist = comments.map((commentUnit) => {
            return(
                <div className="list-unstyled">
                <div key={commentUnit.id} className="li">
                    <p>{commentUnit.comment}</p>
                    <p>--{commentUnit.author}, <span>{new Date(commentUnit.date).toLocaleDateString("en-US", options)}</span></p>

                </div>
                </div>
            );
        })
        if(comments != null){
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

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                                <CardTitle><h5><b>{this.props.dish.name}</b></h5></CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    {this.renderComments(this.props.dish.comments)}
                </div>
            </div>
        );
    }

}
export default DishDetail;