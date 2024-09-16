import mongoose from "mongoose";

const mongoDB = "mongodb+srv://lorienygalvao:10102472980@cluster0.7kehm.mongodb.net/cadeia";

const database = "subdocumentos";

const main = async () => {
    try {
        await mongoose.connect(mongoDB+database)
        console.log("Conectado com sucesso")
    } catch (error) {
        console.log(error)
    }
}
main()

export default mongoose
