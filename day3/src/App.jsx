import Cards from "./Cards"



const App = (elem) => {


  const users = [
    {
      coverPicture: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
      profilePicture: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Aarav Sharma",
      bio: "Travel | Photography | Exploring the world 🌍",
      likes: 12400,
      posts: 186,
      views: 84200
    },
    {
      coverPicture: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
      profilePicture: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Riya Kapoor",
      bio: "Lifestyle creator | Coffee lover ☕ | Dream big",
      likes: 18900,
      posts: 243,
      views: 126500
    },
    {
      coverPicture: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      profilePicture: "https://randomuser.me/api/portraits/men/45.jpg",
      name: "Kabir Mehta",
      bio: "Developer | Tech enthusiast | Building cool things 💻",
      likes: 9700,
      posts: 154,
      views: 68500
    },
    {
      coverPicture: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
      profilePicture: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Ananya Singh",
      bio: "Nature | Adventure | Mountains are calling 🏔️",
      likes: 22100,
      posts: 312,
      views: 154800
    },
    {
      coverPicture: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      profilePicture: "https://randomuser.me/api/portraits/men/68.jpg",
      name: "Vihaan Verma",
      bio: "UI/UX Designer | Creative mind | Minimalism",
      likes: 11300,
      posts: 127,
      views: 74200
    },
    {
      coverPicture: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
      profilePicture: "https://randomuser.me/api/portraits/women/32.jpg",
      name: "Meera Joshi",
      bio: "Fashion | Style | Creating my own story ✨",
      likes: 27600,
      posts: 398,
      views: 198700
    },
    {
      coverPicture: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      profilePicture: "https://randomuser.me/api/portraits/men/22.jpg",
      name: "Arjun Malhotra",
      bio: "Fitness | Discipline | Becoming better every day 💪",
      likes: 15800,
      posts: 219,
      views: 103400
    },
    {
      coverPicture: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      profilePicture: "https://randomuser.me/api/portraits/women/68.jpg",
      name: "Ishita Roy",
      bio: "Books | Writing | Finding stories everywhere 📚",
      likes: 8900,
      posts: 174,
      views: 56300
    },
    {
      coverPicture: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
      profilePicture: "https://randomuser.me/api/portraits/men/75.jpg",
      name: "Aditya Patel",
      bio: "Entrepreneur | Startup | Learn. Build. Grow. 🚀",
      likes: 13400,
      posts: 142,
      views: 91700
    },
    {
      coverPicture: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      profilePicture: "https://randomuser.me/api/portraits/women/49.jpg",
      name: "Sara Khan",
      bio: "Artist | Music | Life is better with creativity 🎨",
      likes: 24300,
      posts: 287,
      views: 167900
    }
  ];

  
  return (
    <div className="flex flex-wrap bg-black">
      {
        users.map(function(elem,idx){
          return <div key={idx}>
            <Cards  coverPicture = {elem.coverPicture} profile = {elem.profilePicture} name = {elem.name} bio = {elem.bio} likes = {elem.likes} posts = {elem.posts} views = {elem.views}/>
          </div>
        })
      }
    
    </div>
  )
}

export default App
