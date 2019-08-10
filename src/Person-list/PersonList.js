import React from 'react';
import './PersonList.css';
import Person from '../Person/Person';

class Personlist extends React.Component
{
    constructor()
    {
        super();
        this.peoples=[
            {
                img:5,
                name:"Jon",
                job:"Front-End Developer"
            },
            {
                img:22,
                name:"Bob",
                job:"Back-End Developer"
            },
            {
                img:8,
                name:"Henry",
                job:"Data-Base Developer"
            }
        ]
    }
    render()
    {
        return(
           <section>
              <Person person={this.peoples[0]}/>
              <Person person={this.peoples[1]}/>
              <Person person={this.peoples[2]}/>
           </section>
        );
    }
}


export default Personlist;