import Link from "next/link"

function HomePage() {
  return (
    <div>
      Welcome to Next.js!

      <img src="/images/avatar.jpg" />

      <ul>
        <li>
          <Link href="/sobre" legacyBehavior>
            <a>Ir para a /sobre</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage
