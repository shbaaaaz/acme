import { PageTemplate } from "@/components/PageTemplate";
import { fetchContent } from "@/lib/cmsData";
import { PageEnum } from "@/utils/enums";
import { PageType } from "@/utils/types";


export default async function Home() {
  const pageData = await fetchContent<PageType>(PageEnum.Home, "page")
  
  return (
    <main>
      <PageTemplate sections={pageData.content.sections}/>
    </main>
  );
}
