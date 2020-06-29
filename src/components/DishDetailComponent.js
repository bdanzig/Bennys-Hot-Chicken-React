import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css'
    
    function RenderComments({comments}){
        if(comments != null){
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
            return(
                    <div className=" m-1">
                        <h4>Comments</h4>
                        {commentlist}
                    </div>
            );
        }
        else{
            return(
                <div>
                    Comments not passed in correctly.
                </div>
            )
        }
    }

    function RenderDishCard({dish}){
        if(dish != null){
            return(
                <Card>
                <CardImg width="100%" src={'../' + dish.image} alt={dish.name} />
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

    const DishDetail = (props) =>{
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDishCard dish={props.dish} />
                    </div>
                    <div className="comment-sec ml-3">
                        <RenderComments comments={props.dishComments} />
                    </div>
                </div>
            </div>
        );
    }

export default DishDetail;