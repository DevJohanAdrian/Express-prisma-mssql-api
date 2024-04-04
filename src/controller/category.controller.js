import { prisma } from "../db.js";


export const saveCategory = async(req, res)=>{
    console.log(req.body)
 try {
    const categories = await prisma.category.createMany({
        data:req.body
    })

    res.json(categories)
 } catch (error) {
    res.status(500);
    res.json(error.message);
 }
}