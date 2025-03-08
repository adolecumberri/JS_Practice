import { cardSchema } from "./cardSchema.mjs"
function validateCard(input){
    return cardSchema.parse(input)
}

export {validateCard}