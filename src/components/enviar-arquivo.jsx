import React from 'react'

import { Button } from 'semantic-ui-react'

export default class extends React.Component {

    formUpload = null
    inputUpload = null

    handleClick() {
        this.formUpload.reset()
        this.inputUpload.click()
    }

    handleUpload(e) {
        let files = e.target.files
        if (this.props.carregar) {
            if (this.props.itemId) {
                this.props.carregar(files, this.props.itemId)
            } else {
                this.props.carregar(files)
            }
        }
    }

    render() {
        let { control, carregando } = this.props
        let compProps = {
            ...this.props,
            multiple: undefined,
            carregar: undefined,
            control: undefined
        }
        let Control = control
        return (
            <div>
                <Control
                    {...compProps}
                    onClick={this.handleClick.bind(this)} />
                <form ref={(e) => { this.formUpload = e }}>
                    <input
                        multiple={this.props.multiple}
                        ref={(e) => { this.inputUpload = e }}
                        type="file"
                        onChange={this.handleUpload.bind(this)}
                        style={{ display: 'none' }} />
                </form>
            </div>
        )
    }
}