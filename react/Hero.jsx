import React, {Component} from 'react';

class Hero extends Component {
    render() {
        var selected = this.props.selected ? 'selected' : null;
        return (
          <div className='avatar-img'>
              <img className={selected} src={this.props.image} />
              <p>{this.props.name}</p>
          </div>
        );
    }
}

Hero.propTypes = {
  name: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
  selected: React.PropTypes.bool.isRequired,
}

export default Hero
