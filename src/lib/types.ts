import { JSX } from "react";
import { z } from "zod";

export interface ServiceProps {
  num: string;
  title: string;
  description: string;
}

export interface StatsProps {
  num: number;
  text: string;
}

export const contactSchema = z.object({
  firstname: z.string().min(2, "First name must be at least 2 characters"),
  lastname: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(2, "Phone number must be over 2 characters")
    .max(10, "Phone number is only 10 characters"),
  service: z.string().nonempty("Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export interface ContactItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ServiceItem {
  num: string;
  title: string;
  description: string;
}

type CardItem = ContactItem | ServiceItem;

export interface CardProps {
  items: CardItem[];
  type: "contact" | "service";
}

export interface AboutItem {
  fieldName: string;
  fieldValue: string;
}

export interface SkillItem {
  icon: React.JSX.Element;
  name: string;
}

export interface ExperienceItem {
  company: string;
  duration: string;
  position: string;
}

export interface EducationItem {
  degree: string;
  duration: string;
  institution: string;
}

type ListItem = AboutItem | SkillItem | ExperienceItem | EducationItem;

export interface ListProps {
  items: ListItem[];
  type: "about" | "skills" | "experience" | "education";
}
