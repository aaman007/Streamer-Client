import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStreams } from '../../actions';

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams();
    }

    renderActions = stream => {
        if (stream.userId === this.props.currentUserId){
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button orange">
                        Edit
                    </Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button negative">
                        Delete
                    </Link>
                </div>
            );
        }
    }

    renderCreateAction() {
        if (this.props.isSignedIn){
            return (
                <div style={{textAlign: 'right'}}>
                    <Link to="/streams/create" className="ui button primary"> Create Stream </Link>
                </div>
            );
        }
    }

    renderStreams() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderActions(stream)}
                    <i className="large middle aligned icon camera"></i>
                    <div className="content">
                        <Link to={`/streams/${stream.id}`} className="header"> {stream.title} </Link>
                        <div className="description"> {stream.description} </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h2> Streams </h2>
                {this.renderCreateAction()}
                <div className="ui celled list">
                    {this.renderStreams()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {  
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn,
        streams: Object.values(state.streams)
    };
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);