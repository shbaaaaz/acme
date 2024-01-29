import { PageTemplate } from "@/components/PageTemplate";
import { fetchPageData } from "@/lib/cmsData";
import { PageEnum } from "@/utils/enums";


export default async function Home() {
  const pageData = await fetchPageData(PageEnum.Home)
  
  return (
    <main>
      <PageTemplate sections={pageData.content.sections}/>
    </main>
  );
}
