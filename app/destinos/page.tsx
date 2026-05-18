import Layout from "../../components/Layout";
import CardDestino from "../../components/CardDestino";
import { destinos } from "../../data/destinos";
import styles from "./destinos.module.css";

export default function DestinosPage() {
  return (
    <Layout>
      <h2>Destinos Turísticos</h2>

      <div className={styles.grid}>
        {destinos.map((destino) => (
          <CardDestino
            key={destino.id}
            id={destino.id}
            nome={destino.nome}
            imagem={destino.imagem}
          />
        ))}
      </div>
    </Layout>
  );
}