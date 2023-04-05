import React, {useEffect, useState} from "react";
import style from "./Cropper-module.css"
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import Btn from "../btn/Btn.jsx";

const Cropper = (props) => {
    const [src, selectFile] = useState(null);
    const handleFileChange = (e) => {
        selectFile(URL.createObjectURL(e.target.files[0]));
    };
    const [image, setImage] = useState(null);
    const [crop, setCrop] = useState({ aspect: 16 / 9 });
    const [output, setOutput] = useState(null);
    function getCroppedImg() {
        const canvas = document.getElementById("canvas");
        const image = document.getElementById("result");
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        console.log(
            image.width,
            image.height,
            image.naturalWidth,
            image.naturalHeight
        );
        const imageWidthRatio = image.naturalWidth / image.width;
        const imageHeightRatio = image.naturalHeight / image.height;
        ctx.drawImage(
            image,
            crop.x * imageWidthRatio,
            crop.y * imageHeightRatio,
            crop.width * imageWidthRatio,
            crop.height * imageHeightRatio,
            0,
            0,
            crop.width,
            crop.height
        );
        canvas.toBlob(function (blob) {
            const formData = new FormData();
            formData.append('file', blob, src.name)
            props.loadFD(formData)
        })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <input type="file" accept="image/*" onChange={handleFileChange} />
                </div>
                {src && (
                    <div>
                        <ReactCrop crop={crop} onChange={setCrop}>
                            <img id="result" src={src} alt="description" onLoad={setImage} />
                        </ReactCrop>
                        <Btn label="Загрузить" color="green" click={getCroppedImg}/>
                    </div>
                )}
                <canvas
                    id="canvas"
                    width={crop.width}
                    height={crop.height}
                    style={{
                        border: "1px solid black",
                        objectFit: "contain",
                        display: "none"
                    }}
                ></canvas>
            </div>
        </div>
    );
}

export default Cropper;