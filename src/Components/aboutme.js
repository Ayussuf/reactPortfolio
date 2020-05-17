

import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class About extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Ahmed Yussuf</h2>
            <img
              src="/images/Ahmed.jpeg"
              alt="avatar"
              style={{height: '250px'}}
              
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>, I am already advanced in HTML, CSS, JavaScript, React, Express, NodeJS and MongoDB and applied this knowledge to practice when creating application and websites. I am very customer-oriented, and I want to focus on the satisfaction of the needs through user-friendly and useful products.</p>
            
          </Cell>
          
        </Grid>
      </div>
    )
  }
}

export default About;