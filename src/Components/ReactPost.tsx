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
              <div className={"container"}>
                    <h1 className={"question"}>
                         Q: {iPost.iQuestion}
                    </h1>
                    <h2 className={"answer"}>
                        A: {iPost.iAnswer}
                    </h2>

              {  iPost.iLiked ? <PostLike /> : null }
              <button className={iPost.iLiked ? "btnRed" : "btnGreen"}
                 onClick={() => iLikedPost(iPost)}>
                 {!iPost.iLiked ? "LIKE" : "UNLIKE"}</button>
              </div>
          </>
      )

}
