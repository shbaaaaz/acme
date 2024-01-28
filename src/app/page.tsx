import { PageTemplate } from "@/components/PageTemplate";
import { fetchPageData } from "@/lib/cmsData";
import { Page } from "@/utils/enums";


export default async function Home() {
  const pageData = await fetchPageData(Page.Home)
  
  return (
    <main>
      <PageTemplate sections={pageData.content.sections}/>
    </main>
  );
}
