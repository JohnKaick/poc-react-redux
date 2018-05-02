import { schema } from 'normalizr'

export const DiarioParticipanteSchema = new schema.Entity('diario-participante', {}, { idAttribute: '_id' })

export const DiarioItemSchema = new schema.Entity('diario-item', {}, { idAttribute: '_id' })

export const DiarioRegistroSchema = new schema.Entity('diario-registro', {
    itens: [DiarioItemSchema],
    participantes: [DiarioParticipanteSchema]
}, { idAttribute: '_id' })



