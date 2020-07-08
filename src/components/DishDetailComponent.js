import React, { Component } from 'react';
import { Card, CardImg, Button, CardText, CardBody, CardTitle, Row, Label, Col, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent'
import '../App.css'

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || ((""+val).length <= len);
const minLength = (len) => (val) => val && ((""+val).length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    handleSubmit(values){
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    render(){
        return(
            <>
            <Button className="ml-2 mb-2" onClick={this.toggleModal}>Leave A Comment!</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <div className="col-12 col-md-9">
                <ModalHeader>New Comment</ModalHeader>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group mt-2">
                        <Label htmlFor="author" md={2}>Name</Label>
                        <Col md={10}>
                            <Control.text 
                            model=".author" 
                            className="form-control" 
                            id="author" 
                            name="author" 
                            placeholder="Ben Chang" 
                            validators={{
                                required, minLength: minLength(3), maxLength: maxLength(15)
                            }} />  
                            <Errors 
                            className="text-danger"
                            model=".author"
                            show="touched"
                            messages={{
                                required: "Required ",
                                minLength: "Must be greater than 2 characters ",
                                maxLength: "Must be 15 characters or less "
                            }}
                            /> 
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="rating" md={2}>Rating</Label>
                        <Col md={10}>
                            <Control.select
                            model=".rating" 
                            className="form-control" 
                            id="rating" 
                            name="rating" >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="comment" md={3}>Comment</Label>
                        <Col md={9}>
                            <Control.textarea
                            rows='6'
                            model=".comment" 
                            className="form-control" 
                            id="comment" 
                            name="comment" />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col md={{size: 10, offset: 5}}>
                            <Button type="submit" color="primary" >Post Comment</Button>
                        </Col>
                    </Row>
                </LocalForm>
                </div>
            </Modal>
            </>
        );
    }
}

function RenderComments({comments, addComment, dishId}){
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
                    <CommentForm dishId={dishId} addComment={addComment}/>
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
    if (props.isLoading){
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if(props.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else{
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
                        <RenderComments comments={props.dishComments}
                            addComment={props.addComment}
                            dishId={props.dish.id} />
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;