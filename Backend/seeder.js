import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors'
import users from './src/data/users.js'
import products from './src/data/products.js'
import User from './src/models/userModel.js'
import Product from './src/models/productModel.js'
import Order from './src/models/orderModel.js'
import connectDB from './src/config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await User.deleteMany()
        await Product.deleteMany()
        await Order.deleteMany()

       const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id
        const sampleProducts = products.map(product => {
            return { ...product, user: adminUser }
            })

        const createdProducts = await Product.insertMany(sampleProducts)

        console.log('Data imported successfully'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(`error: ${error.message}`.red.inverse)
        process.exit(1)
    }
}
    const destroyData = async () => {
        try {
            await User.deleteMany()
            await Product.deleteMany()
            await Order.deleteMany()
    
            console.log('Data Destroyed successfully'.red.inverse)
            process.exit()
        } catch (error) {
            console.error(`error: ${error.message}`.red.inverse)
            process.exit(1)
        }
    }

    if(process.argv[2] === '-d') {
        destroyData()
    } else {
        importData()
    }