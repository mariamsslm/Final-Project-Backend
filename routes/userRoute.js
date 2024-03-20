import express from "express"
import { authorized } from '../middlewares/auth.js'
import upload from "../middlewares/multer.js"
import {
    signup,
    login,
    getAll,
    getUserById,
    deleteUserById,
    updateUserRole,
    logout,
    getOne,
    updateUserProfile,
    deleteAllUsers,
    getLatestUsers,
    deleteUserAccount
} from '../controllers/userController.js'


const userRoute = express.Router()

userRoute.post('/signup',upload.single("image"), signup)
userRoute.post('/login', login)

userRoute.get('/getall', getAll)
userRoute.get('/get/:id', getUserById)
userRoute.get('/getone', getOne)
userRoute.get('/getlatest', getLatestUsers)


userRoute.delete('/delete/:id', deleteUserById)
userRoute.delete('/deleteUserAccount/:id',authorized, deleteUserAccount)
userRoute.delete('/deleteAll', deleteAllUsers)

userRoute.put('/updateProfile/:id', authorized,upload.single("image"),updateUserProfile)
userRoute.put('/updateUserRole', authorized,updateUserRole)

userRoute.post('/logout',authorized, logout)


export default userRoute;


