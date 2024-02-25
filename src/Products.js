import { v4 as uuidv4 } from 'uuid';

const Products = [
    {
        id: uuidv4(),
        productName: "Apple iPhone 15 (Blue, 128 GB)",
        price: 70999,
        productImage: 'https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UF1000,1000_QL80_.jpg',
    },
    {
        id: uuidv4(),
        productName: "Apple iPhone 14 (Red, 256 GB)",
        price: 10999,
        productImage: 'https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UF1000,1000_QL80_.jpg',
    },
    {
        id: uuidv4(),
        productName: "Apple iPhone 13 (Yellow, 64 GB)",
        price: 40999,
        productImage: 'https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UF1000,1000_QL80_.jpg',
    },
    {
        id: uuidv4(),
        productName: "Apple iPhone 12 (Green, 512 GB)",
        price: 80999,
        productImage: 'https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UF1000,1000_QL80_.jpg',
    },

];

export default Products;
