export default function Index() {}

export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: "/unauth/",
      permanent: false,
    },
  };
}
