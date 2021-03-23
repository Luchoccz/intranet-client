import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Recipe extends Component {
    static propTypes = {
        tittle: PropTypes.string.isRequired,
        ingredientes: PropTypes.arrayOf(PropTypes.string).isRequired,
        instrucciones: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        onDelete: PropTypes.func.isRequired
    }

    render() {
        const {title, img, instrucciones, id, onDelete} = this.props;
        const ingredientes = this.props.ingredientes.map((ing, index) => (
            <li key={index}>{ing}</li>
        ));
        return (
            <div className="recipe-card">
                <div className="recipe-card-img">
                    <img src={img} alt={title} />
                </div>
                <div className="recipe-card-content">
                    <h3 className="recipe-title">Recipe de {title}</h3>
                    <h4>Ingredientes:</h4>
                    <ul>
                        {ingredientes}
                    </ul>
                    <h4>Instrucciones:</h4>
                    <p>{instrucciones}</p>
                    <button type="button" onClick={() => onDelete(id)}>Borrar</button>
                </div>
            </div>
        );
    }
}

export default Recipe;