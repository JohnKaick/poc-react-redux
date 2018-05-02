import { schema } from 'normalizr'

export const AtaParticipanteSchema = new schema.Entity('ata-participante', {}, { idAttribute: '_id' })

export const AtaItemSchema = new schema.Entity('ata-item', {}, { idAttribute: '_id' })

export const AtaRegistroSchema = new schema.Entity('ata-registro', {
    itens: [AtaItemSchema],
    participantes: [AtaParticipanteSchema]
}, { idAttribute: '_id' })



