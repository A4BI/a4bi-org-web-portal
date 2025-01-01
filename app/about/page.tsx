import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Target, Award } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Mission Section */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6">About AFBI</h1>
        <p className="text-lg text-gray-600 mb-8">
          The Association for Better India (AFBI) is dedicated to fostering a secular, 
          progressive, and economically strong India. We work towards breaking down 
          religious and caste barriers while promoting sustainable development.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <Users className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Community</h3>
            <p className="text-gray-600">
              A diverse network of individuals committed to India's progress
            </p>
          </Card>
          <Card className="p-6">
            <Target className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              Creating an inclusive society focused on development
            </p>
          </Card>
          <Card className="p-6">
            <Award className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Impact</h3>
            <p className="text-gray-600">
              Driving positive change through actionable initiatives
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
        <p className="text-lg text-gray-600 mb-8">
          Be part of the change you want to see in India
        </p>
        <Link href="/contact">
          <Button size="lg">Get Involved</Button>
        </Link>
      </section>
    </div>
  );
}