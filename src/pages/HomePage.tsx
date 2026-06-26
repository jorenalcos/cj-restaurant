import Container from "../components/layout/Container";

export default function HomePage() {
  return (
    <Container>
      <div className="py-20">
        <h1 className="text-5xl font-extrabold">
            Good Afternoon 👋
        </h1>

        <p className="mt-3 text-lg text-gray-500">
            What are you craving today?
        </p>
      </div>
    </Container>
  );
}