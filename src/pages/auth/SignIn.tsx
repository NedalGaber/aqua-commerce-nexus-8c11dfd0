
import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layouts/main-layout";
import { Logo } from "@/components/ui/logo";
import { SignInForm } from "@/components/auth/SignInForm";

const SignIn = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center space-y-6 max-w-md mx-auto">
          <Logo className="mb-4" />
          <div className="w-full bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
            
            <SignInForm />

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link to="/signup" className="text-aqua-600 hover:underline font-medium">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SignIn;
