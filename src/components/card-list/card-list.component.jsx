import { Component } from "react";
import "./card-list.styles.css"
import Card from "../card/card.component";

class CardList extends Component {
    render() {
        // console.log("render from cardlist")
        const { monsters } = this.props;
        console.log(monsters.id);
        return (
            <div className="card-list">
                {monsters.map((monster) => {
                    const {name, id, email} = monster;
                    return(
                        <Card name={name} id={id} link={`https://robohash.org/${id}?set=set2`} email={ email}/>
                )})}
            </div>
        );
    }
}

export default CardList;
