import Link from 'next/link';
import { ArrowRight, BookOpen, Microscope, Mail } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-700 mb-6">
              Abenezer Taye
            </h1>
            <p className="text-xl md:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto">
              Post-Doctoral Research Scholar at Vanderbilt University
            </p>
            <p className="text-lg text-secondary-700 mb-12 max-w-2xl mx-auto">
              Specializing in Advanced Air Mobility, Trajectory Planning, and Autonomous Systems. 
              Developing safe and energy-efficient solutions for the future of aviation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/research" className="btn-primary inline-flex items-center">
                View My Research
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/contact" className="btn-secondary inline-flex items-center">
                Get In Touch
                <Mail className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <BookOpen className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-secondary-900 mb-2">10+</div>
              <div className="text-secondary-600">Publications</div>
            </div>
            <div className="p-6">
              <Microscope className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-secondary-900 mb-2">5+</div>
              <div className="text-secondary-600">Research Projects</div>
            </div>
            <div className="p-6">
              <div className="h-12 w-12 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">NASA</span>
              </div>
              <div className="text-3xl font-bold text-secondary-900 mb-2">$2.5M</div>
              <div className="text-secondary-600">NASA Funded Research</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}