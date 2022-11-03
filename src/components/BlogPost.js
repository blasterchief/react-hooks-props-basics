import React from "react";
import BlogContent from "./BlogContent";
import Comment from "./Comment";

function BlogPost() {
  return (
    <div id="blog-post">
      <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." 
      isPublished={true}
      minutesToRead={1}/>
      <Comment commentText="I agree with this statement. - Angela Merkel" />
      <Comment commentText="A universal truth. - Noam Chomsky" />
      <Comment commentText="Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451" />
      <Comment commentText="Conrad passed this down as a prop!" />
      <Comment commentText="HOLY GUACAMOLE!" hiddenProp="Conrad hid this prop and put it in the console"/>
    </div>
  );
}

export default BlogPost;
