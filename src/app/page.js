import Banner from "@/Components/Banner";
import GetSolution from "@/Components/GetSolution";
import FeaturedSection from "@/Components/StateSection";
import TopRatedDoctors from "@/Components/TopRatedDoctors";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <TopRatedDoctors/>
      <GetSolution/>
      <FeaturedSection/>
    </div>
  );
}
