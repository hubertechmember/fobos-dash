import React from "react";
import { Users, Mic2, Building2, Car, Plane, Dog } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Social Anxiety",
    description: "Practice group interactions, casual conversations, and more.",
    icon: Users,
  },
  {
    id: 2,
    title: "Public Speaking",
    description: "Master presentations, speeches, and impromptu talks.",
    icon: Mic2,
  },
  {
    id: 3,
    title: "Agoraphobia",
    description: "Navigate crowded spaces and public environments safely.",
    icon: Building2,
  },
  {
    id: 4,
    title: "Driving Anxiety",
    description: "Build confidence behind the wheel in various conditions.",
    icon: Car,
  },
  {
    id: 5,
    title: "Fear of Flying",
    description: "Experience air travel scenarios from booking to landing.",
    icon: Plane,
  },
  {
    id: 6,
    title: "Animal Phobias",
    description: "Gradually face fears of dogs, cats, and other animals.",
    icon: Dog,
  },
];

const CategoryCard = ({ title, description, icon: Icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-gray-100">
    <div className="h-12 w-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
      <Icon className="text-teal-600" size={24} />
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <button className="text-teal-600 font-medium hover:text-teal-700 transition-colors">
      Explore Scenarios →
    </button>
  </div>
);

const CategoriesSection = () => {
  return (
    <div className="py-12 px-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">
        Explore Therapy Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
