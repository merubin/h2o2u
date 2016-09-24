import React from 'react'
import { Link } from 'react-router'

export default class MainApp extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/user/bob" activeClassName="active">Bob</Link></li>
                    <li><Link to={{ pathname: '/user/bob', query: { showAge: true } }} activeClassName="active">Bob With Query Params</Link></li>
                    <li><Link to="/user/sally" activeClassName="active">Sally</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}