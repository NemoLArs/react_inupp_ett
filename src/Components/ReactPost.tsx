import React from 'react';
import './ReactPost.css';
import PostLike from "./PostLike";

export interface iPost{

    iKey: number;
    iQuestion: string;
    iAnswer: string;
    iLiked?: boolean;
    iDisplay?: boolean;

}

export interface iProps{

    iLikedPost: (post: iPost) => any;
    iPost: iPost;
}


export const ReactPost:React.FC<iProps>= ({

     iPost,
     iLikedPost}) => {


      return(

          <>
          <h1>
              Q: {iPost.iQuestion}
          <br/>
              A: {iPost.iAnswer}
          </h1>
              {  iPost.iLiked ? <PostLike /> : null }
              <button className={"btnBlue"} onClick={() => iLikedPost(iPost)}>LIKE</button>
          </>
      )

}
