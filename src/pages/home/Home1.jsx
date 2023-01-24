import Header1 from "../../components/header/Header1";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css"

export default function Home1() {
  return (
      <>
        <Header1/>
        <div className="home">
          <Posts />
          <Sidebar />
        </div>
    </>
  )
}
