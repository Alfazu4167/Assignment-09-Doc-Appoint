import Banner from "@/Components/Banner";
import FeaturedSection from "@/Components/FeaturedSection";
import TopRatedDoctors from "@/Components/TopRatedDoctors";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <TopRatedDoctors/>
      <FeaturedSection/>
    </div>
  );
}
