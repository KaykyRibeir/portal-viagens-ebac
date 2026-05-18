import Link from "next/link";
import styles from "./CardDestino.module.css";

interface CardDestinoProps {
  id: string;
  nome: string;
  imagem: string;
}

export default function CardDestino({
  id,
  nome,
  imagem,
}: CardDestinoProps) {
  return (
    <div className={styles.card}>
      <img
        src={imagem}
        alt={nome}
        className={styles.imagem}
      />

      <h2>{nome}</h2>

      <Link href={`/destinos/${id}`} className={styles.botao}>
        Ver detalhes
      </Link>
    </div>
  );
}