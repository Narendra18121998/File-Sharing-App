import FileModel from "../models/model.js"

export const uploadImage=async(req,res)=>{
    const fileObj={
        path:req.file.path,
        name:req.file.originalname
    }
    try {
       const file =  await FileModel.create(fileObj)
       return res.status(200).json({path:`http://localhost:8000/file/${file._id}`})
    } 
    catch (error) {
        return res.status(404).json({message:error})    
    }
}

export const downloadImage=async(req,res)=>{
    try {
        const file = await FileModel.findById(req.params.fileId)
        file.downloadContent++;
        file.save()
        res.download(file.path,file.name);
    } 
    catch (error) {
        return res.status(404).json({message:error})     
    }
}
