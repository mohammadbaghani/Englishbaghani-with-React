import React, { Component } from 'react'
import './Product.css'
import MovieIcon from '@mui/icons-material/Movie';
import PaidIcon from '@mui/icons-material/Paid';
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import Face4Icon from '@mui/icons-material/Face4';
import swal from "sweetalert";
import { Table, Modal, Form } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaImdb } from "react-icons/fa";
export default class Product extends Component {


    componentDidMount() {
        AOS.init();
    }
    constructor(props) {
        super(props)
        this.state = {
            t: "",
            im: this.props.img,
            count: false,
        }

        this.a = this.a.bind(this)
        this.b = this.b.bind(this)
    }

    clickHandler(id) {
        let o = "به سبد خرید شما اضافه شد"
        let c = "فیلم " + this.props.title + ' ' + o
        swal({
            title: c,
            icon: "success",
            buttons: " باشه !",
        })

        this.props.onAddProduct(id)
    }

    filter() {

        let filtered = this.state.shoppingCart.filter(product => {
            return product.price > 8
        })


    }


    on(d) {
        if (this.state.count === false) {
            this.setState({
                count: true
            })
        }
        else {
            this.setState({
                count: false
            })
        }

    }


    b() {
        this.setState({


        })
        alert("hi")

        this.setState({
            t: "",
            t: this.props.img
        })
    }

    a() {

        this.b()

    }




    render(t) {

        let a = false
        let { desc, id, title, price, img } = this.props

        return (
            <div class="parent-shopha" >


                <Modal
                    show={this.state.count}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered className='modalform'
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter" style={{ color: 'black' }}>
                            ویرایش
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img class="shop-item-image" src={this.state.t} />

                    </Modal.Body>

                </Modal>


                <div class="shopha">
00



                    <div class="icon-title">



                        <Link to={`/f/${id}`} class="icon-title-text" >

                            {title}

                        </Link>
                    </div>

                    <img class="shop-item-image" src={this.props.img} />




                    <div class="reg">


                        <img src='imdb1.png' className="paid" >
                        </img>


                        <div class="woman">
                            نمره
                            IMDb
                        </div>

                        <hr>
                        </hr>

                        <p class="shop-item-price-text">
                            {desc}
                        </p>



                    </div>




                    <span class="shop-item-price">
                        <div class="cost">
                            قیمت
                        </div>



                        <hr>
                        </hr>
                        <p class="shop-item-price-text tooman">

                            {price}



                            هزار تومان
                        </p>



                        <PaidIcon className="paid pay" />

                    </span>

                    <button
                        class=" btn-primary-film"
                        type="button"

                        onClick={this.clickHandler.bind(this, id)}>

                        <img className='shop-delete-image ' src="shop-white.png"


                            onClick={() =>


                                swal({
                                    title: "محصول مورد نظر شما به سبد خرید اضافه شد",
                                    icon: "success",
                                    buttons: " باشه !",
                                })




                            }></img>

افزودن به سبد خرید



                    </button>



                </div>

            </div>
        )
    }
}
