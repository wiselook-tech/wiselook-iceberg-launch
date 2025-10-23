"use client";

import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import z from "zod";
import { createContact } from "@/lib/actions/contacts";
import { useState } from "react";
import { motion } from "motion/react";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";

type FormState = "idle" | "submitting" | "success" | "error";

const CALENDAR_URL = "https://calendar.app.google/NvJxzr9aQzB77DeHA";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z
    .string()
    .email({
      message: "Invalid email address.",
    })
    .min(2, {
      message: "Email must be at least 2 characters.",
    }),
  company: z.string().optional(),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val || val === "") return true;
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        return phoneRegex.test(val.replace(/[\s\-\(\)]/g, ""));
      },
      {
        message: "Please enter a valid phone number",
      }
    ),
});

const ContactSection = () => {
  const [formState, setFormState] = useState<FormState>("idle");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const contact = await createContact({
      name: values.name,
      email: values.email,
      company: values.company,
      phone: values.phone,
    });

    if (contact && contact.length > 0) {
      setFormState("success");
      form.reset();
    } else {
      setFormState("error");
      form.setError("root.serverError", {
        message: "Failed to submit the form. Please try again.",
      });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <Title text="Contact us to know more" />
          <Subtitle text="Ready to transform your talent assessment process? Let's discuss how
            Wiselook can help your organization." />
          

          {(formState === "idle" || formState === "submitting") && (
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Telephone" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Company" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button type="submit" disabled={formState === "submitting"}>
                    {formState === "submitting" ? "Submitting..." : "Submit"}
                  </Button>
                </form>
              </Form>
            </motion.div>
          )}

          {formState === "success" && (
            <p className="text-primary">
              Thank you for contacting us! We will get in touch with you soon.
            </p>
          )}
          {formState === "error" && (
            <p className="text-red-500">
              Failed to submit the form. Please try again.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export { ContactSection };
