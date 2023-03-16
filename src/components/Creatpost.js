import React, { useState ,useEffect  } from 'react'
import axios from "axios";
import { Button ,Form} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom' 
const Creatpost = () => {
    const navigate = useNavigate();
    const [post,setPost] = useState({
      title :"",
      description:""
    });
    const handlechange = (e)=>{
// console.log(e.target.value);
const {name,value} = e.target;
setPost((prev)=>{
return {
...prev,
[name]:value,

};
});
    };

    useEffect(()=>{
      console.log(post);
    },[post])

    const handleclick = (e)=>{
    e.preventDefault();
    console.log(post);
    axios
    .post("/create",post)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err));
    navigate("posts");
    }
  return (
    <div style={{width:"90%",margin:"auto auto",textAlign:"center"}}>Creatpost
    <h1>crete a post</h1>
    <Form.Group>
<Form.Control name='title' value={post.title} placeholder='Title'
  style={{marginBottom:"1rem"}}
  onChange={handlechange}
/>
<Form.Control name='description' value={post.description} placeholder='description'
  style={{marginBottom:"1rem"}}
  onChange={handlechange}
/>
    </Form.Group>
    <Button 
    style={{width:"100%" , marginBottom:"1rem"}}
    variant="outline-dark"
    onClick={handleclick}>create post</Button>
   {/* <h1>{post}</h1> */}
    <Button 
    style={{width:"100%"}}
    variant="outline-dark"
    onClick={()=>navigate(-1)}>back</Button>
    </div>
  )
}

export default Creatpost