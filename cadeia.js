import conn from "./conn.js"

const Schema = conn.Schema

const prisioneiroSchema = new Schema ({
    nome: {
        type: Schema.Types.String,
        require: true
    },
})

const celaSchema = new Schema ({
    altura: {
        type: Schema.Types.String,
        require: true
    },
    comprimento: {
        type: Schema.Types.Number,
        require: true
    },
    largura:{
        type: Schema.Types.Number,
        require: true

    },
    prisioneiros: [prisioneiroSchema]
})

const cadeiaSchema = new Schema({
    postalCode: {
        type: Schema.Types.String,
        required: true
    },
    tipo: {
        type: Schema.Types.String,
        enum: ["MUNICIPAL","ESTADUAL","FEDERAL"],
        default: "MUNICIPAL"
    },
    celas: [celaSchema]
})

const Cadeia = conn.model("Cadeia", cadeiaSchema)

Cadeia.create({
    postalCode:"7853757309730593059",
    tipo: "FEDERAL",
    celas: [
        {
            altura: 2,
            largura: 5,
            comprimento: 5,
            prisioneiros: [
                {
                    nome: "teste1"

                },
                {
                    nome: "teste2"
                },
                {
                    nome: "teste3"
                }
            ]
        }
        
    ]
});

export default Cadeia;