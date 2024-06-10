import React from "react";
import ReactDOM from "react-dom";

function Card(props){
    return (
        <div>
            <h1>
                {props.name}
            </h1>
            <img src={props.img}  alt="imge bolte"/>
            <p>{props.num}</p>
            <p>{props.email}</p>
        </div>
    )
};

ReactDOM.render(
    <div>
        <Card name="Shalu" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" num="45448845154" email="hotbabe@gmail.com" />
        <Card name="Majnu" img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" num="45448845" email="hotbae@gmail.com" />
        <Card name="Gampym" img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" num="448845154" email="hobabe@gmail.com" />
    </div> ,
    document.getElementById("root")
)