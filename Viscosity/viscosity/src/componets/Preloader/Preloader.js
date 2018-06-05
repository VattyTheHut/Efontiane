import React from "react"
import styles from "./Preloader.css"



class Preloader extends React.Component{
    render(){

        const getPreloader = type => {

            // let sstyle = `border-top-color: ${this.props.color}`


            const preloader = {
                round: <div className={styles.loader}></div>,
                line: "",
                square: ""
            }         
            
            return preloader[type];

        }

        


        return(
            <div className="Loader">{getPreloader(this.props.type)}</div>
        )
    }

}

export default Preloader;


