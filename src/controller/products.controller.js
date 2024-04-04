import { prisma } from "../db.js";


export const getProducts = async (req, res) => {
    try {

        const products = await prisma.product.findMany({
            include: {
                category: true,
            }
        });
        res.json(products);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await prisma.product.findUnique({
            where: {
                id: parseInt(req.params.id)
            },
            include: {
                category: true,
            }
        })

        res.json(product);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

export const saveProducts = async (req, res) => {
    try {
        const product = await prisma.product.create({
            data: req.body,
        });

        res.json(product);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


export const updateProduct = async (req, res) => {
    console.log(req.body.name);
    try {
        const product = await prisma.product.update({
            where: {
                id: parseInt(req.params.id)
            },
            include:{
                category:true,
            },
            data: {
                name: req.body.name
            }
        })

        res.json(product);
    } catch (error) {
        res.status(500);
        res.json(error.message);
    }
}

export const deleteProductById = async(req, res) => {
    try {
        const product = await prisma.product.delete({
            where:{
                id: parseInt(req.params.id)
            }
        })
    
        res.json(product)
    } catch (error) {
        res.status(500);
        res.json(error.message);
    }

}

export const deleteProducts =async(req,res)=>{
    try {
        const products = await prisma.product.deleteMany()
        res.json(products)
    } catch (error) {
        res.status(500);
        res.json(error.message);
    }
}

