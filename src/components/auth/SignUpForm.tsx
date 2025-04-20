
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  personalInfoSchema,
  contactInfoSchema,
  addressSchema,
  passwordSchema,
  type PersonalInfoFormValues,
  type ContactInfoFormValues,
  type AddressFormValues,
  type PasswordFormValues,
} from "./schemas";
import { StepIndicator } from "./StepIndicator";
import { PersonalInfoStep } from "./steps/PersonalInfoStep";
import { ContactInfoStep } from "./steps/ContactInfoStep";
import { AddressStep } from "./steps/AddressStep";
import { PasswordStep } from "./steps/PasswordStep";

export const SignUpForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({});

  const personalInfoForm = useForm<PersonalInfoFormValues>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
    },
  });

  const contactInfoForm = useForm<ContactInfoFormValues>({
    resolver: zodResolver(contactInfoSchema),
    defaultValues: {
      email: "",
      phoneNumber: "",
      phoneType: "mobile",
    },
  });

  const addressForm = useForm<AddressFormValues>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      unitNumber: "",
      streetNumber: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      zipCode: "",
      country: "",
    },
  });

  const passwordForm = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmitStep = async (stepData: any) => {
    setFormData({ ...formData, ...stepData });
    
    if (step < 4) {
      setStep(step + 1);
    } else {
      setIsLoading(true);
      console.log({ ...formData, ...stepData });
      setIsLoading(false);
      navigate('/profile');
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInfoStep
            form={personalInfoForm}
            onSubmit={onSubmitStep}
          />
        );
      case 2:
        return (
          <ContactInfoStep
            form={contactInfoForm}
            onSubmit={onSubmitStep}
            onBack={() => setStep(1)}
          />
        );
      case 3:
        return (
          <AddressStep
            form={addressForm}
            onSubmit={onSubmitStep}
            onBack={() => setStep(2)}
          />
        );
      case 4:
        return (
          <PasswordStep
            form={passwordForm}
            onSubmit={onSubmitStep}
            onBack={() => setStep(3)}
            isLoading={isLoading}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <StepIndicator currentStep={step} totalSteps={4} />
      {renderStep()}
    </div>
  );
};
