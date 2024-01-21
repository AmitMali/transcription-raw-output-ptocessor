import JsonProcessor from "./components/JsonProcessor";
import SampleDataComponent from "./components/SampleDataComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <SampleDataComponent />
      </div>
    </main>
  );
}
