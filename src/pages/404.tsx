import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
import FooterOne from "@/components/layout/FooterOne/FooterOne";
import Layout from "@/components/layout/Layout/Layout";
import PageHeader from "@/components/sections/PageHeader/PageHeader";
import HeaderTwo from "@/components/layout/HeaderTwo/HeaderTwo";
import HeaderTwoCloned from "@/components/layout/HeaderTwoCloned/HeaderTwoCloned";

import Error404 from "@/components/sections/Error404/Error404";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <TopbarOne />
      <HeaderTwo />
      <HeaderTwoCloned />
      <PageHeader title='Error Page' subTitle='404' />
      <Error404 />
      <FooterOne />
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
