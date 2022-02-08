import { IShape } from "./shapes";

export interface IPosition {
    x: number;
    y: number;
}

export interface IPlayer {
    pos: IPosition;
    tetromino: IShape;
    collided: boolean;
}

export class Player implements IPlayer {

    constructor(
        public pos: IPosition,
        public tetromino: any,
        public collided: boolean
    ) {

    }

}