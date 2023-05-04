import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/great-framework">NextJS is Great fw</Link>
        </li>
        <li>Somethin else</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
