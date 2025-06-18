import Header from "@/components/Header";
import Services from "@/components/Services";
import ReviewsForm from "@/components/ReviewsForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Services />
      <ReviewsForm />
      <Footer />
    </div>
  );
};

export default Index;
