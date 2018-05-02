import './styles.css'

import React from 'react'

import { Link } from 'react-router-dom'

import ImageTiler from './../../../components/image-tiler'

import { Grid, Card, Icon, Image, Menu, Button, Reveal, Feed, List, Form, Input } from 'semantic-ui-react'

export default ({
    projetos, onAtivarProjeto
}) => (
        <Card.Group itemsPerRow={3} stackable>
            {(projetos || []).map(projeto => (
                <ImageTiler
                    key={projeto._id}
                    titulo={projeto.exibicao}
                    imagens={projeto.imagens}
                    onClick={() => { onAtivarProjeto(projeto._id) }}
                />
            ))}
        </Card.Group>
    )
