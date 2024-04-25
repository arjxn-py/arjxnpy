import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PortfolioResultCard = ({ generatedObject }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{generatedObject.name}'s Portfolio</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Introduction */}
        <CardDescription>
          <h3>Introduction</h3>
          <p>{generatedObject.introduction}</p>
        </CardDescription>

        {/* Education */}
        <CardDescription>
          <h3>Education</h3>
          <p>Degree: {generatedObject.education.degree}</p>
          <p>University: {generatedObject.education.university}</p>
          <p>Graduation Date: {generatedObject.education.graduationDate}</p>
          <p>Coursework: {generatedObject.education.coursework}</p>
          <p>Relevant Projects: {generatedObject.education.relevantProjects}</p>
        </CardDescription>

        {/* Professional Experience */}
        <CardDescription>
          <h3>Professional Experience</h3>
          <p>Position: {generatedObject.professionalExperience.position}</p>
          <p>Company: {generatedObject.professionalExperience.company}</p>
          <p>
            Employment Dates:{" "}
            {generatedObject.professionalExperience.employmentDates}
          </p>
          <p>
            Responsibilities:{" "}
            {generatedObject.professionalExperience.responsibilities.join(", ")}
          </p>
        </CardDescription>

        {/* Skills */}
        <CardDescription>
          <h3>Skills</h3>
          {generatedObject.skills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </CardDescription>

        {/* Notable Projects */}
        <CardDescription>
          <h3>Notable Projects</h3>
          {generatedObject.notableProjects.map((project, index) => (
            <div key={index}>
              <h4>{project.name}</h4>
              <p>{project.description}</p>
            </div>
          ))}
        </CardDescription>

        {/* Interests and Hobbies */}
        <CardDescription>
          <h3>Interests and Hobbies</h3>
          {generatedObject.interestsAndHobbies.map((interest, index) => (
            <div key={index}>
              <h4>{interest.name}</h4>
              <p>{interest.description}</p>
            </div>
          ))}
        </CardDescription>

        {/* Additional Components */}
        <CardDescription>
          <h3>Additional Components</h3>
          <p>
            Certifications:{" "}
            {generatedObject.additionalComponents.certifications}
          </p>
          <p>
            Publications: {generatedObject.additionalComponents.publications}
          </p>
          <p>
            Testimonials: {generatedObject.additionalComponents.testimonials}
          </p>
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default PortfolioResultCard;
