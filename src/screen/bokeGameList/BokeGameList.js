import './BokeGameList.scss';

import produce from "immer";
import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom'

import {Button} from '@material-ui/core';
import {Card, CardActions, CardMedia, CardHeader} from '@material-ui/core';

export default class BokeGameList extends PureComponent {
    state = {};

    onProduce = (producer) => {
        this.setState(produce(this.state, producer));
    };

    _generateGameCard = game => {
        return <Card key={game.name} className={'game-card'}>
            <CardHeader
                title={game.name}
            />
            <CardMedia
                component="img"
                src={game.thumbnail}
            />
            <CardActions>
                <Button component={Link} to="/gameHistory" size="small" color="primary" onClick={() => this.props.selectGame(game.name)}>
                    게임통계
                </Button>
                <Button component={Link} to="/recordGame" size="small" color="primary" onClick={() => this.props.selectGame(game.name)}>
                    점수기록
                </Button>
            </CardActions>
        </Card>
    };

    render() {
        const {games} = this.props;

        return (
            <section className="boke-game-list">
                {
                    games.map(this._generateGameCard)
                }
            </section>
        )
    }
};
