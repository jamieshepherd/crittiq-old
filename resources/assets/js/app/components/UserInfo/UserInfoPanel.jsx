/*
 *--------------------------------------------------------------------------
 * UserInfoPanel
 |--------------------------------------------------------------------------
 */

var UserInfoPanel = React.createClass({

    render: function() {
        return(
            <div className="account-menu">
                <div className="padding">
                    <div className="account-details">
                        <img className="avatar" src={"http://www.gravatar.com/avatar/" + this.props.gravatar + "?d=http%3A%2F%2Fjamie.sh%2Fimages%2Fuploads%2Fdefault.png?s=120"}/>
                        <span className="account-menu-name">{ this.props.name }</span>
                        <span className="account-menu-email">{ this.props.email }</span>
                    </div>
                    <div className="progress-outer">
                        <div className="progress-inner"></div>
                        <div className="progress-text">75% to next level</div>
                    </div>
                    <ul>
                        <li><a href="/account/profile">My profile</a></li>
                        <li><a href="/account/history">History</a></li>
                        <li><a href="/account/settings">Settings</a></li>
                    </ul>
                </div>
                <a className="sign-out" href="/auth/logout">Sign out</a>
            </div>
        );
    }

});
