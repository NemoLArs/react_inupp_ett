import React, {useState} from 'react';
import {iPost, ReactPost} from './ReactPost';


export default function BulletinBoard(){



    const listOfQuestions = [
        {
            iKey: 0,
            iQuestion: 'Vad är tre fördelar med att använda React?',
            iAnswer: 'VirtualDOM - Framgångsrikt(mycket jobb) - Native för appar ',
        },
        {
            iKey: 1,
            iQuestion: 'Vad är tre nackdelar med att använda React?',
            iAnswer: 'Finns inga',
        },
        {
            iKey: 2,
            iQuestion: 'Vad är två skillnader mellan React och Angular?',
            iAnswer: 'React=Bibliotek : Angular=Ramverk - React = Bra : Angular = Dåligt',
        },
        {
            iKey: 3,
            iQuestion: 'Vad är tre bibliotek man kan använda med React?',
            iAnswer: 'React Router - Animated - Redux',
        }
    ]

    const [posts, setPosts] = useState<iPost[]>(listOfQuestions);


    const likedPost = (post: iPost) => {


        const newPost = posts.map(postMatch => {
            if(postMatch.iKey===post.iKey){
                postMatch.iLiked=!postMatch.iLiked;
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
