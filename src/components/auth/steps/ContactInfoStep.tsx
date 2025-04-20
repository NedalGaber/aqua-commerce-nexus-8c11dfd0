
import { Mail, Phone } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { ContactInfoFormValues } from "../schemas";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactInfoStepProps {
  form: UseFormReturn<ContactInfoFormValues>;
  onSubmit: (data: ContactInfoFormValues) => void;
  onBack: () => void;
}

export const ContactInfoStep = ({ form, onSubmit, onBack }: ContactInfoStepProps) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input {...field} className="pl-9" type="email" placeholder="Enter your email" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input {...field} className="pl-9" type="tel" placeholder="Enter phone number" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phoneType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select phone type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="mobile">Mobile</SelectItem>
                  <SelectItem value="home">Home</SelectItem>
                  <SelectItem value="work">Work</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-2">
          <Button type="button" variant="outline" className="w-full" onClick={onBack}>
            Back
          </Button>
          <Button type="submit" className="w-full">Next</Button>
        </div>
      </form>
    </Form>
  );
};
