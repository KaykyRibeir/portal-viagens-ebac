import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <h2>Bem-vindo ao Portal de Viagens</h2>

      <p style={{ marginTop: "20px" }}>
        Descubra destinos incríveis ao redor do mundo.
      </p>

      <Link
        href="/destinos"
        style={{
          display: "inline-block",
          marginTop: "20px",
          backgroundColor: "#0070f3",
          color: "white",
          padding: "10px 15px",
          borderRadius: "5px",
        }}
      >
        Ver destinos
      </Link>
    </Layout>
  );
}
