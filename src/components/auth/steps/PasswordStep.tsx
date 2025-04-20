
import { Lock } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { PasswordFormValues } from "../schemas";
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

interface PasswordStepProps {
  form: UseFormReturn<PasswordFormValues>;
  onSubmit: (data: PasswordFormValues) => void;
  onBack: () => void;
  isLoading: boolean;
}

export const PasswordStep = ({ form, onSubmit, onBack, isLoading }: PasswordStepProps) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input {...field} className="pl-9" type="password" placeholder="Create a password" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input {...field} className="pl-9" type="password" placeholder="Confirm your password" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-2">
          <Button type="button" variant="outline" className="w-full" onClick={onBack}>
            Back
          </Button>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Create Account"}
          </Button>
        </div>
      </form>
    </Form>
  );
};
