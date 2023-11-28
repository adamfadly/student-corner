import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Exam from "@/containers/Exam/ExamTest";

const page = async () => {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/");
  }
  return <Exam />;
};

export default page;
