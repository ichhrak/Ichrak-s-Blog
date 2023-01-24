import "./singlepost.css"

export default function Singlepost() {
  return (
    <div className="singlepost">
      <div className="singlepostwrapper">
        <img className="singlepostimg" src="https://www.shutterstock.com/shutterstock/photos/1169527714/display_1500/stock-photo-perfume-bottles-on-pink-background-1169527714.jpg" alt="" />
        <h1 className="singleposttitle">Lorem ipsum dolor sit
        <div className="singlepostedit">
        <i className=" singleposticon fa-regular fa-pen-to-square"></i>
        <i className="singleposticon fa-sharp fa-solid fa-trash"></i>
        </div></h1>
        <div className="singlepostinfo">
             <span className="singlepostauthor">Author : <b> Ichrak </b></span>
             <span className="singlepostdate">1 hour ago</span>
        </div>
        <p className="singlepostdesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reiciendis 
        quam velit blanditiis aspernatur consequuntur quisquam, necessitatibus, 
        qui, laboriosam possimus deleniti? Quia perspiciatis quos suscipit, aut sunt enim corporis molestiae.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reiciendis 
        quam velit blanditiis aspernatur consequuntur quisquam, necessitatibus, 
        qui, laboriosam possimus deleniti? Quia perspiciatis quos suscipit, aut sunt enim corporis molestiae.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reiciendis 
        quam velit blanditiis aspernatur consequuntur quisquam, necessitatibus, 
        qui, laboriosam possimus deleniti? Quia perspiciatis quos suscipit, aut sunt enim corporis molestiae.</p>
      </div>
    </div>
  )
}
