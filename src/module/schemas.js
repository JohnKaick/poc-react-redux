import {
    schema
} from 'normalizr'

export const ProjetoSchema = new schema.Entity('projetos', {}, {
    idAttribute: '_id'
})

export const ArquivoSchema = new schema.Entity('arq-arquivos', {}, { idAttribute: '_id' })

export const GrupoSchema = new schema.Entity('arq-grupos', { arquivos: [ArquivoSchema] }, { idAttribute: '_id' })

export const PastaSchema = new schema.Entity('arq-pastas', { grupos: [GrupoSchema] }, { idAttribute: '_id' })
