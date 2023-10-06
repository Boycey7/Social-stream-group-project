import Post from "@/components/cards/Post";

export default function Home() {
  const posts = [
    {
      id: 1,
      name: "hello",
      image: "image",
      summary: "summary",
    },
    {
      id: 2,
      name: "hello1",
      image: "image1",
      summary: "summary1",
    },
    {
      id: 3,
      name: "hello2",
      image: "image2",
      summary: "summary2",
    },
  ];


  return (
    <div>
      {/* <Title text="These are some of my favorite movies or are they?" /> */}
      <div className="flex flex-wrap justify-center gap-4 p-4">
        <Post
        />
        {posts.map((post) => {
          // return <Post {...post} key={post.id} />;
          return (
            <Post
              name={post.name}
              image={post.image}
              summary={post.summary}
              key={post.id}
            />
          )
        })}
      </div>
    </div>
  );
}
