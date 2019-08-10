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
          <div className="person-card">
              <img src={this.url} alt="img"/>
              <h4>{this.props.person.name}</h4>
              <h4>{this.props.person.job}</h4>
          </div>
        );
    }

}


export default Person