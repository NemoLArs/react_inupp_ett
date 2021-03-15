import React, {useState} from 'react';
import {iPost, ReactPost} from './ReactPost';


export default function BulletinBoard(){



    const listOfQuestions = [
        {
            iKey: 0,
            iQuestion: 'Fråga1',
            iAnswer: 'Svar1'
        },
        {
            iKey: 1,
            iQuestion: 'Fråga2',
            iAnswer: 'Svar2'
        },
        {
            iKey: 2,
            iQuestion: 'Fråga3',
            iAnswer: 'Svar3'
        },

    ]

    const [posts, setPosts] = useState<iPost[]>(listOfQuestions);


    const likedPost = (post: iPost) => {


        const newPost = posts.map(postMatch => {
            if(postMatch.iKey===post.iKey){
                postMatch.iLiked=true;
                return postMatch;
            }
            return postMatch;
        })

        setPosts(newPost);

    }


    return(

         <>
             {posts.map(faqPOST => {
               return  <ReactPost iPost={faqPOST} iLikedPost={(post: iPost)=>likedPost(post)} />
             })}
         </>
   )
}
