import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      About page
      <div>
        <Link href="/quiz">
          <button>teake exam</button>
        </Link>
      </div>
    </div>
  );
};

export default page;
