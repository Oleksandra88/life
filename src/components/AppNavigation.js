import React, { Component } from 'react';
import { Navigation } from 'react-mdl';

class AppNavigation extends Component {
    render() {
        return (
            <Navigation>
                <a href="https://www.wp.pl/">WP</a>
                <a href="https://demotywatory.pl/">Demotywatory</a>
                <a href="https://www.youtube.com/">You Tube</a>
                <a href="https://pl.wikipedia.org">Wikipedia</a>
            </Navigation>

        );

    }
}
export default AppNavigation;