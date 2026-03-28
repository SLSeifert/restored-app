import Header from "../components/Header";
import ContentCurrent from "../features/content/ContentCurrent";
import { ContentList } from "../features/content/ContentList";

const ContentPage = () => {
  return (
    <div>
        <Header/>
        <ContentCurrent/>
        <ContentList/>
    </div>
  )
}

export default ContentPage