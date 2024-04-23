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
      const prompt = `Generate a summary and additional components for a professional portfolio based on the following information:\n\nName: ${values.name}\nEmail Address: ${values.emailAddress}\nEducation: ${values.education}\nUniversity/Institution: ${values.university}\nProfession/Job Title: ${values.profession}\nSkills: ${values.skills}\nWork Experience (in years): ${values.workExperience}\nInterests/Hobbies: ${values.interests}\n\n1. Please provide a brief bio or introduction for the portfolio.\n2. Design a section highlighting the educational background and institutions attended.\n3. Create a section showcasing the professional experience and job roles held.\n4. Develop a section focusing on the skills and competencies possessed.\n5. Include a section displaying any notable projects or work samples.\n6. Add a section showcasing the interests and hobbies of the individual.\n\nPlease ensure that all components are professionally presented and aligned with the person's background, qualifications, and career trajectory.`;

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

      const generatedObject = response.data.choices[0].message.content;
      console.log("Generated object:", generatedObject);
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
    </Form>
  );
}
