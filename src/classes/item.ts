export default class Item {
    id: number;
    name: string;
    requriedItems: number[]
    conditionalItems: number[][]
    neededOn: number //Convert to binary
    avaliableOn: number //Convert to binary
}