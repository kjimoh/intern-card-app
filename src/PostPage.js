import React from "react";
const PostPage = ({ pageValue }) => {
  return (
    <div className="page-post">
      <div className="post-content">
        <span className="days">published {pageValue.days}</span>
        <h3 className="title">{pageValue.title}</h3>
        <div className="category">{pageValue.category}</div>
        <div className="post-image" style={{ background: `${pageValue.bgc}` }}>
          <img src={pageValue.image} alt="" />
        </div>
        <div className="post-body">
          <p>
            {pageValue.body} Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dolor ab cupiditate quis quibusdam molestiae? Quos
            exercitationem ea quidem, possimus incidunt asperiores! Eius modi
            esse alias minus! Voluptate dolorum nobis odio dolores dignissimos
            incidunt eos et voluptatibus labore sint est voluptatem illo culpa
            laudantium quia dolorem doloribus a aliquid eveniet minima, fugit
            ut? Fugit veritatis voluptates, fugiat facere minima tenetur omnis
            rerum ut vel culpa, expedita beatae at mollitia sit pariatur porro
            molestias minus. Incidunt corporis laudantium corrupti fugit sequi
            beatae dignissimos maiores iure, nisi, quam doloremque ad. Iure fuga
            vel quae totam animi eum repudiandae magnam maiores possimus, nisi
            eveniet, rerum expedita! Ipsum numquam fuga ab voluptate repellat
            error, hic neque consequatur quam porro voluptatum accusamus
            temporibus. Placeat minus et iure alias ad dolorem quidem laboriosam
            quasi! Reprehenderit ipsum modi dicta sapiente porro.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
