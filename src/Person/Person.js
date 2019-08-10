import React from 'react';
import './Person.css';

class Person extends React.Component
{
    constructor(props)
    {
       super();
       this.img=props.person.img;
       this.url=`https://randomuser.me/portraits/thumb/men/${this.img}.jpg`;
       
    }
    render()
    {
        return (
          <div className="person">
              <div class="img-person"></div>
              <h1>{this.props.person.name}</h1>
              <img src={this.url} alt="img"/>
              <h1>{this.props.person.job}</h1>
          </div>
        );
    }

}


export default Person