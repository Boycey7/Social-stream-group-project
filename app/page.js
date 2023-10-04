import Main from "@/components/cards/Main";

export default function Home() {
  const mains = [
    {
      name: "hello",
      image: "image",
      summary: "summary",
    },
    {
      name: "hello1",
      image: "image1",
      summary: "summary1",
    },
    {
      name: "hello2",
      image: "image2",
      summary: "summary2",
    },
  ];

  return (
    <>
      <p>sssshello</p>
      <div>
        {mains.map((main) => (
          <Main name={main.name} image={main.image} summary={main.summary} />
        ))}
      </div>
      <Main name="hello" image="image" summary="summary" />
    </>
  );
}
