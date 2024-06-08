import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import logo from "../assets/icon.png"

function Logo(){
    return(
        <img src={logo} alt="c2c"/>
    )
}

function Events() {
  return (
    <div>
        <VerticalTimeline>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="1st Aug 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">Designing and Modelling of IoT, AI & ML systems</h3>
                <p>
                A 5-Day workshop on “Designing and Modelling of IoT, AI & ML systems” with about 50 participants. They were given exposure to All India Council for Technical Education (AICTE), ARM Education, STMicroelectronics with the support from Microsoft and Nielit Calicut.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="19th Jul 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">Hands on Learning Session on Engineering Mathematics</h3>
                <p>
                A Hands on Classroom Session on Engineering Mathematics, conducted with 70 interested candidates to make them aware of the method on using mathematics in algorithms we use in our day-today activities.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="14th Jul 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">Hands on Learning Session on OOPS</h3>
                <p>
                A Hands on Learning Session on Object-Oriented Programming, Participants were given exposure to the real-time usage of OOPS concepts in real life. It was organised with a total of 70 participants.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="4th & 5th May 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">Movie Screening</h3>
                <p>
                Top rated movies were screened, one on each day in a hall of 150 people. The Movies were selected by the majority of the participants and the most liked movie was screened with a total of 300 participants and 50 volunteers.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="4th May 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">IPL Auction</h3>
                <p>
                IPL Auction was conducted with about 100 participants and 50 volunteers in organising it.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="3rd & 4th May 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">Lazer Tag</h3>
                <p>
                It is a recreational shooting sport where participants use infraredemitting light guns to tag designated targets. It was organised with about 100 volunteers and a total of 900 participants.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="28th Feb 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">Potential of IoT</h3>
                <p>
                A Webinar on “Potential of IoT”, presented by Mr.Sriram Nagarajan, Co-Founder & CEO of ROBORAM. This was conducted with about 60 participants.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="29th Jan 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">An Insight about Developer Jobs</h3>
                <p>
                A Webinar on “An Insight about Developer Jobs”. Mr.Rasswanth, Software Engineer(React UI), Mr.Tirumala Babu, Software Engineer(Data Engineering) as the resource people. There were a total of 50 Beneficiaries.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="9th Jan 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">Coding Contest</h3>
                <p>
                A 3-hour coding contest was organised with about 150 participants 
                </p>
            </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                // icon={<StarIcon />}
            />
        </VerticalTimeline>
    </div>
  )
}

export default Events