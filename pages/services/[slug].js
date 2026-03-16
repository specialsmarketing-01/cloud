import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import ContactTwo from "@/components/contact-two";
import ServiceDetails from "@/components/service-details";

const SERVICE_TITLES = {
  "herd-backofen-reparatur": "Herd & Backofen Reparatur",
  "waschmaschinen-reparatur": "Waschmaschinen Reparatur",
  "trockner-reparatur": "Trockner Reparatur",
  "elektroherd-reparatur": "Elektroherd Reparatur",
  "mikrowellen-reparatur": "Mikrowellen Reparatur",
  "altgeraete-entsorgen": "Altgeräte Entsorgen",
  "geschirrspueler-reparatur": "Geschirrspüler Reparatur",
  "kuehlschrank-reparatur": "Kühlschrank Reparatur"
};

const ServiceDetailsDynamicPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const title = SERVICE_TITLES[slug] || "Service";

  return (
    <MenuContextProvider>
      <Layout PageTitle={title}>
        <HeaderOne />
        <PageHeader title={title} name="Service" />
        <ServiceDetails />
        <ContactTwo />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default ServiceDetailsDynamicPage;

