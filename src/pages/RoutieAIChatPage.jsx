import { ChatMessages } from "../components/AIChatPage/ChatMessages";
import { Header } from "../components/layout/Header";
import { useLutiEngine } from "../hooks/useLutiEngine";

export default function RoutieAIChatPage() {
  const { messages, onSelect, result, loading } = useLutiEngine();

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F8] pt-[60px]">
      <Header type="back" text="" />
      <main className="flex-1 overflow-y-auto">
        <ChatMessages messages={messages} onSelect={onSelect} />
        {loading && (
          <p className="p-4 text-gray-500">루티가 생각 중이에요...</p>
        )}
        {result && (
          <div className="p-4">
            <h3 className="font-semibold text-[#FF8C7A]">
              {result.routeTitle}
            </h3>
            <pre className="text-xs whitespace-pre-wrap bg-white border p-2 rounded-md mt-2">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </main>
    </div>
  );
}
