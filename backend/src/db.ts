import mongoose, {model, Schema} from "mongoose"

const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String
})
export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
    type: String,
    link: { type: String, required: false },
    document: { type: String, required: false },
    title: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true}
})

const Sharelink = new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true}
})

export const ContentModel = model("Content", ContentSchema);
export const LinkModel = model("Links", Sharelink);