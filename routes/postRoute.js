import express from "express"
import upload from "../middlewares/multer.js"
import {
    addPost,
    getAllPost,
    addPhotograph,
    addDrawing,
    getAllDrawings,
    getDrawingById,
    getAllPhotographs,
    getPhotographById,
    updateDrawingById,
    deleteDrawingById,
    getLastPosts,
    getAllWritings,
    getWritingById,
    deleteAllDrawings,
    getPostById,
    getUserPosts

} from '../controllers/postController.js'


const postRoute = express.Router()

postRoute.post('/add', upload.single("image"), addPost)
postRoute.get('/getall', getAllPost)
postRoute.get('/getbyId/:id', getPostById)
postRoute.get('/getbyUserId/:id', getUserPosts)


postRoute.post('/addphoto',upload.single("image"), addPhotograph)
postRoute.post('/adddraw', upload.single("image"),addDrawing)
postRoute.get('/getdraw', getAllDrawings)
postRoute.get('/getdrawid/:id', getDrawingById)
postRoute.get('/getallphoto', getAllPhotographs)
postRoute.get('/getphotoid/:id', getPhotographById)
postRoute.get('/getallWritings',getAllWritings)
postRoute.get('/getWrtingbyId/:id',getWritingById)
postRoute.put('/update/:id',upload.single("image"), updateDrawingById)
postRoute.delete('/delete/:id', deleteDrawingById)
postRoute.delete('/deleteAll', deleteAllDrawings)

postRoute.get('/getlastest', getLastPosts)

export default postRoute;

