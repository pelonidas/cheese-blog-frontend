import ArticleCard from "@/components/blog/article-card";
import ContactBanner from "@/components/common/contact-banner";
import Header from "@/components/common/header";

export default function HomePage() {
  return (
    <div>
      <Header />
      <ArticleCard
        category="Travel"
        title="I Created a Developer Rap Video - Here's What I Learned from it. Check it out"
        dateAdded="02 december 2022"
        minutesToRead={3}
        author="Jesica koli"
        excerpt="Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp"
      />
      <ContactBanner />
    </div>
  );
}
