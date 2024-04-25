import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PortfolioResultCard = ({ generatedObject }) => {
  return (
    <Card className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <CardHeader className="border-b-2 border-gray-200 pb-4 pt-4 mb-4">
        <CardTitle className="text-2xl font-bold">
          {generatedObject.name}'s Portfolio
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Introduction */}
        <CardDescription className="mb-6">
          <h3 className="text-lg font-semibold pb-2 pt-4">Introduction</h3>
          <p>{generatedObject.introduction}</p>
        </CardDescription>

        {/* Education */}
        <CardDescription className="mb-6">
          <h3 className="text-lg font-semibold pb-2 pt-4">Education</h3>
          <p>Degree: {generatedObject.education.degree}</p>
          <p>University: {generatedObject.education.university}</p>
          <p>Graduation Date: {generatedObject.education.graduationDate}</p>
          <p>Coursework: {generatedObject.education.coursework}</p>
          <p>Relevant Projects: {generatedObject.education.relevantProjects}</p>
        </CardDescription>

        {/* Professional Experience */}
        <CardDescription className="mb-6">
          <h3 className="text-lg font-semibold pb-2 pt-4">
            Professional Experience
          </h3>
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
        <CardDescription className="mb-6">
          <h3 className="text-lg font-semibold pb-2 pt-4">Skills</h3>
          {generatedObject.skills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </CardDescription>

        {/* Notable Projects */}
        <CardDescription className="mb-6">
          <h3 className="text-lg font-semibold pb-2 pt-4">Notable Projects</h3>
          {generatedObject.notableProjects.map((project, index) => (
            <div key={index}>
              <h4 className="font-semibold">{project.name}</h4>
              <p>{project.description}</p>
            </div>
          ))}
        </CardDescription>

        {/* Interests and Hobbies */}
        <CardDescription className="mb-6">
          <h3 className="text-lg font-semibold pb-2 pt-4">
            Interests and Hobbies
          </h3>
          {generatedObject.interestsAndHobbies.map((interest, index) => (
            <div key={index}>
              <h4 className="font-semibold">{interest.name}</h4>
              <p>{interest.description}</p>
            </div>
          ))}
        </CardDescription>

        {/* Additional Components */}
        <CardDescription className="mb-6">
          <h3 className="text-lg font-semibold pb-2 pt-4">
            Additional Components
          </h3>
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
