"use client";

import { useContactForm } from "@/hooks/useContactForm";
import { services } from "@/lib/data";
import { Loader } from "lucide-react";
import { InputField, SelectField } from "./form-fields";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

export default function Form() {
  const { control, handleSubmit, isLoading, onSubmit, register, renderError } =
    useContactForm();

  return (
    <div className="xl:w-[54%] order-2 xl:order-none">
      <form
        className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Header Section */}
        <header>
          <h3 className="text-4xl text-accent">Get in Touch</h3>
          <p className="text-white/60">
            Fill out the form below, and I`ll get back to you as soon as
            possible.
          </p>
        </header>

        {/* Contact Information Inputs */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <InputField
            placeholder="First Name"
            register={register("firstname")}
            renderError={() => renderError("firstname")}
            type="text"
          />
          <InputField
            placeholder="Last Name"
            register={register("lastname")}
            renderError={() => renderError("lastname")}
            type="text"
          />
          <InputField
            autoComplete="email"
            placeholder="Email Address"
            register={register("email")}
            renderError={() => renderError("email")}
            type="email"
          />
          <InputField
            autoComplete="phone"
            placeholder="Phone Number"
            register={register("phone")}
            renderError={() => renderError("phone")}
            type="text"
          />
        </div>

        {/* Service Selection */}
        <SelectField
          control={control}
          name="service"
          options={services}
          renderError={() => renderError("service")}
        />

        {/* Message Textarea */}
        <div>
          <Textarea
            className="h-[150px]"
            placeholder="Type your message here."
            {...register("message")}
          />
          {renderError("message")}
        </div>

        {/* Submit Button */}
        <div className="flex gap-6">
          <Button
            className="max-w-40"
            disabled={isLoading}
            size="lg"
            type="submit"
          >
            {isLoading ? <Loader className="animate-spin" /> : "Send Message"}
          </Button>
        </div>
      </form>
    </div>
  );
}
