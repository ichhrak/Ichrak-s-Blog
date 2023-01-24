import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img
        className="writeImg"
        src="https://static.vecteezy.com/system/resources/previews/004/964/502/original/cute-strawberry-cartoon-seamless-pattern-background-design-for-kids-decorating-wallpaper-wrapping-paper-fabric-backdrop-free-vector.jpg"
        alt=""
      />
     <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
    </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
     </form>
    </div>
  )
}
