import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

  render() {


    const getFas = fa => {

        let faSize = this.props.faSize || 'fa-sm' // if you want to chnage the size of the logo but keep a big button then 
                                                // just add faSize to the your btn's props 
        {/* 
            fa-xs
            fa-sm
            fa-lg
            fa-2x
            fa-3x
            fa-5x
            fa-7x
            fa-10x
         */}                                        

        let fas = {
            // Socail media logos quick assign
            fb: `fab fa fa-facebook-f ${faSize}`,
            tw: `fab fa fa-twitter ${faSize}`,
            em: `fab fa fa-envelope ${faSize}`,
            git: `fab fa fa-github ${faSize}`,
            ig: `fab fa fa-instagram ${faSize}`,
            sc: `fab fa fa-soundcloud ${faSize}`,

            // Tools 
            plus: `far fa fa-plus ${faSize}`,
            time: `far fa fa-times ${faSize}`,
            bars: `fal fa fa-bars ${faSize}`,
            ell : `fas fa fa-ellipsis-h ${faSize}`
        }

        console.log('working in the fas')
        return fas[fa];
    }


    // to do simple animations:

    {/* 
    <i class="fa fa-link fa-rotate-45" style="font-size:1.5em"></i>

    .fa-rotate-45 {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}
    
    
    */}

    const buttonColor = {
        color: this.props.color || this.props.colorBorder,
        fontSize: this.props.fontSize
    
    }

    return (
        <div className="Button">
            <button className={ `${this.props.size}
                                  ${this.props.len}
                                  ${this.props.colorSolid}
                                  ${this.props.colorBorder}
                                  ${this.props.shape}` }>                 {/* Edit the code above so that the "key is placed as the value for the button type later on" */}
                <i className={ getFas(this.props.fas) }></i>
                <span style={ buttonColor }>{this.props.text}</span>
            </button>

        </div>
    );
  }
}


{/*



    for example the button below will create a nice round
    socal media button:

          <Button text="" 
                  color="fb-c"
                  fas="fb"
                  shape="round" 
                  length="sh" 
                  size="sm"/> 

    Just change the fas and color value to the respective color and logo

*/}


export default Button;


