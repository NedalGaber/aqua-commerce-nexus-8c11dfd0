
import { MainLayout } from "@/components/layouts/main-layout";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Customer Support</h2>
                <p>1-800-TECH-HELP (1-800-832-4435)</p>
                <p>Available 24/7</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Email</h2>
                <p>support@techxpress.com</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Corporate Office</h2>
                <p>TechXpress Inc.</p>
                <p>123 Tech Avenue</p>
                <p>Silicon Valley, CA 94025</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Contact;
