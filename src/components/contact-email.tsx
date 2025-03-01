import { ContactFormData } from "@/lib/types";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export default function ContactEmail(data: ContactFormData) {
  return (
    <Html>
      <Head />
      <Preview>New message from {data.firstname}</Preview>
      <Tailwind>
        <Body className="bg-primary text-zinc-200">
          <Container className="max-w-2xl p-6 mx-auto border shadow-md border-accent">
            <Section className="py-4 text-center text-white rounded-t-lg bg-accent">
              <Heading className="text-2xl font-bold text-white">
                New Contact Form Submission
              </Heading>
            </Section>

            <Hr className="border-gray-300" />

            {/* Message Content */}
            <Section className="p-6">
              <Text className="mb-4 text-lg font-semibold">
                Hello, you have a new message!
              </Text>

              <Text>
                <strong>First Name:</strong> {data.firstname}
              </Text>
              <Text>
                <strong>Last Name:</strong> {data.lastname}
              </Text>
              <Text>
                <strong>Email:</strong> {data.email}
              </Text>
              <Text>
                <strong>Phone Number:</strong> {data.phone}
              </Text>
              <Text>
                <strong>Service:</strong> {data.service}
              </Text>

              <Text className="mt-4 font-medium">
                <strong>Message:</strong>
              </Text>
              <Text className="p-4 bg-gray-300 border rounded-lg border-accent">
                {data.message}
              </Text>

              {/* Call to Action */}
              <Section className="mt-6 text-center">
                <Button
                  className="px-6 py-3 font-semibold text-white rounded-lg bg-accent hover:bg-accent-hover hover:opacity-90"
                  href={`mailto:${data.email}`}
                >
                  Reply to {data.firstname}
                </Button>
              </Section>
            </Section>

            {/* Footer */}
            <Section className="mt-6 text-sm text-center text-gray-500">
              <Text>Thank you for reaching out to Quinton</Text>
              <Text>
                <Link
                  className="text-blue-500 hover:underline"
                  href="https://quinton-portfolio.vercel.app"
                >
                  Visit my portfolio
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
