import React, {Component} from 'react';
import Hero from './Hero.jsx';

class Heroes extends Component{
  getHeroItem(hero){
    return(
      <Hero key={hero.id} name={hero.name} image={hero.image} selected={hero.selected}/>
    )
  }
  render (){
    return(
      <div className='heroes box'>
        {
          this.props.heroItems.map( hero =>{
            return(this.getHeroItem(hero))
          })
        }
      </div>
    );
  }
}

Heroes.propTypes = {
  heroItems: React.PropTypes.array.isRequired,
}

export default Heroes
