import { GetStaticProps } from 'next'
import SiteTemplate from "@/components/layout/SiteTemplate";
import { getAllPostsForHome } from '../lib/api'

export default function Index({ allPosts: { edges }, preview }) {
  //console.log( allPosts );
  return (
    <SiteTemplate>      
      Index
    </SiteTemplate>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}
