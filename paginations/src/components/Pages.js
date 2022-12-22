import React from "react";
import Pagination from "@mui/material/Pagination";
import { usePagination } from "./../Hooks/pagination";

const Pages = ({ data }) => {
  const [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex, //eslint-disable-line
    displayPage,
  ] = usePagination(5, data.length);
  return (
    <div style={{ marginLeft: "20px",}}>
      <h1>User Posts</h1>
      {(() => {
        const displayPosts = [];
        for (let i = startPageIndex; i <= endPageIndex; i++) {
          displayPosts.push(
            <div key={data[i].id}>
              <h3>
                <span>{i + 1}</span> {data[i].name}{" "}
              </h3>
              <p>{data[i].email}</p>
              <p>{data[i].body}</p>
            </div>
          );
        }
        return displayPosts;
      })()}
      <Pagination
        color="primary"
        sx={{alignItems:"center",marginBottom:"1rem",marginLeft:"20rem"}}
        count={totalPages}
        onChange={(event, value) => displayPage(value)}
      />
    </div>
  );
};

export default Pages;