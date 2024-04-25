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
    <Card className="max-w-3xl mx-auto p-6 bg-white shadow-lg">
      <CardHeader className="border-b-2 border-gray-200 pb-4 pt-4 mb-4">
        <CardTitle className="text-2xl font-bold text-center">
          {generatedObject.name}&apos;s Portfolio
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
          <p>
            <span className="font-semibold">Degree:</span>{" "}
            {generatedObject.education.degree}
          </p>
          <p>
            <span className="font-semibold">University:</span>{" "}
            {generatedObject.education.university}
          </p>
          <p>
            <span className="font-semibold">Graduation Date:</span>{" "}
            {generatedObject.education.graduationDate}
          </p>
          <p>
            <span className="font-semibold">Coursework:</span>{" "}
            {generatedObject.education.coursework}
          </p>
          <p>
            <span className="font-semibold">Relevant Projects:</span>{" "}
            {generatedObject.education.relevantProjects}
          </p>
        </CardDescription>

        {/* Professional Experience */}
        <CardDescription className="mb-6">
          <h3 className="text-lg font-semibold pb-2 pt-4">
            Professional Experience
          </h3>
          <p>
            <span className="font-semibold">Position:</span>{" "}
            {generatedObject.professionalExperience.position}
          </p>
          <p>
            <span className="font-semibold">Company:</span>{" "}
            {generatedObject.professionalExperience.company}
          </p>
          <p>
            <span className="font-semibold">Employment Dates:</span>{" "}
            {generatedObject.professionalExperience.employmentDates}
          </p>
          <ul className="list-disc text-xs font-light pl-8">
            {generatedObject.professionalExperience.responsibilities.map(
              (responsibility, index) => (
                <li
                  key={index}
                  className={`${
                    index ===
                    generatedObject.professionalExperience.responsibilities
                      .length -
                      1
                      ? "mb-1 pb-2"
                      : ""
                  }`}
                >
                  {responsibility}
                </li>
              )
            )}
          </ul>
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
            <span className="font-semibold">Certifications:</span>{" "}
            {generatedObject.additionalComponents.certifications}
          </p>
          <p>
            <span className="font-semibold">Publications:</span>{" "}
            {generatedObject.additionalComponents.publications}
          </p>
          <p>
            <span className="font-semibold">Testimonials:</span>{" "}
            {generatedObject.additionalComponents.testimonials}
          </p>
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default PortfolioResultCard;
