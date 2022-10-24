import { Fragment } from "react"

 const Img =({width,height,src, className,radius,alt})=>{
    return(
        <Fragment>
            <img width={width} height={height} src={src} className={className} radius={radius} alt={alt}></img>
        </Fragment>
    );
 }
 export default Img