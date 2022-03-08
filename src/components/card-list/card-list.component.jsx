import { Component } from "react";

class CardList extends Component {
    render() {
        console.log("render from cardlist")
        const { monsters } = this.props;
        console.log(monsters.id);
        return (
            <div>
                {monsters.map((monster) => (
                    <h1 key={monster.name}>{monster.name}</h1>
                ))}
            </div>
        );
    }
}

export default CardList;
