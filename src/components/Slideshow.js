import React, {useState, useEffect} from 'react'

function Slideshow() {
    const [index, setIndex] = useState(0)

    let images = [
        "https://www.mercedes-benz.com/en/vehicles/mercedes-eq/eqs-suv/_jcr_content/root/verticalgallery_copy/parsys/verticalgalleryitem/image/MQ6-0-image-20220419101504/01-mercedes-benz-the-new-eqs-suv-x296-2021-1080x1350.jpeg",
        
        "https://www.mercedes-benz.com/en/vehicles/mercedes-eq/eqs-suv/_jcr_content/root/verticalgallery_copy/parsys/verticalgalleryitem_546277676/image/MQ6-0-image-20220819111550/02-mercedes-benz-the-new-eqs-suv-x296-2021-1680x1680.jpeg",

        "https://www.mercedes-benz.com/en/vehicles/mercedes-eq/eqs-suv/_jcr_content/root/verticalgallery_copy/parsys/verticalgalleryitem_354875624/image/MQ6-0-image-20220419101505/03-mercedes-benz-the-new-eqs-suv-x296-2021-1680x1680.jpeg"

    ];

    useEffect(() => {
        let id = setInterval(() => {
            setIndex((index+1)%images.length);
            console.log("ok");
            
        }, 5000);
        return () => clearInterval(id);
    }, [images])


    return (
        <div>
            <img style={{width: "500px"}} src={images[index]}></img>
        </div>
    )
}

export default Slideshow