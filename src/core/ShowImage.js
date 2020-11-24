
import React from "react";
import { API } from "../config";
import { Carousel } from 'react-bootstrap';
const ShowImage = ({ item, url }) => (
    
    // <div className="product-img">
    //     <img
    //         src={`${API}/${url}/photo/${item._id}`}
    //         alt={item.name}
    //         className="mb-3"
    //         style={{ maxHeight: "100%", maxWidth: "100%" }}
    //     />
    // </div>


    //     <Carousel>
    //   {this.items.map(item => (
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={item.src}
    //       alt={item.alt}
    //     />
    //     <Carousel.Caption>
    //       <h3>{item.captionTitle}</h3>
    //       <p>{item.caption}</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   )}
    // </Carousel>



    <Carousel>
        <Carousel.Item>
            <img
                src={`${API}/${url}/photo/${item._id}`}
                alt={item.name}
                className="mb-3"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
            />
        </Carousel.Item>
    </Carousel>
);

export default ShowImage;