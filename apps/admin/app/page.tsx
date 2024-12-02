import env from "@repo/env";

export default function Home() {
  return <div>{env.API_KEY}</div>;
}
