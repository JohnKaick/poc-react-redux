import { schema } from 'normalizr'

export const RevisaoSchema = new schema.Entity('arq-revisao', {}, { idAttribute: '_id' })

export const ArquivoSchema = new schema.Entity('arq-arquivo', { revisoes: [RevisaoSchema] }, { idAttribute: '_id' })

export const GrupoSchema = new schema.Entity('arq-grupo', { arquivos: [ArquivoSchema] }, { idAttribute: '_id' })

export const PastaSchema = new schema.Entity('arq-pasta', { grupos: [GrupoSchema] }, { idAttribute: '_id' })







