import ServiceCard from "@/academy-components/serviceCard/ServiceCard";
import { services } from "@/academy-constants/servicesConstants";
import React from "react";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service, index) => (
        <ServiceCard key={index * 9063625} service={service} />
      ))}
    </section>
  );
};

export default Services;
