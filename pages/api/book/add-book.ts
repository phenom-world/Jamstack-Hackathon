import { NextApiHandler } from "next";
import cloudinary from "../../../utils/cloudinary";
import { getXataClient } from "../../../utils/xata";


const handler: NextApiHandler = async (req, res) => {
    const { title, author, year_published, genre, image } = req.body;
    const xata = getXataClient();
    const result = cloudinary.uploader.upload(image)
    // const user = await xata.db.User.filter({ email }).getFirst()
    // // user doesn't exist
    // if (!user) {
    //     await xata.db.User.create({
    //         username: username,
    //         email: email,
    //     })
    //     return res.status(201).json({
    //         message: "user created"
    //     });
    // } else {
    //     throw 'Username or Email already exist';
    // }
    const book = await xata.db.Book.create({
        title: title,
        author: author,
        year_published: year_published,
        genre: genre,
        image_url: (await result).secure_url

    })

    res.status(201).json({
        data: book
    })

}
export default handler;