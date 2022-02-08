
import { buildTetrominos } from 'game';
import { ITetrisPiece, ITetrominus } from 'game/shapes';
import React, { Component } from 'react';
import './Cell.scss';

export type ICellProp = {
    key: number;
    type: number;
};
export type ICellState = any;


class Cell extends Component<ICellProp, ICellState> {

    constructor(props: ICellProp, state: ICellState, public tetrominos: ITetrominus) {
        super(props, state);

        // colocar no Board ???
        this.tetrominos = buildTetrominos();
    }

    // get key() {
    //     return this.props.key;
    // }

    get type(): number | string {
        // return true ? 'I' : 0;
        return this.props.type;
    }

    get shape(): ITetrisPiece {
        return this.tetrominos[this.type];
    }

    get color() {   
        let color = 'red';
        if(this.shape) {
            color = 'rgba(' + this.shape.color + ',' + 0.8 + ')';     
        }
        return color;
    }

    get borderLeftColor() {
        return 'rgba(' + this.shape.color + ', 0.3)';
    }

// { this.type }

    render() {
      return (
        <div 
          className="cell" 
          style={{
              backgroundColor: this.color,
              border: this.type === 0 ? '2px solid': '4px solid',
              borderBottomColor: this.color,
              borderRightColor: this.color,
              borderTopColor: this.color,
              borderLeftColor: this.borderLeftColor,
            }}
        >
            
        </div>
      );
    }
}

export { Cell }; // REACT MEMO ????