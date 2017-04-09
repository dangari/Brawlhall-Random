import React, {Component} from 'react';
import Heroes from './Heroes.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        const dropdowndefault = require('../json/hero.json');
        console.log(dropdowndefault.menu);
        this.state = {
            heroes: dropdowndefault.heroes
        };
    }
    render() {
        return (
            <div className='wrap'>
                <div id='content'>
                    <h1>Brawlhalla Randomizer</h1>
                    <Heroes heroItems={this.state.heroes}/>
                </div>
            </div>
        )
    }
}

export default App
