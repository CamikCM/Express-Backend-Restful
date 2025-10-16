const { faker } = require("@faker-js/faker");

class productsService {
    constructor(){
        this.products = [];
        this.generarDatos();
    }
    generarDatos(){
        const limit = 10;
        for (let i=0; i<limit; i++){
            this.products.push({
                id: faker.string.uuid(),
                name: faker.commerce.productName(),
                price: faker.commerce.price(),
            });
        }
    }
    async create(data){
        const newProduct = {
            id: faker.string.uuid(),
            ...data
        };
        this.products.push(newProduct);
        return newProduct;
    }

    async findAll(){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(this.products);
            }, 5000);
        });
    }
    
    async findOne(id){
        return this.products.find(item=>item.id===id)
    }

    async update(id, changes){ 
        const index = this.products.findIndex(item=>item.id===id);
        if (index===-1){
            throw new Error('Producto no encontrado');
        }
        const product = this.products[index];
        this.products[index] = {
            ...product,
            ...changes
        };
        return this.products[index];
    }
    
    async delete(id){
        const index = this.products.findIndex(item=>item.id===id);
        if (index===-1){
            throw new Error('Producto no encontrado');
        }
        this.products.splice(index, 1);
        return {id};
    }
}
module.exports = productsService;