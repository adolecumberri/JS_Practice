import { cardSchema } from "./cardSchema.mjs"
export function validateCard(input){
    return cardSchema.partial().parse(input)
}