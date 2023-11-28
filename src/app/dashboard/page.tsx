import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/");
  }
  return <div>this is Dashboard page</div>;
};

export default page;
