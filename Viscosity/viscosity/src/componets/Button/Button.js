import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    const getFas = fa => {

        let faSize = this.props.faSize || 'fa-sm'  
                                                 
                                            
        let fas = {
            // Socail media logos quick assign
            fb: `fab fa fa-facebook-f ${faSize}`,
            tw: `fab fa fa-twitter ${faSize}`,
            em: `fab fa fa-envelope ${faSize}`,
            git: `fab fa fa-github ${faSize}`,
            ig: `fab fa fa-instagram ${faSize}`,
            sc: `fab fa fa-soundcloud ${faSize}`,
            mp: `fas fa fa-map-marker-alt ${faSize}`,

            // Tools 
            plus: `far fa fa-plus ${faSize}`,
            time: `far fa fa-times ${faSize}`,
            bars: `fal fa fa-bars ${faSize}`,
            ell : `fas fa fa-ellipsis-h ${faSize}`
        }

        return fas[fa];
    }
   

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

export default Button;


