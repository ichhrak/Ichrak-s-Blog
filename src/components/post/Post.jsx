import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img className ="postimg" src="https://staticg.sportskeeda.com/editor/2023/01/0e59f-16743714096911-1920.jpg" alt="" />
      <div className="postinfo">
        <div className="postcats">
            <span className="postcat">music</span>
            <span className="postcat">life</span>
        </div>
        <span className="posttitle">Lorem ipsum dolor sit </span>
        <hr />
        <span className="postdate">1 hour ago</span>
      </div>
      <p className="postdescription">Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Officiis assumenda facilis ducimus temporibus consequuntur 
      fuga odio molestiae numquam veniam hic consectetur ratione alias aliquam, 
      a illo iusto eveniet voluptatibus repellat?
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Officiis assumenda facilis ducimus temporibus consequuntur 
      fuga odio molestiae numquam veniam hic consectetur ratione alias aliquam, 
      a illo iusto eveniet voluptatibus repellat?Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Officiis assumenda facilis ducimus temporibus consequuntur 
      fuga odio molestiae numquam veniam hic consectetur ratione alias aliquam, 
      a illo iusto eveniet voluptatibus repellat?</p>
    </div>
  )
}
