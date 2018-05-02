import { denormalize } from 'normalizr'

export function desnormalizar(schemaOutput, state, result) {
    return denormalize(result, schemaOutput, state.entities)
}

export function traduzirModelos(collection, state, ids) {
    if (!state.entities[collection]) return []
    return ids.map(id => {
        return state.entities[collection][id]
    })
}

export function traduzirModelo(collection, state, id) {
    if (!state.entities[collection]) return []
    return state.entities[collection][id]
}

export function selecionarProjeto(state, projetoId) {
    if (!state.entities.projetos) return null
    return state.entities.projetos[projetoId]
}