
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="/images/Ahmed.jpeg"
                alt="avatar"
                style={{height: '600px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Ahmed Yussuf</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I am already advanced in HTML, CSS, JavaScript, React, Express, NodeJS and MongoDB and applied this knowledge to practice when creating application and websites. I am very customer-oriented, and I want to focus on the satisfaction of the needs through user-friendly and useful products. I am genuinely interested in my profession and try to spend all my free time to study online and in-class resources. I believe that my passion for Tech industry will outweigh the temporary lack of experience.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Greater Seattle Area</p>
            <h5>Phone</h5>
            <p>(612) 814-7838</p>
            <h5>Email</h5>
            <p>ahmedaliyussuf@gmail.com.com</p>
            
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2020}
              endYear={2020}
              schoolName="Skillspire Coding School, Bellevue WA"
              schoolDescription="Full Stack Web Developer">

              </Education>

               <Education
                 startYear={2016}
                 endYear={2017}
                 schoolName="Ridgewater College, Willmar MN"
                 schoolDescription="Associates Degree in Business Adminstration"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2020}
              jobName="Seattle Public Schools, Seattle WA"
              jobDescription="	Conducting advocacy training and campaigns and capacity building workshops.
              	Provides support and assistance in need.
              	Teach and provide instructional assistance.
              	Observes monitors and redirects students’ behavior.
              	Provides supplement tutoring.
              	Participates in in-service training programs.
              	Developing rapport with children and explaining concepts in simple language."
              />

              <Experience
                startYear={2019}
                endYear={2019}
                jobName="American Council on the Teaching of Foreign Language (ACTFL), Virginia"
                jobDescription="	Language Evaluations
                	Item Reviewing
                	Language Standard Settings."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                
                />
                <Skills
                  skill="HTML/CSS"
                 
                />
                <Skills
                      skill="Bootstrap"
                     
                      />
                <Skills
                    skill="NodeJS"
                    
                />
                <Skills
                    skill="Express"
                    
                />
                <Skills
                    skill="React"
                      
                />
                <Skills
                    skill="MongoDB"
                    
                />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;