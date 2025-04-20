
interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export const StepIndicator = ({ currentStep, totalSteps }: StepIndicatorProps) => {
  return (
    <div className="flex justify-between mb-8">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((stepNumber) => (
        <div
          key={stepNumber}
          className={`flex items-center ${stepNumber !== totalSteps ? 'w-full' : ''}`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              currentStep >= stepNumber
                ? 'bg-primary text-primary-foreground'
                : 'bg-gray-200 text-gray-500'
            }`}
          >
            {stepNumber}
          </div>
          {stepNumber !== totalSteps && (
            <div
              className={`h-1 w-full ${
                currentStep > stepNumber ? 'bg-primary' : 'bg-gray-200'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};
