import React, { useMemo } from "react";
import uuidv4 from "uuidv4";

import { Link } from "../Router";
import { useAllDocuments } from "../FirebaseDatabase";

const useDocumentLists = () => {
  const { document: documents, loaded } = useAllDocuments();

  // Document[]をJSXに変換しているのを、メモ化
  return useMemo(() => {
    if (!loaded) {
      return <div>documents loading now</div>;
    }
    if (!documents) {
      return [];
    }
    return Object.keys(documents).map(textId => {
      const title = documents[textId].title;
      return (
        <li key={textId}>
          <Link as="a" href={`/${textId}`}>
            {title}
          </Link>
        </li>
      );
    });
  }, [documents, loaded]);
};

const IndexPage = () => {
  const list = useDocumentLists();

  return (
    <div>
      <Link as="button" href={`/${uuidv4()}`}>
        ページ作成
      </Link>
      <ul>{list}</ul>
    </div>
  );
};

export default IndexPage;
