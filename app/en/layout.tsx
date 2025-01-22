
// export const metadata = {
//   title: "PandaHome",
//   description: "A modern and minimalistic portfolio website",
// }

export default function PgLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isRootRoute = !children

  return (

    <section
    className={"relative min-h-[100vh] flex justify-center overflow-hidden px-8 pt-32  lg:pt-40 "}
  >
        {children}
      </section>

  )
}

