import Image from "next/image";
import Section from "@/components/layout/section";
import Introduce from "@/components/layout/introduce";
import FeaturedProduct from "@/components/layout/featured-product";
export default function Home() {
  return (
    <main className="flex min-h-screen w-full h-full flex-col items-center justify-between">
      <Introduce />
      <FeaturedProduct
        name="CoiPort"
        teamSize={1}
        desc="Tracking your portfolio and stay up-to-date with trending coins"
        technical="ReactJS, Express, Redux Toolkit, HighCharts, Chakra UI, Redis, MongoDB, AWS"
      >
        <img
          src="https://khuongdinh-portfolio-cnd.s3.ap-southeast-2.amazonaws.com/chart.png"
          className="mt-10 w-full border border-1 border-white/[0.3] rounded-lg p-2"
        />
      </FeaturedProduct>
      <FeaturedProduct
        name="Sadida"
        teamSize={1}
        desc="Ecommerce platform for selling phonecases"
        technical="Nextjs, Jotai, Typescript, MongoDB"
      >
        <img
          src="https://khuongdinh-portfolio-cnd.s3.ap-southeast-2.amazonaws.com/layout.png"
          className="mt-10 w-full border border-1 border-white/[0.3] rounded-lg p-2"
        />
      </FeaturedProduct>
    </main>
  );
}
