import React from 'react'

import { Label, Popup } from 'semantic-ui-react'

export default ({ arquivo, analisados }) => {
    let analisado = analisados[arquivo._id]
    if (analisado) {
        return (
            <div style={{ paddingTop: 10 }}>
                {analisado.map((a) =>
                    a.files.map((f, i) => (
                        <Popup
                            key={i}
                            inverted
                            trigger={
                                <Label
                                    basic
                                    color={a.action === 'carregar-extensao' ? 'blue' : 'green'}>
                                    {f.formatado.nome + '.' + f.formatado.extensao}
                                </Label>
                            }
                            content={a.message}
                        />
                    ))
                )}
            </div>
        )
    } else {
        return null
    }
}