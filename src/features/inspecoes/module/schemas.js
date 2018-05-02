import { schema } from 'normalizr'

export const MdElementoAnomaliaSchema = new schema.Entity('chk-md-elemento-anomalia', {}, { idAttribute: '_id' })

export const MdElementoSchema = new schema.Entity('chk-md-elemento', {
    anomalias: [MdElementoAnomaliaSchema]
}, { idAttribute: '_id' })

export const ImagemSchema = new schema.Entity('chk-imagem', {}, { idAttribute: '_id' })

export const ElementoAnomaliaSchema = new schema.Entity('chk-elemento-anomalia', {
    modelo: MdElementoAnomaliaSchema
}, { idAttribute: '_id' })

export const GrupoAnomaliaSchema = new schema.Entity('chk-grupo-anomalia', {}, { idAttribute: '_id' })

export const ElementoSchema = new schema.Entity('chk-elemento', { anomalias: [ElementoAnomaliaSchema] }, { idAttribute: '_id' })

export const GrupoSchema = new schema.Entity('chk-grupo', {
    imagens: [ImagemSchema]
}, { idAttribute: '_id' })

export const ChecklistSchema = new schema.Entity('chk-checklist', {}, { idAttribute: '_id' })

export const MdGrupoAnomaliaSchema = new schema.Entity('chk-md-grupo-anomalia', {}, { idAttribute: '_id' })

export const MdCategoriaSchema = new schema.Entity('chk-md-categoria', {}, { idAttribute: '_id' })

export const MdPastaSchema = new schema.Entity('chk-md-pasta', {}, { idAttribute: '_id' })

export const DisciplinaSchema = new schema.Entity('chk-disciplina', {}, { idAttribute: '_id' })

