import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
import FooterOne from "@/components/layout/FooterOne/FooterOne";
import Layout from "@/components/layout/Layout/Layout";
import PageHeader from "@/components/sections/PageHeader/PageHeader";
import HeaderInner from "@/components/layout/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/layout/HeaderInnerCloned/HeaderInnerCloned";
import TeamPage from "@/components/sections/TeamPage/TeamPage";
import TeamDetails from "@/components/sections/TeamDetails/TeamDetails";
import TeamSkillsOne from "@/components/sections/TeamSkillOne/TeamSkillOne";

const TourPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <TopbarOne />
      <HeaderInner />
      <HeaderInnerCloned/>
      <PageHeader title='Team Details' subTitle='Team Details' />
      <TeamDetails />
      <TeamSkillsOne />

      <FooterOne />
    </Layout>
  );
};

export default TourPage;

export const Head: HeadFC = () => <title>Our Team || Gotur || Travel & Tour GatsbyJS Template</title>;
