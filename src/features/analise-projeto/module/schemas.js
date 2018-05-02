import { schema } from 'normalizr'

export const ApArquivoSchema = new schema.Entity('apr-relatorio', {}, { idAttribute: '_id' })

export const ApParticipanteSchema = new schema.Entity('apr-participante', {}, { idAttribute: '_id' })

export const ApReplicaSchema = new schema.Entity('apr-replica', {}, { idAttribute: '_id' })

export const ApItemSchema = new schema.Entity('apr-item', {
    replicas: [ApReplicaSchema],
}, { idAttribute: '_id' })

export const ApRelatorioSchema = new schema.Entity('apr-relatorio', {
    arquivos: [ApArquivoSchema],
    participantes: [ApParticipanteSchema],
    itens: [ApItemSchema],
}, { idAttribute: '_id' })


