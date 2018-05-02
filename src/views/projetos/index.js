import { withRouter } from 'react-router'
import container from './container'
import connector from './connector'
export default withRouter(connector(container))