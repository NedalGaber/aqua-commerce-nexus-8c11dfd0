
import { MainLayout } from "@/components/layouts/main-layout";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">About TechXpress</h1>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <p className="text-lg">
                TechXpress is your premier destination for cutting-edge technology
                and electronics. Founded with a vision to make the latest
                technology accessible to everyone, we've grown to become one of the
                leading electronics retailers in the nation.
              </p>
              <div>
                <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
                <p>
                  To provide customers with the best technology solutions through
                  expert advice, competitive prices, and exceptional service.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Our Values</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Customer First</li>
                  <li>Innovation</li>
                  <li>Integrity</li>
                  <li>Excellence</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default About;
