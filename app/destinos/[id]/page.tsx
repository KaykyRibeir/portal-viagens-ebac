import Layout from "../../../components/Layout";
import { destinos } from "../../../data/destinos";
import styles from "./destino.module.css";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DestinoDetalhe({
  params,
}: PageProps) {
  const { id } = await params;

  const destino = destinos.find(
    (item) => item.id === id
  );

  if (!destino) {
    return (
      <Layout>
        <h2>Destino não encontrado</h2>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={styles.container}>
        <h2>{destino.nome}</h2>

        <img
          src={destino.imagem}
          alt={destino.nome}
          className={styles.imagem}
        />

        <p className={styles.descricao}>
          {destino.descricao}
        </p>
      </div>
    </Layout>
  );
}