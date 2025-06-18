import Header from "@/components/Header";
import Services from "@/components/Services";
import InsuranceBonus from "@/components/InsuranceBonus";
import ReviewsForm from "@/components/ReviewsForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Services />
      <InsuranceBonus />
      <ReviewsForm />
      <Footer />
    </div>
  );
};

export default Index;
