import React, { useState, useEffect } from "react";

function DocumentTitle() {
  const [page, setPage] = useState(" ");
  useEffect(() => {
    document.title = page;
  });
  function changeHandle(e) {
    setPage(e.target.value);
  }
  return (
    <div>
      <h1>{page}</h1>
      <input type="text" value={page} onChange={changeHandle} />
    </div>
  );
}
export default DocumentTitle;
