import Post from "./Post";


export default function Feed() {
    return (
        <div className="feed">
            <Post 
                imageSrc="https://lh3.googleusercontent.com/ogw/ADea4I4lekz41FcTZGAr_Jq3x2rAzRRjn-JpiiJbZPhMnQ=s83-c-mo"
                displayName="Marharyta Kulinich"
                userName="@margokulinich"
                text="I try to learn React.js"
                img="https://miro.medium.com/max/2048/1*h5UGPzaL1E4dIy_JWDrsAw.png"
            />
            <Post
                imageSrc="https://dontfear.ru/wp-content/uploads/2014/07/4a0bf547e4d045c0f0557d33cd839f0b-300x300.png"
                displayName="David Lutsenko"
                userName="@user0012"
                text="I try to learn React Router"
                
            />
            <Post
                imageSrc="https://icons.iconarchive.com/icons/icojam/blue-bits/256/user-female-icon.png"
                displayName="Larisa Bonaker"
                userName="@bonaker_l"
                text="I try to learn React hooks"
                img="https://user-images.githubusercontent.com/47307889/116921331-826bbe80-ac5c-11eb-9f48-d8fbde144b04.png"
            />
        </div>
    )
}