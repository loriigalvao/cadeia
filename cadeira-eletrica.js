import conn from "./conn.js"

const Schema = conn.Schema

const americanoMedioSchema = new Schema ({
    nome: {
        type: Schema.Types.String,
        required: true

    },
    
    dataNascimento: {
        type: Schema.Types.String,
        required: true
    }
})

const cadeiraEletricaRef = new Schema ({
    voltagem: {
        type: Schema.Types.Number,
        required: true

    },
    americano: americanoMedioSchema
})

const CadeiraEletricaRef = conn.model("CadeiraEletricaRef")

const inserir = async () => {
    try {
        await CadeiraEletricaRef.create({
            americano:{
                nome: "John",
                dataNascimento: "01/01/2000"
            },
            voltagem: 380
        })

    } catch(error){ 
        console.log(error)

    }
}

inserir()