import React, {useState, useEffect} from 'react'

function Slideshow() {
    const [index, setIndex] = useState(0)

    let images = [
        "https://www.mercedes-benz.com/content/dam/brandhub/assets/art-and-culture/zeitgeist/collaboration-moncler/past-forward/media-gallery-1/10-2024/images/mercedes-benz-x-moncler-showcar-gallery-03-1440x1080-10-2024.jpg/_jcr_content/renditions/image-crop-default.jpeg/1730451419349.jpg?im=Resize=(1280);Crop,rect=(0,0,1280,960)",
        
        "https://media.oneweb.mercedes-benz.com/images/dynamic/europe/IN/254647/804/iris.webp?q=COSY-EU-100-1713d0VXqaWFqtyO67PobzIr3eWsrrCsdRRzwQZUnRZbMw3SGtlaWtsd2JQcUfpO6XGEuTRJ0l3CJOB2NznbApRnyI5ux5IQC31SrkzNwmbm7jA6ohKV5Kh%25vqCuqyLRgc6Yax%255SrH1yI6n8w0A2oiZB5lM4FAsuTg9LQ96PDaPpSeWHXUtsd8ZDcUfiXWXGE4JYJ0lgClOB2PzFbAp7oMIkb1ECQmIKM1kzNUTNm7jsGOhKVvKQ%25vqLUdyL0fsjko9wdYfHxKj1aRcYxqN8NmDmA9KLBZ59U2G1oQsvt&BKGND=9&IMGT=W27&cp=U7lLKRUtPa6KAFr8s_ubHw&uni=m&POV=BE320&uni=m",

        "https://www.mercedes-benz.com/content/dam/brandhub/assets/art-and-culture/zeitgeist/collaboration-moncler/past-forward/media-gallery-1/10-2024/images/mercedes-benz-x-moncler-showcar-gallery-01-1440x1080-10-2024.jpg/_jcr_content/renditions/image-crop-default.jpeg/1730451400478.jpg?im=Resize=(1280);Crop,rect=(0,0,1280,960)"

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