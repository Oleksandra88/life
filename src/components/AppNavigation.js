import React, { Component } from 'react';
import { Navigation } from 'react-mdl';
import { List, ListItem, ListItemContent } from 'react-mdl';
import axios from 'axios';

class AppNavigation extends Component {
    constructor() {
        super();
        this.state = {
            links: []
        };
    }

    componentWillMount() {
        axios.get('/links.json')
            .then(res => {
                const links = res.data;
                this.setState({ links });
            });
    }

    render() {
        return (
            <Navigation>

                {this.state.links.map(nextlink =>

                    <a href={nextlink.url}>{nextlink.name}</a>
                )}
                

            </Navigation>


        )
    }
    
            

}
    
export default AppNavigation;