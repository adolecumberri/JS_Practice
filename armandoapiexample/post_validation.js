import { cardSchema } from "./cardSchema.mjs"
function validateCard(input){
    return cardSchema.safeParse(input)
}

export {validateCard}