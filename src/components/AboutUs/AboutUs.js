import React from 'react'
import { AboutUsHeading, AboutUsWrapper, DevInfo, DevName, DevPicture, DevWrapper, TeamWrapper } from './AboutUsStyles.js'
import { team } from './team.js'

const AboutUs = () => {
  return (
    <AboutUsWrapper>
        <AboutUsHeading>Our Team</AboutUsHeading>
        <TeamWrapper>
            {team.map((member) => {
                const {name, work, image, tech} = member;
                return (
                    <DevWrapper>
                        <DevName>{name}</DevName>
                        <DevPicture image ={image}></DevPicture>
                        <DevInfo>Role: {work}</DevInfo>
                        <DevInfo>Tech: {tech}</DevInfo>
                    </DevWrapper>
                )
            })}
        </TeamWrapper>
    </AboutUsWrapper>
  )
}

export default AboutUs