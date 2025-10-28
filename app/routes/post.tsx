// you to be able to accpt and use the  url id you have to create this loader and action

// it help use create the type of our route like below
import { Form, redirect, useFetcher, useNavigate } from "react-router";
import type { Route } from "./+types/post";

// in the load we would grab the params of the route
//from the client side then use it , eg feach data api call
export async function clientLoader({ params }: Route.LoaderArgs) {
  const postId = params.postId;
  // fetch data from API or database
  const postExcuse = await fetch(
    `https://excuser-three.vercel.app/v1/excuse/${postId}`
  );
  const postData = await postExcuse.json();
  console.log("post data", postData);

  return { postId, postData };
}
// we use this client action when we want to update,create,delete from our serve DB
export async function clientAction({ params }: Route.LoaderArgs) {
  //eg

  //  const data =  await fetch(`https://excuser-three.vercel.app/v1/excuse/${params.postId}`, {
  //     method: "DELETE",
  //   });

  return { message: "Post deleted successfully" };

  // use this redirect to send client to a page when action i done
  // return redirect("/");
}

//now to display the post Id from  loader to Post, we distruct the loaded data from post param
// we defined the types like below
function Post({ loaderData, actionData }: Route.ComponentProps) {
  //if we are using using feacher then we wont need actionData to action what in it
  const fecher = useFetcher();
  console.log("action data", fecher.data?.message);

  // we use useNavigate to navigate programmatically
   const navigate = useNavigate()



   //we can also use fetecher to get the state is it loading or idle
   //so that we can displY Loading when the action is being performed
   const  isdeleting = fecher.state !== "idle";
   
   if(isdeleting){
    return <div> Deleting....</div>
   }




  return (
    <div>
      post id {loaderData?.postId}, Excuse: {loaderData?.postData[0]?.excuse}{" "}
      <div>
        {/* then we use this from provided by react-rauter */}
        {/* the problem with using this form is that  when it has perfrom action finish it redirct user that will not be helpfull in some plces*/}
        {/* instaed of Form or fecher.form all from react */}
        {/* the difference with fetcher  dont navigate by it self we can decide */}
        <fecher.Form method="delete">
          {/* now if this button is clicked it will triger the client action */}

          <button type="submit">delete</button>
        </fecher.Form>

        <button onClick={()=> navigate('/')}> go to Home</button>
      </div>
    </div>
  );
}

export default Post;
