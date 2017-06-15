import React from 'react';
import { Link } from 'react-router';

export default class Articles extends React.Component{
    render(){
        return(
            <div>
                <h1>Articles</h1>
                <Link to="users/new" className="btn btn-primary btn-sm pull-left">Create New &nbsp;
                    <i className="glyphicon glyphicon-plus"></i></Link>
            </div>
        );
    }
}
