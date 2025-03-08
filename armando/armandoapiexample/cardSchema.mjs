import z from 'zod'
const cardSchema=z.object({
    name:z.string({
        invalid_type_error:'Card name must be a string',
        required_error: 'Card name is required'
    }),
    color:z.array(
        z.enum(['White','Blue','Black','Red','Green','Colorless']),
        {
            required_error: 'Card color is required',
            invalid_type_error: 'Card color must be an array of enum color'
        }
    ),
    cost:z.string,
    type:z.array(
        z.enum(['Land','Creature','Artifact','Enchantment','Instant','Sorcery']),
        {
            required_error: 'Card type is required',
            invalid_type_error: 'Card type must be an array of enum type'
        }
    ),
    text:z.string
})
export {cardSchema}