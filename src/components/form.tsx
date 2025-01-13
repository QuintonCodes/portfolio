"use client";

import { serviceOptions } from "@/data/info-data";
import { useContactForm } from "@/hooks/useContactForm";
import { Loader } from "lucide-react";
import { InputField, SelectField } from "./form-fields";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    isLoading,
    formStatus,
    onSubmit,
    renderError,
  } = useContactForm();

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
            Fill out the form below, and I’ll get back to you as soon as
            possible.
          </p>
        </header>

        {/* Contact Information Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            type="text"
            placeholder="First Name"
            register={register("firstname")}
            renderError={() => renderError("firstname")}
          />
          <InputField
            type="text"
            placeholder="Last Name"
            register={register("lastname")}
            renderError={() => renderError("lastname")}
          />
          <InputField
            type="email"
            placeholder="Email Address"
            register={register("email")}
            renderError={() => renderError("email")}
          />
          <InputField
            type="text"
            placeholder="Phone Number"
            register={register("phone")}
            renderError={() => renderError("phone")}
          />
        </div>

        {/* Service Selection */}
        <SelectField
          control={control}
          name="service"
          options={serviceOptions}
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

        {/* Submit Button and Status Message */}
        <div className="flex gap-6">
          <Button
            size="lg"
            className="max-w-40"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <Loader className="animate-spin" /> : "Send Message"}
          </Button>

          {formStatus && (
            <p
              className={`mt-4 ${
                formStatus.success ? "text-green-500" : "text-red-500"
              }`}
            >
              {formStatus.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
