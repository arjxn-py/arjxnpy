"use client";

import { useState } from "react";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import PortfolioResultCard from "./PortfolioResultCard";

const AWANLLM_API_KEY = process.env.NEXT_PUBLIC_AWANLLM_API_KEY;

const formSchema = z.object({
  name: z.string().min(2).max(50).optional(),
  emailAddress: z.string().email(),
  education: z.string().min(2).max(100).optional(),
  university: z.string().min(2).max(100).optional(),
  profession: z.string().min(2).max(100).optional(),
  skills: z.string().min(2).max(500).optional(),
  workExperience: z.string().min(1).max(500).optional(),
  interests: z.string().min(2).max(500).optional(),
});

export default function Portfolio() {
  const [generatedObject, setGeneratedObject] = useState(null);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      emailAddress: "",
      education: "",
      university: "",
      profession: "",
      skills: "",
      workExperience: "",
      interests: "",
    },
  });

  const handleSubmit = async (values) => {
    console.log({ values });

    try {
      const prompt = `Generate a professional portfolio for ${values.name} in the specified JSON format & just give the JSON code & nothing else:
      {
        "name": "${values.name}",
        "introduction": "Please provide a brief bio or introduction for the portfolio.",
        "education": {
          "degree": "${values.education}",
          "university": "${values.university}",
          "graduationDate": "[Graduation Date]",
          "coursework": "List any relevant coursework.",
          "relevantProjects": "List any relevant projects undertaken during education."
        },
        "professionalExperience": {
          "position": "${values.profession}",
          "company": "Enter company name",
          "employmentDates": "Enter employment dates",
          "responsibilities": [
            "List responsibilities and achievements in bullet points."
          ]
        },
        "skills": [
          "Programming languages: ${values.skills}",
          "Development frameworks: [List development frameworks]",
          "DevOps tools: [List DevOps tools]",
          "Agile methodologies: [List Agile methodologies]",
          "Strong problem-solving and communication skills"
        ],
        "notableProjects": [
          {
            "name": "[Project Name]",
            "description": "Description of the project"
          }
        ],
        "interestsAndHobbies": [
          {
            "name": "${values.interests}",
            "description": "Description of the interest/hobby"
          }
        ],
        "additionalComponents": {
          "certifications": "List any relevant certifications.",
          "publications": "List any publications.",
          "testimonials": "List any testimonials or endorsements."
        }
      }`;

      const response = await axios.post(
        "https://api.awanllm.com/v1/chat/completions",
        {
          model: "Meta-Llama-3-8B-Instruct",
          messages: [{ role: "user", content: prompt }],
        },
        {
          headers: {
            Authorization: `Bearer ${AWANLLM_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const generatedObject = JSON.parse(
        response.data.choices[0].message.content
      );
      setGeneratedObject(generatedObject);
    } catch (error) {
      console.error("Error generating object:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="emailAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="Your Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="education"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Education</FormLabel>
              <FormControl>
                <Input placeholder="Your Education" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="university"
          render={({ field }) => (
            <FormItem>
              <FormLabel>University/Institution</FormLabel>
              <FormControl>
                <Input placeholder="Your University/Institution" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="profession"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profession/Job Title</FormLabel>
              <FormControl>
                <Input placeholder="Your Profession/Job Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="skills"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Skills</FormLabel>
              <FormControl>
                <Input placeholder="Your Skills" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="workExperience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Work Experience</FormLabel>
              <FormControl>
                <Input placeholder="Your Work Experience" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="interests"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Interests/Hobbies</FormLabel>
              <FormControl>
                <Input placeholder="Your Interests/Hobbies" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
      {/* Render generated object */}
      {generatedObject && (
        <PortfolioResultCard generatedObject={generatedObject} />
      )}
    </Form>
  );
}
