// function UserProfile({Name, Age, Bio}) {
//     return(
//         <div>
//             <h2>{Name}</h2>
//             <p>Age:{Age}</p>
//             <p>Bio:{Bio}</p>
//         </div>


//     );
// }

const UserProfile = (props) => {
   return (
     <div>
       <h2>{props.name}</h2>
       <p>Age: {props.age}</p>
       <p>Bio: {props.bio}</p>
     </div>
   );
 };
 export default UserProfile;