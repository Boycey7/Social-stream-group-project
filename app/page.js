import Main from "@/components/cards/Main";

export default function Home() {
  const mains = [
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
    <>
      <div>
        {mains.map((main) => (
          <Main name={main.name} image={main.image} summary={main.summary} />
        ))}
      </div>
      <Main name="hello" image="image" summary="summary" />
    </>
  );
}