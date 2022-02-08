import React, { Component } from 'react';
import './Stage.scss';

import { Cell } from 'components/cell-component/Cell';
import { TetrisStage } from 'game';

type IStageProps = {
    stage: TetrisStage;
}

type IStageState = any;


class Stage extends Component<IStageProps, IStageState> {

    get stage() {
        return this.props.stage;
    }

    get width() {
        return this.stage[0].length;
    }

    get height() {
       return this.stage.length;
    }

    get rows(): string {
        return `repeat(${this.height}, calc(25vw / ${this.width}))`;
    }

    get columns(): string {
        return `repeat(${this.width}, 1fr)`;
    }

    /*
                width:  this.width,
                height: this.height,
    */

    render() {
      return (
        <div 
            className="stage" 
            style={{
                gridTemplateRows: this.rows,
                gridTemplateColumns: this.columns
            }} 
        >
            {
               this.stage.map(row => row.map((cell: any, x: number) => {
                    const type = cell[0];
                    const clear = cell[1];
                   return <Cell key={x} type={type} />
                })
               ) 
            }
        </div>
      );
    }
}

export { Stage };