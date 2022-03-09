import { Component } from "react";
import "./card.styles.css"

class Card extends Component {
    render() {
        return (
            <div className="card-container" key={this.props.id} >
                <img alt="monster" src={this.props.link} />
                <h2>{this.props.name}</h2>
                <p>{this.props.email}</p>
            </div>
        );
    }
}

export default Card;