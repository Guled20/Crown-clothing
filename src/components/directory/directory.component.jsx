import React, { Component } from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import Data from './data'


class Directory extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sections:Data
        }
    }

    render() {
        const { sections } = this.state;
        return (
            <div className='directory-menu'>
                {
                    sections.map(({id,...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
        );
    }
}

export default Directory;