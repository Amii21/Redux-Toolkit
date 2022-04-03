import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../redux/features/PostSlice";

const Posts = () => {
  const [id, setId] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFetchData = (e) => {
    e.preventDefault();
    if (!id) {
      window.alert("Please Provide Post ID");
    } else {
      dispatch(getPost({ id }));
      setId("");
    }
  };

  return (
    <>
      <div className="row  mt-4 d-flex align-items-center justify-content-center">
        <div className="col-md-8">
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Search By Id :-
              </label>
              <input
                type="number"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <button
              onClick={handleFetchData}
              type="submit"
              className="btn btn-primary"
            >
              Fetch Post
            </button>
            <button
              onClick={() => navigate("/createpost")}
              type="button"
              className="btn btn-warning ms-4"
            >
              Create Post
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Posts;
