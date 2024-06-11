import Link from "next/link";
import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();

  return (
    <div>
      Id do post atual: {router.query.id}
      <ul>
        <li>
          <Link href="/" legacyBehavior>
            <a>Ir para a home</a>
          </Link>
        </li>
        <li>
          <Link href={`${router.query.id}/comentarios`} legacyBehavior>
            <a>Ir para comentarios</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
