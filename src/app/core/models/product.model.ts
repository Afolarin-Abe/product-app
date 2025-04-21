export class ProductItem {
    constructor(
        public id: number, 
        public name: string, 
        public price: number, 
        public description: string,
        public imgage:string = "https://images.vexels.com/media/users/3/156928/isolated/lists/6c65c177e94e7554e1fdb0af3038acb7-question-mark-square-icon.png"){}
}